import turtle

def triangle(n, l):
    if n == 0:
        for _ in range(3):
            turtle.forward(l)
            turtle.left(120)
    else:
        triangle(n-1, l/2)
        turtle.forward(l/2)
        triangle(n-1, l/2)
        turtle.backward(l/2)
        turtle.left(60)
        turtle.forward(l/2)
        turtle.right(60)
        triangle(n-1, l/2)
        turtle.left(60)
        turtle.backward(l/2)
        turtle.right(60)
        triangle(n-1, l/2)
        turtle.forward(l/2)
        turtle.left(120)
        triangle(n-1, l/2)
        turtle.backward(l/2)
        