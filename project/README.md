# Book Recommandation System
it's Korean & Foreign Books Recommendations System.  
this recommendation system is content-based recommendation system.  
recommendation for korean and foreign operates separatly.  

## Web page interface - demonstration vedio
![]()

## Entire Structure
![]()

## How to opearte the entire recommendation system simply
First, require 
```
- python >= 3.6
  - pypark
  - flask
  - numpy
  - pandas
- nodejs & npm
- react library: react-router-dom, antd
```
Second, clone data-mining ( `git clone https://github.com/jaejungscene/data-mining.git` ).
type and enter `flask-server.py` in terminal after go to `project/backend` folder.   
type and enter (1)`npm install`, (2)`npm start` in terminal after go to `project/frontend` folder.  
- warning: you have to match hostname, port number of `API_URL` variable in `project/frontend/src/conf/api-url.js` folder and values of `HOST`, `PORT` variables in `project/backend/flask-server.py`.  

## Data
- Korean book table in Books.db
![Screen Shot 2022-10-27 at 5 08 08 PM](https://user-images.githubusercontent.com/88542073/198227982-d9e7eea6-b97b-44fe-9104-285da79c267f.png)
  - total number of books is **44909**
- Foreign book table in Books.db
![Screen Shot 2022-10-27 at 5 10 31 PM](https://user-images.githubusercontent.com/88542073/198228497-fa35ddf5-30ae-4e01-b0f7-1b0ebdfa1e4b.png)
  - total number of books is **52478**


## Expreiment
- Every expreiment result is in `(here)/backend/analysis/korean-book-analyse.ipynb` & `(here)/backend/analysis/foreign-book-analyse.ipynb`
