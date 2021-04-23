import collections
import json
import pickle
import re
import string

import nltk
import requests
from flask import Flask, request, render_template
from nltk import word_tokenize
from nltk.corpus import words
from nltk.stem import WordNetLemmatizer
import sys
from flask_cors import CORS

nltk.download('punkt')
app = Flask(__name__)
BEARER_TOKEN = "AAAAAAAAAAAAAAAAAAAAAPVwNQEAAAAA%2Bv7l3kAtsp7W7AvPRZzXC%2Fcc4fU%3DbNaKa8qCU6S0zTuYkQ0DgC0bo3yXdMS1mlAQdw0cvOqeStHJAW"
CORS(app)

tweetList = []
predictsList = []


# define search twitter function
def search_twitter(query, tweet_fields, max_results=10, bearer_token=BEARER_TOKEN):
    headers = {"Authorization": "Bearer {}".format(bearer_token)}

    _url = "https://api.twitter.com/1.1/search/tweets.json?q={}&result_type=recent&{}&count={}&lang={}&locale={}".format(
        query, tweet_fields, max_results, 'en', 'en'
    )

    response = requests.request("GET", _url, headers=headers)

    if response.status_code != 200:
        raise Exception(response.status_code, response.text)
    return response.json()


def text_lemmatizer(text):
    # This function is used to lemmatize the given sentence
    lemmatizer = WordNetLemmatizer()
    token_words = word_tokenize(text)
    stem_sentence = []
    for word in token_words:
        stem_sentence.append(lemmatizer.lemmatize(word))
    return " ".join(stem_sentence)


# Remove special characters from tweets
def clean_text(tweet):
    tweet = tweet.lower()

    # remove "b'RT @endaburke81" at the begining of the tweet
    if (tweet[:4] == "b'rt"):
        tweet = tweet.split(":", 1)[1]

    # Removing digits and numbers
    tweet = "".join([i for i in tweet if not i.isdigit()])

    # Removing special characters from the tweet
    tweet = re.sub(f'[{re.escape(string.punctuation)}]', "", tweet)

    tweet = text_lemmatizer(tweet)

    return tweet


@app.route("/", methods=['GET', 'POST'])
def index():
    return render_template('example.html')


# http://127.0.0.1:5000/search?keyword=hello
# https://twylis-app.herokuapp.com/search?keyword=hello

# End point to give the results of the analysed tweets
@app.route("/search", methods=['GET'])
def keywordSearch():
    # prompt the search term
    query = request.args.get('keyword')

    # twitter fields to be returned by api call
    tweet_fields = "tweet.fields=text,author_id,created_at"

    # twitter api call
    json_response = search_twitter(query=query, tweet_fields=tweet_fields, max_results=20, bearer_token=BEARER_TOKEN)
    tweetList.clear()

    if len(json_response['statuses']) == 0:
        print("Error occurred...")

    # the tweets are added to a list
    else:
        for x in range(0, len(json_response['statuses'])):
            tweetList.append(clean_text(json_response['statuses'][x]['text']))

        # unpickling the pickle files
        with open("tw_model1.pkl", 'rb') as file:
            model = pickle.load(file)

        with open("tw_tfidf1.pkl", 'rb') as file:
            tfidf_vectorizer = pickle.load(file)

        print("successfully loaded pkl files")

        # predicts the tweets taking from the list
        text_vector = tfidf_vectorizer.transform(tweetList)

        predicts = model.predict(text_vector)

        # prints results in the terminal
        for k, v in zip(predicts, tweetList):
            print(k, " - ", v)

        return collections.Counter(predicts)

# create an end point to send a summary of the tweets analysed.
@app.route("/summary")
def summary():
    if len(tweetList) != 0:
        print('\t\t****** SUMMARY ******')

        # unpickling the pickle files
        with open("tw_model1.pkl", 'rb') as file:
            model = pickle.load(file)

        with open("tw_tfidf1.pkl", 'rb') as file:
            tfidf_vectorizer = pickle.load(file)

        text_vector = tfidf_vectorizer.transform(tweetList)

        predicts = model.predict(text_vector)

        content = ""

        # append a string with the tweets and predictions
        for k, v in zip(predicts, tweetList):
            content += str((k, v))+"\n"
        print("\n")
        print(content)

        return content
    else:
        return "No content here"

if __name__ == '__main__':
    app.run(port=8000, debug=True)
