#!/usr/bin/env python
# -*- coding: utf-8 -*-
import bs4
import requests
import json
import pandas as pd
import warnings
import sqlite3

"""
{count} {title} {genre_list} {author} {rating} {publisher} {p_date} {pages} {description} {imgUrl})
"""

conn = sqlite3.connect("Books.db")
cur = conn.cursor()
conn.execute("""
        CREATE TABLE Korean_book(
            id INTEGER,
            title TEXT,
            genres TEXT,
            author TEXT,
            rating REAL, 
            publisher TEXT, 
            p_date INTEGER, 
            pages INTEGER, 
            description TEXT, 
            imgUrl TEXT
        )
""")

warnings.filterwarnings(action="ignore")

path = "/home/ljj0512/private/workspace/data-mining/project/data/korean-books.csv"
with open(path, "w") as f:
    f.write("\"title\",\"genres\",\"author\",\"rating\",\"publisher\",\"p-date\",\"pages\",\"description\",\"imgUrl\"\n")

subject_list = {
    # "01":"소설", "03":"시/에세이", "05":"인문","13":"경제/경영", "15":"자기계발", 
    "19":"역사/문화", "21":"종교", "17":"정치/사회", "23":"예술/대중문화",
    "29":"과학", "26":"기술/공학", "33":"컴퓨터/IT",
    "38":"청소년", "11":"취미/실용/스포츠", "27":"외국어", "32":"여행",
    "07":"가정/육아", "08":"요리", "09":"건강"
}

img_src_url = "https://contents.kyobobook.co.kr/sih/fit-in/142x0/pdt/"
success = [200,299]
max_page = 6
count = 0

for i in subject_list:
    print("="*100)
    print("start ",subject_list[i])
    for j in range(1,50,2):
        subjectNum = int(i)*100 + j
        for page in range(1,max_page):
            url = f"https://product.kyobobook.co.kr/api/gw/pdt/category/all?page={page}&per=50&saleCmdtDvsnCode=KOR&saleCmdtClstCode={subjectNum:04d}&sort=sel"
            data = requests.get(url)
            if success[0]<=data.status_code and data.status_code<=success[1]:
                data = json.loads(data.content.decode("utf-8"))
                for n in range(50):
                    try:
                        book = data["data"]["tabContents"][n]
                        title = book["cmdtName"]
                        author = book["chrcName"]
                        publisher = book["pbcmName"]
                        rating = book["revwRvgrAvg"] if book["revwRvgrAvg"]!=0 else None
                        p_date = book["rlseDate"]
                        description = book["inbukCntt"]
                        imgUrl = img_src_url + book["cmdtcode"] + ".jpg"
                        sub_url = "https://product.kyobobook.co.kr/detail/" + book["saleCmdtId"]
                        sub_data = requests.get(sub_url).content
                        sub_soup = bs4.BeautifulSoup(sub_data, "lxml")
                        genre_dic = {}
                        for genres in (sub_soup.find_all("li",class_="category_list_item")):
                            for genre in genres.find_all("a"):
                                genre_dic[genre.get_text()] = 1
                        genre_list = str(list(genre_dic.keys())).replace("[","").replace("]","").replace("\'","").replace(" ","")
                        try:
                            pages = sub_soup.find("table",class_="tbl_row").tbody.get_text()\
                                .strip().replace(" ","").split("\n")[5].replace("쪽","")
                            # with open(path, "a") as f:
                            #     f.write(f"{count},\"{title}\",\"{genre_list}\",\"{author}\",\"{rating}\",\"{publisher}\",\"{p_date}\",\"{pages}\",\"{description}\",\"{imgUrl}\"\n")
                            cur.execute(
                                'INSERT INTO Korean_book VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
                                (count, title, genre_list, author, rating, publisher, p_date, pages, description, imgUrl)
                            )
                            conn.commit()
                            count += 1
                        except:
                            print(title,"ERROR")
                            pages = None
                    except:
                        print("index out of range")
            else:
                pass
    

conn.close()