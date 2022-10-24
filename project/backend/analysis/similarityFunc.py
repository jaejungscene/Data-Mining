import numpy as np
from numpy.linalg import norm

def cos_similarity(x :np.array, y :np.array):
    return ( (np.dot(x,y))/(norm(x)*norm(y)) )

# def weight_cos_similarity(x, y):
