# Book Recommandation System
it's Korean & Foreign Books Recommendations System.  
this recommendation system is content-based recommendation system.  
recommendation for korean and foreign operates separatly.  


## Web page interface - demonstration vedio
https://user-images.githubusercontent.com/88542073/198238373-4a68cc36-e8ed-4d51-8807-5de73f055e64.mp4


## Entire Structure
![Screen Shot 2022-10-26 at 10 59 18 PM](https://user-images.githubusercontent.com/88542073/198236860-8cb15fc5-0834-43ae-811e-2119dc91a346.png)


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
![Screen Shot 2022-10-27 at 6 07 01 PM](https://user-images.githubusercontent.com/88542073/198242621-55191193-cbd4-4a59-840e-194ff7361a4a.png)
  - total number of books is **43511**
- Foreign book table in Books.db
![Screen Shot 2022-10-27 at 6 05 56 PM](https://user-images.githubusercontent.com/88542073/198242393-0849b7e0-22d7-4779-8993-c3a34a1ba443.png)
  - total number of books is **45895**


## Expreiment
- Every expreiment result is in [project/backend/analysis/analyse.ipynb](https://github.com/jaejungscene/data-mining/tree/main/project/backend/analysis)
