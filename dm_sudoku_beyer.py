### 1
S = [
    [0,1,0,0,7,8,0,0,0],
    [0,8,0,0,4,0,9,0,0],
    [0,0,5,6,0,0,1,0,0],
    [1,0,0,0,6,0,0,5,0],
    [0,4,9,1,5,0,7,2,0],
    [0,6,7,0,8,0,4,0,0],
    [0,0,3,0,1,0,0,0,0],
    [0,7,0,8,9,0,2,3,0],
    [0,0,0,0,0,4,0,0,0]
]

### 2
def ligne(S, i):
    return [x for x in S[i] if x != 0]

### 3
def colonne(S, j):
    return [S[i][j] for i in range(9) if S[i][j] != 0]

### 4
def bloc(S, i, j):
    bi, bj = 3 * (i // 3), 3 * (j // 3)
    nums = []
    for x in range(bi, bi + 3):
        for y in range(bj, bj + 3):
            if S[x][y] != 0:
                nums.append(S[x][y])
    return nums

### 5
def possibles(S, i, j):
    if S[i][j] != 0:
        return []
    nums = set(range(1, 10))
    used = set(ligne(S, i) + colonne(S, j) + bloc(S, i, j))
    return list(nums - used)

### 6
def suivante(i, j):
    if j < 8:
        return (i, j + 1)
    else:
        return (i + 1, 0)

### 7
def solve(S, i=0, j=0):
    if i == 9:
        return True
    elif S[i][j] > 0:
        a, b = suivante(i, j)
        return solve(S, a, b)
    for k in possibles(S, i, j):
        S[i][j] = k
        a, b = suivante(i, j)
        if solve(S, a, b):
            return True
    S[i][j] = 0
    return False
