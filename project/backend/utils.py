import sqlite3
def search_database(searchData, dbname):
    print(type(searchData))
    searchData = searchData.replace(",","")
    searchStr = "%"
    for i in searchData:
        searchStr = searchStr + i + "%"

    conn = sqlite3.connect("/home/ljj0512/private/workspace/data-mining/project/backend/Books.db")
    cur = conn.cursor()
    cur.execute(f"SELECT title, author, publisher FROM {dbname} WHERE title LIKE \"{searchStr}\"")
    data = cur.fetchall()
    print(type(data))
    print(len(data))
    if len(data) != 0:
        searchResult = []
        for i, (title, author, publisher) in enumerate(data):
            if (author is not None) and ("외" in author):
                # author = author[:-2]
                author = author + "..."
            searchResult.append({
                "key": i,
                "title":title,
                "author":author,
                "publisher":publisher,
            })
        cur.close()
        conn.close()
        return searchResult
    else:
        cur.close()
        conn.close()
        return []
