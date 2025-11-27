def nieme_nombre_pair(n):
    if n==1:
        return 0
    return nieme_nombre_pair(n-1)+2

def mystere(l):
    if len(l)==1:
        return(l)
    else :
        return mystere(l[l:])+l[0]

def multiple_treize(n):
    if n==0:
        return True
    if n<0:
        return False
    return multiple_treize(n-13)

def somme_recursive(n):
    if n==1:
        return 1
    return somme_recursive(n-1)+n

def fibo_recursif(n):
    if n==1 or n==2:
        return 1
    return fibo_recursif(n-1)+fibo_recursif(n-2)

def multiplication_russe(x,y):
    p=0
    while x>0:
        if x%2==1:
            p=p+y
        x=x//2
        y=y+y
    return p

def multiplication_russe_recursive(x,y):
    if x==0:
        return 0
    if x%2==1:
        return y+multiplication_russe_recursive(x//2,y*2)
    return multiplication_russe_recursive(x//2,y*2)

def coef_bin(n,p):
    if p==0 or p==n:
        return 1
    return coef_bin(n-1,p-1)+coef_bin(n-1,p)

for i in range(coef_bin):
    