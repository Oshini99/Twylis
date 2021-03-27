import os

from flask import Flask, jsonify;
#from flask_cors import CORS;


import pickle
import re
import string
import nltk
from nltk import WordNetLemmatizer
from nltk.tokenize import word_tokenize
from nltk.corpus import words

app = Flask(__name__)

with open("model1.pkl", 'rb') as file:
    model = pickle.load(file)

with open("tfidf1.pkl", 'rb') as file:
    tfidf = pickle.load(file)

@app.route('/<path:template>.html')########################
#@app.route('/')
#def hello_world():
    #return 'Hello World!'
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
    tweet = " ".join(w for w in nltk.wordpunct_tokenize(tweet) if w.lower() in words or not w.isalpha())

    tweet = text_lemmatizer(tweet)

    return tweet

def send_template(template, TEMPLATE_DIR=None):#######################
    template_file = '{}.html'.format(os.path.join(TEMPLATE_DIR, template))############
    return flask.send_file(template_file)##################



###############################

tweet = "Bad Service"

token = tfidf.transform([tweet])

model.predict(token)[0]



if __name__ == '__main__':
    app.run()
    #app.run(debug=True)
