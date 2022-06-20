# Chee Bo Yu, 214322H, BA2102
import math
import turtle

def boyuCircle(boyupoints,boyucolor,boyuTurtle,boyuRadius):
    boyuTurtle.up()  # Pen up
    boyuTurtle.goto(boyupoints) # Go to
    boyuTurtle.down()  # Pen down
    boyuTurtle.fillcolor(boyucolor)
    boyuTurtle.begin_fill() # Begin Fill
    boyuTurtle.circle(boyuRadius)
    boyuTurtle.end_fill() # End Fill

def getboyuRadius(boyuRadius): # Formula for circle
    return boyuRadius / (1 + math.sqrt(2))

def boyusierpinski(boyupoints,boyuRadius,boyudegree,boyuskip,boyuTurtle):
    boyucolormap = ['blue', 'red', 'green', 'cyan', 'yellow','violet', 'orange'] # color
    boyuCircle(boyupoints,boyucolormap[boyudegree],boyuTurtle,boyuRadius) # Draw a circle

    boyunextRadius = getboyuRadius(boyuRadius)

    if boyudegree > 0:
        boyunextskip = boyuskip + 1
        if boyunextskip > 4:
            boyunextskip = 1

        # 1st Circle appear
        if boyuskip != 1:
            boyusierpinski([boyupoints[0]-boyunextRadius, boyupoints[1]+boyuRadius-2*boyunextRadius], boyunextRadius, boyudegree-1, boyunextskip, boyuTurtle)

       # 2nd Circle appear
        if boyuskip != 2:
            boyusierpinski([boyupoints[0]-boyunextRadius, boyupoints[1]+boyuRadius], boyunextRadius, boyudegree-1, boyunextskip, boyuTurtle)

       # 3rd Circle appear
        if boyuskip != 3:
            boyusierpinski([boyupoints[0]+boyunextRadius, boyupoints[1]+boyuRadius], boyunextRadius, boyudegree-1, boyunextskip, boyuTurtle)

        # 4th Circle appear
        if boyuskip != 4:
            boyusierpinski([boyupoints[0]+boyunextRadius, boyupoints[1]+boyuRadius-2*boyunextRadius], boyunextRadius, boyudegree-1, boyunextskip, boyuTurtle)

def boyumain():
    boyuTurtle = turtle.Turtle()
    boyuTurtle.speed(11)  # speed of drawing
    boyuWin = turtle.Screen()

    boyusize = 100 # size of the circle

    boyuPoints = [0,1] # Points

    boyudegree = 5  # Degree

    # first call of the recursive function
    boyusierpinski(boyuPoints,boyusize,boyudegree,1,boyuTurtle)

    boyuTurtle.hideturtle()  # hide the turtle cursor after drawing is completed
    boyuWin.exitonclick()  # Exit program when user click on window

# calling the function
boyumain()
