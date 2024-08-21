from flask import Flask
import requests

app = Flask(__name__)


@app.route('/')
def hello_world():  # put application's code here

    r = requests.post("http://bugs.python.org", data={'number': '12524', 'type': 'issue', 'action': 'show'})
    print(r.status_code, r.reason)

    return 'Hello World!'


if __name__ == '__main__':
    app.run()
