from flask import Flask
from flask_restful import Resource, Api

port = 8880
host = "localhost"

app = Flask(__name__)
api = Api(app)

class analyze(Resource):
    def get(self):
        return {"hello":"world"}

api.add_resource(analyze, "/")

if __name__ == "__main__":
    app.run(host=host, port=port)