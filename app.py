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

nltk.download('punkt')
app = Flask(__name__)
BEARER_TOKEN = "AAAAAAAAAAAAAAAAAAAAAPVwNQEAAAAA%2Bv7l3kAtsp7W7AvPRZzXC%2Fcc4fU%3DbNaKa8qCU6S0zTuYkQ0DgC0bo3yXdMS1mlAQdw0cvOqeStHJAW"

tweetList = []
# tweetList = ['I hate this world', 'I love ice cream', 'There was a dog', 'I need water', 'He was so disappointed']
predictsList = []


# define search twitter function
def search_twitter(query, tweet_fields, max_results=10, bearer_token=BEARER_TOKEN):
    headers = {"Authorization": "Bearer {}".format(bearer_token)}

    _url = "https://api.twitter.com/1.1/search/tweets.json?q={}&result_type=recent&{}&count={}&lang={}&locale={}".format(
        query, tweet_fields, max_results, 'en', 'en'
    )

    # url = "https://api.twitter.com/2/tweets/search/recent?query={}&{}&max_results={}".format(
    #     query, tweet_fields, max_results
    # )
    response = requests.request("GET", _url, headers=headers)
    # print(response.status_code)

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


# Remove special characters from the tweet
def clean_text(tweet):
    tweet = tweet.lower()

    # have to remove "b'RT @endaburke81" at the begining of the tweet
    if (tweet[:4] == "b'rt"):
        tweet = tweet.split(":", 1)[1]

    # Removing digits and numbers
    tweet = "".join([i for i in tweet if not i.isdigit()])

    # Removing special characters from the tweet
    tweet = re.sub(f'[{re.escape(string.punctuation)}]', "", tweet)

    # cleaning = nltk.tokenize.wordpunct_tokenize(tweet)
    # tweet = " ".join(w for w in nltk.wordpunct_tokenize(tweet) if w.lower() in words or not w.isalpha())
    tweet = text_lemmatizer(tweet)

    return tweet


@app.route("/")
def index():
    # return "wtf"
    return render_template('index.html')


# http://127.0.0.1:5000/search?keyword=hello
# https://twylis-app.herokuapp.com/search?keyword=hello

@app.route("/search", methods=['GET'])
def keywordSearch():
    # prompt the search term
    query = request.args.get('keyword')

    print("Hello world")

    # twitter fields to be returned by api call
    tweet_fields = "tweet.fields=text,author_id,created_at"

    # twitter api call
    json_response = search_twitter(query=query, tweet_fields=tweet_fields, max_results=5, bearer_token=BEARER_TOKEN)
    tweetList.clear()
    # x = ""
    if len(json_response['statuses']) == 0:
        print("Error occurred...")

    else:
        for x in range(0, len(json_response['statuses'])):
            tweetList.append(clean_text(json_response['statuses'][x]['text']))

        # for t in tweetList:
        #     print(t)
        # print(tweetList)
        print("---------")

        with open("tw_model1.pkl", 'rb') as file:
            model = pickle.load(file)

        print("successfully loaded pkl 1")

        with open("tw_tfidf1.pkl", 'rb') as file:
            tfidf_vectorizer = pickle.load(file)

        print("successfully loaded pkl 2")

        # print('\n\n\n')
        text_vector = tfidf_vectorizer.transform(tweetList)

        predicts = model.predict(text_vector)

        for k, v in zip(predicts, tweetList):
            print(k, " - ", v)

        return collections.Counter(predicts)


@app.route("/summary")
def summary():
    if len(tweetList) != 0:

        with open("tw_model1.pkl", 'rb') as file:
            model = pickle.load(file)

        with open("tw_tfidf1.pkl", 'rb') as file:
            tfidf_vectorizer = pickle.load(file)

        # print('\n\n\n')
        text_vector = tfidf_vectorizer.transform(tweetList)

        predicts = model.predict(text_vector)

        content = ""

        for k, v in zip(predicts, tweetList):
            content += str((k, v))+"\n"
        print("\n")
        print(content)

        return content
    else:
        return "No content here"


if __name__ == '__main__':
    app.run(port=8000, debug=True)
