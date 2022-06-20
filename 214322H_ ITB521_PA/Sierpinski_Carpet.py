#  Chee Bo Yu, 214322H, BA2102
import turtle

def boyuCarpet(boyupoints, boyucolor, boyuTurtle, boyushow=False):
    if boyushow:
        print('DRAW:', boyupoints) #Print Output

    boyuTurtle.fillcolor(boyucolor)
    boyuTurtle.up()  # Pen up
    boyuTurtle.goto(boyupoints[0][0], boyupoints[0][1]) # Go to
    boyuTurtle.down()  # Pen down
    boyuTurtle.begin_fill() # Begin Fill
    boyuTurtle.goto(boyupoints[1][0], boyupoints[1][1]) # Go to
    boyuTurtle.goto(boyupoints[2][0], boyupoints[2][1]) # Go to
    boyuTurtle.goto(boyupoints[3][0], boyupoints[3][1]) # Go to
    boyuTurtle.goto(boyupoints[0][0], boyupoints[0][1]) # Go to
    boyuTurtle.end_fill() # End Fill


def boyuget(p1, p2, V, H, boyushow=False): # Vertical, Horizontal
    x1, y1 = p1
    x2, y2 = p2

    dx = x2 - x1
    dy = y2 - y1

    boyu_x = x1 + V/3 * dx
    boyu_y = y1 + H/3 * dy

    if boyushow:
        print('NEW:', boyu_x, boyu_y)

    return boyu_x, boyu_y


def boyusierpinski(boyupoints, boyudegree, boyuTurtle):

    boyucolormap = ['blue', 'red', 'green', 'cyan', 'yellow',
                'violet', 'orange'] # color

    # Draw a carpet
    boyuCarpet(boyupoints, boyucolormap[boyudegree], boyuTurtle)

    if boyudegree > 0:
        #print('--- 1 ---')
        #print(points)
        boyusierpinski([
                boyuget(boyupoints[0], boyupoints[2], 0, 0),
                boyuget(boyupoints[0], boyupoints[2], 0, 1),
                boyuget(boyupoints[0], boyupoints[2], 1, 1),
                boyuget(boyupoints[0], boyupoints[2], 1, 0)
               ], boyudegree-1, boyuTurtle)

        #print('--- 2 ---')
        #print(points)
        boyusierpinski([
                boyuget(boyupoints[0], boyupoints[2], 0, 1),
                boyuget(boyupoints[0], boyupoints[2], 0, 2),
                boyuget(boyupoints[0], boyupoints[2], 1, 2),
                boyuget(boyupoints[0], boyupoints[2], 1, 1)
               ], boyudegree-1, boyuTurtle)

        #print('--- 3 ---')
        #print(points)
        boyusierpinski([
                boyuget(boyupoints[0], boyupoints[2], 0, 2),
                boyuget(boyupoints[0], boyupoints[2], 0, 3),
                boyuget(boyupoints[0], boyupoints[2], 1, 3),
                boyuget(boyupoints[0], boyupoints[2], 1, 2)
               ], boyudegree-1, boyuTurtle)

        #print('--- 4 ---')
        #print(points)
        boyusierpinski([
                boyuget(boyupoints[0], boyupoints[2], 1, 2),
                boyuget(boyupoints[0], boyupoints[2], 1, 3),
                boyuget(boyupoints[0], boyupoints[2], 2, 3),
                boyuget(boyupoints[0], boyupoints[2], 2, 2)
               ], boyudegree-1, boyuTurtle)

        #print('--- 5 ---')
        #print(points)
        boyusierpinski([
                boyuget(boyupoints[0], boyupoints[2], 2, 2),
                boyuget(boyupoints[0], boyupoints[2], 2, 3),
                boyuget(boyupoints[0], boyupoints[2], 3, 3),
                boyuget(boyupoints[0], boyupoints[2], 3, 2)
               ], boyudegree-1, boyuTurtle)

        #print('--- 6 ---')
        #print(points)
        boyusierpinski([
                boyuget(boyupoints[0], boyupoints[2], 2, 1),
                boyuget(boyupoints[0], boyupoints[2], 2, 2),
                boyuget(boyupoints[0], boyupoints[2], 3, 2),
                boyuget(boyupoints[0], boyupoints[2], 3, 1)
               ], boyudegree-1, boyuTurtle)

        #print('--- 7 ---')
        #print(points)
        boyusierpinski([
                boyuget(boyupoints[0], boyupoints[2], 2, 0),
                boyuget(boyupoints[0], boyupoints[2], 2, 1),
                boyuget(boyupoints[0], boyupoints[2], 3, 1),
                boyuget(boyupoints[0], boyupoints[2], 3, 0)
               ], boyudegree-1, boyuTurtle)

        #print('--- 8 ---')
        #print(points)
        boyusierpinski([
                boyuget(boyupoints[0], boyupoints[2], 1, 0),
                boyuget(boyupoints[0], boyupoints[2], 1, 1),
                boyuget(boyupoints[0], boyupoints[2], 2, 1),
                boyuget(boyupoints[0], boyupoints[2], 2, 0)
               ], boyudegree-1, boyuTurtle)

def boyumain():
    boyuTurtle = turtle.Turtle()
    boyuTurtle.speed(11)  # speed of drawing
    boyuWin = turtle.Screen()

    boyusize = 320 # size of the carpet
    # 3 points of the first triangle based on [x,y] coordinates
    boyuPoints = [[0, 0], [0, boyusize], [boyusize, boyusize], [boyusize, 0]]

    boyudegree = 4  # Degree

    # first call of the recursive function
    boyusierpinski(boyuPoints, boyudegree, boyuTurtle)

    boyuTurtle.hideturtle()  # hide the turtle cursor after drawing is completed
    boyuWin.exitonclick()  # Exit program when user click on window

# calling the function
boyumain()
