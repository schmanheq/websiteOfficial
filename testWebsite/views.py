from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def index(response):
    indexHTML = open('static/html/index.html', 'r')
    return HttpResponse(indexHTML)

def thatsMe(response):
    thatsMe = open('static/html/thatsMe.html', 'r')
    return HttpResponse(thatsMe)

def test(response):
    testhtml = open('static/html/html.html', 'r')
    return HttpResponse(testhtml)

def Danksagungen(response): 
    dankehtml = open('static/html/danke.html', 'r')
    return HttpResponse(dankehtml)



#https://stackoverflow.com/questions/21370298/django-errno-2-no-such-file-or-directory
# https://www.youtube.com/watch?v=sm1mokevMWk&t=1145s databases sqlLite
