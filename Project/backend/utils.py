import sqlite3
def search_database(searchData, dbname):
    print(type(searchData))
    searchData = searchData.replace(",","")
    searchStr = "%"
    for i in searchData:
        searchStr = searchStr + i + "%"

    conn = sqlite3.connect("/home/ljj0512/private/workspace/data-mining/project/backend/Books.db")
    cur = conn.cursor()
    cur.execute(f"SELECT id, title, author, publisher, genres, rating, pages FROM {dbname} WHERE title LIKE \"{searchStr}\"")
    data = cur.fetchall()
    print(type(data))
    print(len(data))
    if len(data) != 0:
        searchResult = []
        for i, (id, title, author, publisher, genres, rating, pages) in enumerate(data):
            if dbname == "Korean_book":
                searchResult.append({
                    "key": i,
                    "id": id,
                    "title":title,
                    "author":author,
                    "publisher":publisher,
                    "genres":genres[5:],
                    "rating":rating,
                    "pages":pages
                })
            else:
                searchResult.append({
                    "key": i,
                    "id": id,
                    "title":title,
                    "author":author,
                    "publisher":publisher,
                    "genres":genres,
                    "rating":rating,
                    "pages":pages
                })
        cur.close()
        conn.close()
        return searchResult
    else:
        cur.close()
        conn.close()
        return []