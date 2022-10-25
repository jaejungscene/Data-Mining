import time
import random
import pickle
import numpy as np
from numpy.linalg import norm
import sqlite3

# FOR_GENRE_NUM = 2855
# KOR_GENRE_NUM = 22


def analyse(data, M):
    print(data)
    DATA_PATH = "/home/ljj0512/private/workspace/data-mining/project/backend"
    dbname = "Korean_book" if(data["where"]=="korean") else "Foreign_book"
    con = sqlite3.connect(f"{DATA_PATH}/Books.db")
    cur = con.cursor()

    # userProfile = make_userProfile(data["books"], data["genres"], data["where"], DATA_PATH)
    # top100Data = []
    # if len(data["books"]) == 0:
    #     #genre만 받았을 경우
    #     print(0)
    # elif len(data["books"]) == 1:
    #     #하나의 책만 받았을 경우
    #     print(1)
    # else:
    #     #두개 이상의 책을 받았을 경우
    #     print(2)

    cur.execute(f"SELECT title, author, publisher, rating, imgUrl FROM {dbname} WHERE id==168")
    temp = cur.fetchall()[0]
    temp = {
            "title":temp[0],
            "author":temp[1],
            "publisher":temp[2],
            "rating":temp[3],
            "imgUrl":temp[4],
    }
    top100Data.append(temp)

    
    for i in range(20):
        try:
            cur.execute(
            f"""
            SELECT title, author, publisher, rating, imgUrl
            FROM {dbname}
            WHERE id=={i}
            """
            )
            temp = cur.fetchall()[0]
            temp = {
            "title":temp[0],
            "author":temp[1],
            "publisher":temp[2],
            "rating":temp[3],
            "imgUrl":temp[4],
            }
            top100Data.append(temp)
        except:
            pass
    cur.close()
    con.close()

    return top100Data



def make_userProfile(books, genres, where, path):
    with open(f"{path}/data/{where}-all-genres-dic.pkl", "rb") as f:
        genres_dic = pickle.load(f)
    

    if len(books) == 0:
        # 0을 남겨둠
        userProfile = np.zeros((1,len(genres_dic)+1))
        for genre in genres:
            userProfile[0,genres_dic[genre]] = 1.
            return userProfile
    else:
        userProfile = np.zeros((len(books),len(genres_dic)+5))
        for genre in genres:
            userProfile[0,genres_dic[genre]] = 1.




def cos_similarity(x :np.array, y :np.array):
    return ( (np.dot(x,y))/(norm(x)*norm(y)) )




def n_gram_hash(text, n, where):
    result = []
    if len(text) > n:
        for i in range(len(text)):
            if i+n > len(text):
                break
            result.append(hash(text[i:i+n]))
    else:
        result.append(hash(text))
    # if where == "korean":
    #     result = result + [0.0 for _ in range(KOR_MAX_LEN_n_2 - len(result))]
    # else:
    #     result = result + [0.0 for _ in range(FOR_MAX_LEN_n_2 - len(result))]
    return result




def create_function(dimensions, thresholds):
  # Creates a hash function from a list of dimensions and thresholds.
  def f(v):
    boolarray = [v[dimensions[i]] >= thresholds[i] for i in range(len(dimensions))]
    return "".join(map(str, map(int, boolarray)))
  return f