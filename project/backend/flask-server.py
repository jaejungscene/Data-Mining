## https://pythonbasics.org/flask-rest-api/
from flask import Flask, request, jsonify
import os.path as osp
import json
from utils import search_database

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
    # others_genres = []
    # with open(osp.join(data_path,"korean-all-genres.txt"), "rb") as f:
    #     others_genres = f.read().decode("UTF-8").split("\n")
    #     others_genres = others_genres[:len(others_genres)-1]
    return jsonify({"reprGenres":repr_genres})

@app.route("/korean/search=<searchData>", methods=["GET"])
def sent_korean_search_result(searchData):
    searchData = searchData.encode("UTF-8").decode("UTF-8")
    searchResult = search_database(searchData, "Korean_book")
    if(searchResult == []):
        searchResult = "null".encode("UTF-8")
        return searchResult
    else:
        return jsonify(searchResult)



@app.route("/foreign", methods=["GET"])
def sent_foreign_genres():
    repr_genres = []
    with open(osp.join(data_path,"foreign-representative-genres.txt"), "rb") as f:
        repr_genres = f.read().decode("UTF-8").split("\n")
        repr_genres = repr_genres[:len(repr_genres)-1]
    # others_genres = []
    # with open(osp.join(data_path,"foregin-all-genres.txt"), "rb") as f:
    #     others_genres = f.read().decode("UTF-8").split("\n")
    #     others_genres = others_genres[:len(others_genres)-1]
    return jsonify({"reprGenres":repr_genres})

@app.route("/foreign/search=<searchData>", methods=["GET"])
def sent_foreign_search_result(searchData):
    searchData = searchData.encode("UTF-8").decode("UTF-8")
    searchResult = search_database(searchData, "Foreign_book")
    if(searchResult == []):
        searchResult = "null".encode("UTF-8")
        return searchResult
    else:
        return jsonify(searchResult)



@app.route("/recommend", methods=["POST"])
def sent_rec_result():
    with open(f"{data_path}/response.json", "w") as f:
        json.dump(request.json, f)
    return request.json



if __name__ == "__main__":
    app.run(host=host, port=port)