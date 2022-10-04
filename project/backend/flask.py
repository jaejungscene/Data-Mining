from flask import Flask

app = Flask(__name__)
print(type(__name__))
print(__name__)
@app.route("/login")
def login():
    return "hello login"