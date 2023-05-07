from flask import (Flask, render_template, jsonify, request)

app = Flask("__main__")

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/ticket")
def ticket():
    return render_template("index.html")


@app.route("/BCS")
def BCS():
    return render_template("index.html")


@app.route("/attendForm", methods=['GET', 'POST'])
def attendForm():
    data = request.json
    # do something with data or not i have no time :/
    return jsonify({"sent":"true"})


@app.errorhandler(404)
def not_found(e):
  return "<h1>404 (page not found)</h1>"

app.run(debug=True)
