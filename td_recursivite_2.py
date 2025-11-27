import turtle

def courbeVK(n, l):
    if n == 0:
        turtle.forward(l)
    else:
        courbeVK(n-1, l/3)
        turtle.left(60)
        courbeVK(n-1, l/3)
        turtle.right(120)
        courbeVK(n-1, l/3)
        turtle.left(60)
        courbeVK(n-1, l/3)

def flocon(n, l):
    for _ in range(3):
        courbeVK(n, l)
        turtle.right(120)

# Exemple d'utilisation
turtle.speed(0)  # Vitesse maximale pour un dessin rapide
flocon(4, 300)   # Flocon de Koch d'ordre 4 avec longueur de segment initiale 300
turtle.done()
