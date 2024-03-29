from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')
  
@app.route('/navpage')
def navpage():
    return render_template('navpage.html')
  
  
@app.route('/gfg/<int:page>')
def gfg(page):
    return render_template('gfg.html', page=page)

@app.route('/profilePage')
def profilePage():
    return render_template('profilePage.html')
  
if __name__ == '__main__':
    app.run()