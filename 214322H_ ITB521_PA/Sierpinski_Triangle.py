# Chee Bo Yu, 214322H, BA2102

import turtle
def drawTriangle(boyupoints, boyucolor, boyuTurtle):
    boyuTurtle.fillcolor(boyucolor) # fill color
    boyuTurtle.up() # Pen up
    boyuTurtle.goto(boyupoints[0][0],boyupoints[0][1])
    boyuTurtle.down() # Pen down
    boyuTurtle.begin_fill() # begin fill
    boyuTurtle.goto(boyupoints[1][0],boyupoints[1][1])
    boyuTurtle.goto(boyupoints[2][0],boyupoints[2][1])
    boyuTurtle.goto(boyupoints[0][0],boyupoints[0][1])
    boyuTurtle.end_fill() # end fill

def boyugetMid(p1,p2):
    return ( (p1[0]+p2[0]) / 2, (p1[1] + p2[1]) / 2)

def boyusierpinski(boyupoints,boyudegree,boyuTurtle):
    # Draw a triangle based on the 3 points given
    boyucolormap = ['blue','red','green','cyan','yellow',
                'violet'] # color
    drawTriangle(boyupoints,boyucolormap[boyudegree],boyuTurtle)
    if boyudegree > 0:
        boyusierpinski([boyupoints[0], boyugetMid(boyupoints[0], boyupoints[1]), boyugetMid(boyupoints[0], boyupoints[2])], boyudegree-1, boyuTurtle)
        boyusierpinski([boyupoints[1], boyugetMid(boyupoints[0], boyupoints[1]), boyugetMid(boyupoints[1], boyupoints[2])], boyudegree-1, boyuTurtle)
        boyusierpinski([boyupoints[2], boyugetMid(boyupoints[2], boyupoints[1]), boyugetMid(boyupoints[0], boyupoints[2])], boyudegree-1, boyuTurtle)

def boyumain():
    boyuTurtle = turtle.Turtle()
    # speed of the drawing
    boyuTurtle.speed(11)
    # adjust the drawing speed here
    boyumyWin = turtle.Screen()
    # 3 points of the first triangle based on [x,y] coordinates
    boyuPoints = [[-200,-50],[0,200],[200,-50]]
    boyudegree = 5
    # Vary the degree of complexity here

    # first call of the recursive function
    boyusierpinski(boyuPoints,boyudegree,boyuTurtle)

    boyuTurtle.hideturtle()
    # hide the turtle cursor after drawing is
    # completed

    boyumyWin.exitonclick()
    # Exit program when user click on window

# calling the function
boyumain()
