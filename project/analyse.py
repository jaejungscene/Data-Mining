from pyspark.sql import *
from pyspark.sql.functions import *
from pyspark import SparkContext
import pandas as pd

# create the Spark Session
spark = SparkSession.builder.getOrCreate()

# create the Spark Context
sc = spark.sparkContext
rdd = sc.parallelize([(1,2,3,4)]).map(lambda genres: genres[0])
print(rdd.take(1))
print(type(rdd.take(1)))
print(type(rdd.take(1)[0]))