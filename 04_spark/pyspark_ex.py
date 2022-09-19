from pyspark.sql import SparkSession
import time

spark = SparkSession.builder.master("local[1]").appName("Spark_examples").getOrCreate()

time.sleep(10)
data = [1,2,3,4,5]
rdd = spark.sparkContext.parallelize(data)
