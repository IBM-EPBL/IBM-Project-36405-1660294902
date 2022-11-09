from flask import Flask , render_template , request , redirect , url_for
signup = Blueprint('signup', __name__, template_folder='templates/signup.html')
app = Flask(__name__)


@signup.route('/signup')
def signup():
    return render_template('signup.html')

if __name__ == '__main__':
   app.run()
