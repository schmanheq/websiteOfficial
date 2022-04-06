from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def index(response):
    indexHTML = open('static/html/index.html', 'r')
    return HttpResponse(indexHTML)

def home(response):
    return HttpResponse("<h1> Thats me: </h1>"
                        " <p> nickname: schmANH </p>"
                        "<p> hobbies: chilling on monkeytype.com, playing chess (i prefer playing on a real board, than online), self growth (if you dont know what this means, google it </p>"
                        )

#def thatsMe(response):
    #html = open('static/html/html.html', 'r')
    #return HttpResponse(html)

def test(response):
    testhtml = open('static/html/html.html', 'r')
    return HttpResponse(testhtml)



#https://stackoverflow.com/questions/21370298/django-errno-2-no-such-file-or-directory
# https://www.youtube.com/watch?v=sm1mokevMWk&t=1145s databases sqlLite
