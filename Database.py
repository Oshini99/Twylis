import svm as svm
from pyexpat import model

from flask import Flask
import mysql.connector
import numpy as np
import pickle
from mysql.connector import Error

try:
    connection = mysql.connector.connect(host="localhost", database="Indexdb", user="root", password="")

    if connection.is_connected():
        db_info = connection.get_server_info()
        print("Connected to MYSQL server version ", db_info)
        cursor = connection.cursor()
        cursor.execute("select database();")
        record = cursor.fetchone()
        print("You're connected to database: ", record)

except Error as e:
    print("Error while connecting to MySQL", e)

finally:
    if connection.is_connected():
        cursor.close()
        connection.close()
        print("MySQL connection is closed")


app = Flask(__name__)

@app.route('/')
def index():
    return 'This is the Homepage'

if __name__ == "__main__":
    app.run(debug=True)


# save model

svm_model = svm.SVC(kernel='linear')

with open("model.pkl", 'wb') as file:
    pickle.dump(svm_model, file)

with open("model.pkl", 'rb') as file:
    model = pickle.load(file)

with open("tfidf.pkl", 'rb') as file:
    tfidf = pickle.load(file)

