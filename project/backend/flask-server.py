## https://pythonbasics.org/flask-rest-api/
import json
from flask import Flask, request, jsonify
import os.path as osp
app = Flask(__name__)

port = 8080
host = "localhost"
data_path = "/home/ljj0512/private/workspace/data-mining/project/backend/data"


@app.route("/korean", methods=["GET"])
def sent_korean_genres():
    repr_genres = []
    with open(osp.join(data_path,"korean-representative-genres.txt"), "rb") as f:
        repr_genres = f.read().decode("UTF-8").split("\n")
        repr_genres = repr_genres[:len(repr_genres)-1]
    others_genres = []
    with open(osp.join(data_path,"korean-all-genres.txt"), "rb") as f:
        others_genres = f.read().decode("UTF-8").split("\n")
        others_genres = others_genres[:len(others_genres)-1]
    return jsonify({"reprGenres":repr_genres, "othersGenres":others_genres})


@app.route("/foreign", methods=["GET"])
def sent_foreign_genres():
    return jsonify({"name":"jaejung"})


@app.route("/", methods=["GET"])
def sent_json():
    return jsonify({"name":"jaejung"})


if __name__ == "__main__":
    app.run(host=host, port=port)