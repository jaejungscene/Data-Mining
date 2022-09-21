from pyspark.sql import *
from pyspark.sql.functions import *
from pyspark import SparkContext
import pandas as pd

# create the Spark Session
spark = SparkSession.builder.appName("spakr-01").getOrCreate()

# create the Spark Context
sc = spark.sparkContext

# CODE HERE
document = sc.textFile("/home/ljj0512/private/workspace/data-mining/04_spark/pg100.txt")

counts = document.flatMap(lambda line: line.split())
# for i, line in enumerate(counts.collect()):
#     if i == 10:
#         break
#     print(f"{i}|  {line}")

counts = counts.filter(lambda word: word.isalpha())
# for i, line in enumerate(counts.collect()):
#     if i == 10:
#         break
#     print(f"{i}|  {line}")

counts = counts.map(lambda word: word[0].lower()) # 단어의 맨 앞 알파벳을 소문자로 하고 반환
# for i, line in enumerate(counts.collect()):
#     if i == 10:
#         break
#     print(f"{i}|  {line}")

counts = counts.map(lambda letter: (letter, 1))
# for i, line in enumerate(counts.collect()):
#     if i == 10:
#         break
#     print(f"{i}|  {line}")

counts = counts.reduceByKey(lambda n1,n2: n1+n2)
# for i, line in enumerate(counts.collect()):
#     if i == 10:
#         break
#     print(f"{i}|  {line}")

counts = counts.sortByKey(lambda letter_cnt:letter_cnt[0])
# for i, line in enumerate(counts.collect()):
#     if i == 10:
#         break
#     print(f"{i}|  {line}")

##### answer
# counts = document.flatMap(lambda line: line.split()).filter(lambda word: word.isalpha())\
#     .map(lambda word: word[0].lower())\
#         .map(lambda letter: (letter, 1))\
#             .reduceByKey(lambda n1, n2: n1+n2).sortByKey(lambda letter_cnt:letter_cnt[0])