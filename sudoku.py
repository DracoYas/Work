import math
import tkinter
import panda as pd


S = [ 
      [0,1,0,0,7,8,0,0,0],
      [0,8,0,0,4,0,9,0,0],
      [0,0,5,6,0,0,0,1,0],
      [1,0,0,0,6,0,0,0,5],
      [0,4,0,9,1,5,0,7,2],
      [0,6,7,0,8,0,4,0,0],
      [0,0,0,3,0,0,1,0,0],
      [0,7,0,8,9,0,0,2,3],
      [0,0,0,0,0,4,0,0,0]
     ]

def ligne(S,i):




def colonne(S,j):




def bloc(S,i,j):





def possibles(S,i,j):




def suivante(i,j):


def solve(S,i,j) :
	if i==9 :
		return …
	elif S[i][j]>0 :
		…
		return …
	for k in possibles(S,i,j) :
		S[i][j] = k
		…
		if solve(S,a,b) :
			return …
	S[i][j] = 0
	return False

















sudoku_mots = {



}

p=0
def point(p):
    if mot==len(sudoku):
        p=p+1
    else:
        p=p
    return p

a=0
def compteur (a):
    if point >a:
        compteur=compteur+1
    else:
        compteur=compteur
    return a

       