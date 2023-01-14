# Book Recommandation System
it's Korean & Foreign Books Recommendations System.  
this recommendation system is content-based recommendation system.  
the algorithm is 
  - (first), creating a vector(s) from read book list and selected genres of user
    - if only get genres from user, creating a genres binary vector.
    - if get both of genres and read book list from user, compressing two or more vectors made by read book list and genres into one vector.
  - (second), finding the similarity score between each of the row of feature matrix(item profile) and created vector(user profile).
    - if only get genres from user, searching through cosine similiarty because the experiment proved that lsh search was not so good rather than linear search.
    - if get both of genres and read book list from user, searching through my similarity & my search, which is made by my idea (the experiment proved that this my method performs overwhelmingly well.
  - (third), Recommendations are made in the order of high similarity scores.  

you can check the results & codes of experiments in `analyse.py` and `analyse.ipynb` in "project/backend/analysis" folder.  
recommendation for korean and foreign operates separatly.  
[The report paper](https://github.com/jaejungscene/data-mining/blob/main/project/report-paper.pdf) written in Korean explains in detail the algorithm, the overall structure and all of this project(objective, purpose, moviation, novelty ...).  
So, at least try reading my report paper and let me know by e-mail if you still don't understand something or if there's anything wrong😊


## Web page interface - Demonstration Video
1. https://user-images.githubusercontent.com/88542073/198238373-4a68cc36-e8ed-4d51-8807-5de73f055e64.mp4  
2. https://user-images.githubusercontent.com/88542073/198881252-c509c9a4-8fde-4e40-a567-e11b227683ef.mp4  


## Entire Structure
![Screen Shot 2022-10-26 at 10 59 18 PM](https://user-images.githubusercontent.com/88542073/198236860-8cb15fc5-0834-43ae-811e-2119dc91a346.png)


## How to opearte the entire recommendation system simply
1. require 
```
- sqlite3
- python >= 3.6
  - sqlite3 (pip install db-sqlite3)
  - pypark
  - flask
  - numpy
  - pandas
- nodejs & npm
- react library: react-router-dom, antd
```
2. clone data-mining ( `git clone https://github.com/jaejungscene/data-mining.git` ).
3. unzip "Books.db.zip" to "Books.db" in that location.  
4. run both the cells of `korean-book.ipynb` and `foreign-book.ipynb` "/project/backend/preprocessing" separately to make.  
  4-1. after (4), there will be each feature matrix of korean and foreign books.
5. type and enter `flask-server.py` in terminal after go to `project/backend` folder.  
6. type and enter (1)`npm install`, (2)`npm start` in terminal after go to `project/frontend` folder.  
- warning: you have to match hostname, port number of `API_URL` variable in `project/frontend/src/conf/api-url.js` folder and values of `HOST`, `PORT` variables in `project/backend/flask-server.py`.  


## Data
- Korean book table in Books.db
![Screen Shot 2022-10-27 at 6 07 01 PM](https://user-images.githubusercontent.com/88542073/198242621-55191193-cbd4-4a59-840e-194ff7361a4a.png)
  - total number of books is **43511**
  - total number of genres **2848**
  - feature matrix of Korean boos is 43511(rows)x2850(columns[id,binary genres vector(2848),hashing value of author])
- Foreign book table in Books.db
![Screen Shot 2022-10-27 at 6 05 56 PM](https://user-images.githubusercontent.com/88542073/198242393-0849b7e0-22d7-4779-8993-c3a34a1ba443.png)
  - total number of books is **45895**
  - total number of genres **980**
  - feature matrix of Foreign book is 45895(rows)x982(columns[id,binary genres vector(980),hashing value of author])
  
## Expreiment
- Expreiments that have every important results conpectly is in [project/backend/analysis/analyse.ipynb](https://github.com/jaejungscene/data-mining/blob/main/project/backend/analysis/analyse.py)
