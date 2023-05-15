#!/usr/bin/env python
# -*- coding: utf-8 -*-
import pandas as pd
import sqlite3

conn = sqlite3.connect("./Books.db")
cur = conn.cursor()
conn.execute("""
        CREATE TABLE Foreign_book(
            id INTEGER,
            title TEXT,
            genres TEXT,
            author TEXT,
            rating REAL, 
            publisher TEXT, 
            p_date INTEGER, 
            pages INTEGER, 
            language TEXT,
            description TEXT, 
            imgUrl TEXT
        )
""")


data = pd.read_csv("./data/foreign-books.csv")
for i in range(len(data)):
    title = data["title"].iloc[i]
    genre_list = data["genres"].iloc[i].replace("[","").replace("]","").replace("\'","")
    author = data["author"].iloc[i]
    rating = data["rating"].iloc[i]
    publisher = data["publisher"].iloc[i]
    p_date = data["publishDate"].iloc[i]
    pages = data["pages"].iloc[i]
    language = data["language"].iloc[i]
    description = data["description"][i]
    imgUrl = data["coverImg"][i]
    cur.execute(
        'INSERT INTO Foreign_book VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        (i, title, genre_list, author, rating, publisher, p_date, pages, language, description, imgUrl)
    )
    print(i, title)
    conn.commit()
conn.close()