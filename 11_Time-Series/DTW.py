import numpy as np

def dtw(s, t):
    n, m = len(s), len(t)
    dtw_matrix = np.zeros((n+1, m+1))
    for i in range(n+1):
        for j in range(m+1):
            dtw_matrix[i, j] = np.inf
    dtw_matrix[0, 0] = 0
    
    for i in range(1, n+1):
        for j in range(1, m+1):
            cost = abs(s[i-1] - t[j-1])
            # take last min from a square box
            last_min = np.min([dtw_matrix[i-1, j], dtw_matrix[i, j-1], dtw_matrix[i-1, j-1]])
            dtw_matrix[i, j] = cost + last_min
    return dtw_matrix

a = [1,2,3]
b = [2,2,2,3,4]
print(dtw(a, b))
print("="*50)

from fastdtw import fastdtw
from scipy.spatial.distance import euclidean

x = np.array([[1, 2, 3, 3, 7]])
y = np.array([[1, 2, 2, 2, 2, 2, 2, 4]])
print(dtw(x.reshape(-1), y.reshape(-1)))
print(x.reshape(-1)[2])


distance, path = fastdtw(x.T, y.T, dist=euclidean)

print(distance)
print(path)
print(len(path))


# # window contraint
# def constraint_dtw(s, t, window):
#     n, m = len(s), len(t)
#     w = np.max([window, abs(n-m)])
#     dtw_matrix = np.zeros((n+1, m+1))
    
#     for i in range(n+1):
#         for j in range(m+1):
#             dtw_matrix[i, j] = np.inf
#     dtw_matrix[0, 0] = 0
    
#     for i in range(1, n+1):
#         for j in range(np.max([1, i-w]), np.min([m, i+w])+1):
#             dtw_matrix[i, j] = 0
    
#     for i in range(1, n+1):
#         for j in range(np.max([1, i-w]), np.min([m, i+w])+1):
#             cost = abs(s[i-1] - t[j-1])
#             # take last min from a square box
#             last_min = np.min([dtw_matrix[i-1, j], dtw_matrix[i, j-1], dtw_matrix[i-1, j-1]])
#             dtw_matrix[i, j] = cost + last_min
#     return dtw_matrix

# print("="*50)
# print("window 3")
# print(constraint_dtw(x.reshape(-1), y.reshape(-1), window=3))
# print("window 5")
# print(constraint_dtw(x.reshape(-1), y.reshape(-1), window=5))
# print("window 1")
# print(constraint_dtw(x.reshape(-1), y.reshape(-1), window=1))