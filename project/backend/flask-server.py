## https://pythonbasics.org/flask-rest-api/
import json
from flask import Flask, request, jsonify


port = 8080
host = "localhost"

app = Flask(__name__)

@app.route("/korean", methods=["GET"])
def sent_korean_genres():
    return jsonify({"name":"jaejung", "age":25})

@app.route("/", methods=["GET"])
def sent_json():
    return jsonify({"name":"jaejung"})
    # return "hellow"

if __name__ == "__main__":
    app.run(host=host, port=port)