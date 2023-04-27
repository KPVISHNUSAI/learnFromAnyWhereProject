from flask import Flask,render_template,redirect,request
app = Flask(__name__)


@app.route('/')
def login():
    return render_template('login.html')

@app.route('/home',methods=['GET','POST'])
def home():
    if request.method == 'POST':
        
        a = request.form['email']
        b = request.form['password']
        print(a,b)
        if(a=='kpvishnusai1111@gmail.com' and b=='12345'):
            return render_template('index.html')
        else:
            return render_template('login.html', error = 'Enter correct login crediantials')

if __name__ == "__main__":
    app.run(debug=True)