import pickle

import requests
import json
import re
from langdetect import detect
import nltk
import string
from nltk.corpus import words
from nltk.stem import WordNetLemmatizer
from nltk import word_tokenize
from sklearn.feature_extraction.text import TfidfVectorizer

BEARER_TOKEN = "AAAAAAAAAAAAAAAAAAAAAPVwNQEAAAAA%2Bv7l3kAtsp7W7AvPRZzXC%2Fcc4fU%3DbNaKa8qCU6S0zTuYkQ0DgC0bo3yXdMS1mlAQdw0cvOqeStHJAW"


# define search twitter function
def search_twitter(query, tweet_fields, max_results=10, bearer_token=BEARER_TOKEN):
    headers = {"Authorization": "Bearer {}".format(bearer_token)}

    url = "https://api.twitter.com/2/tweets/search/recent?query={}&{}&max_results={}".format(
        query, tweet_fields, max_results
    )
    response = requests.request("GET", url, headers=headers)

    print(response.status_code)

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

    # splitting the tweet
    tweet = tweet.split()

    # Joining the tweet
    tweet = " ".join(tweet)

    # Removing digits and numbers
    tweet = "".join([i for i in tweet if not i.isdigit()])

    # Removing special characters from the tweet
    tweet = re.sub(f'[{re.escape(string.punctuation)}]', "", tweet)

    # cleaning = nltk.tokenize.wordpunct_tokenize(tweet)
    # tweet = " ".join(w for w in nltk.wordpunct_tokenize(tweet) if w.lower() in words or not w.isalpha())

    tweet = text_lemmatizer(tweet)

    return tweet


# search term
# query = "dialog"

# prompt the search term
query = input("Enter Key-Word: ")

# twitter fields to be returned by api call
tweet_fields = "tweet.fields=text,author_id,created_at"

# twitter api call
json_response = search_twitter(query=query, tweet_fields=tweet_fields, max_results=10, bearer_token=BEARER_TOKEN)
print(type(json_response))

print("------------------------------------------------\n")
# pretty printing
print(json.dumps(json_response, indent=4, sort_keys=True))

# print(json_response['data'][0])
# json_response = list(json_response)

tweetList = []
# print("++++++++++           ",json_response)
for x in range(0, len(json_response['data'])):
    print("-----------")
    # if detect(json_response['data'][x]['text']) == 'en':
    # tweetList.append(json_response['data'][x]['text'])
    tweetList.append(clean_text(json_response['data'][x]['text']))


print("\n    +++ Tweets List +++\n")
for t in tweetList:
    print(t,"\n")



with open("tw_model.pkl", 'rb') as file:
    model = pickle.load(file)

with open("tw_tfidf.pkl", 'rb') as file:
    tfidf_vectorizer = pickle.load(file)

print('\n\n\n')
text_vector = tfidf_vectorizer.transform(tweetList)
print(model.predict(text_vector))
