from django.urls import path
from.import views

urlpatterns = [
    path("", views.index),
    path("thatsMe/", views.thatsMe),
    path("test/", views.test),
    path("Danke/", views.Danksagungen)
]
