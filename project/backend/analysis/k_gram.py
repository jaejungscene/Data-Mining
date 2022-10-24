KOR_MAX_LEN_n_2 = 82
FOR_MAX_LEN_n_2 = 82

def k_gram_hash(text, n, where):
    result = []
    for i in range(len(text)-1):
        result.append(hash(text[i:i+n]))
    if where == "korean":
        result = result + [0.0 for _ in range(KOR_MAX_LEN_n_2 - len(result))]
    else:
        result = result + [0.0 for _ in range(FOR_MAX_LEN_n_2 - len(result))]
    return result

x = "달러구트 꿈 백화점"
y = "달러구트 꿈 백화점2"
z = "하얼빈"
# print(k_gram_hash(x, 2, "korean"))
print(len(k_gram_hash(x, 2, "korean")))
print(len(k_gram_hash(y, 2, "korean")))
print(len(k_gram_hash(z, 2, "korean")))