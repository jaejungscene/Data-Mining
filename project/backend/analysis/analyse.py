
import sqlite3

def analyse(data):
    DATA_PATH = "/home/ljj0512/private/workspace/data-mining/project/backend"
    dbname = "Korean_book" if(data["where"]=="korean") else "Foreign_book"
    con = sqlite3.connect(f"{DATA_PATH}/Books.db")
    cur = con.cursor()
    sentData = []

    cur.execute(f"SELECT title, author, publisher, rating, imgUrl FROM {dbname} WHERE id==168")
    temp = cur.fetchall()[0]
    temp = {
            "title":temp[0],
            "author":temp[1],
            "publisher":temp[2],
            "rating":temp[3],
            "imgUrl":temp[4],
    }
    sentData.append(temp)

    
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
            sentData.append(temp)
        except:
            pass
    cur.close()
    con.close()

    return sentData

