from django.urls import path
from .views import RegisterView, RetrieveUserView

urlpatterns = [
    path('register', RegisterView.as_view()),
    path('user', RetrieveUserView.as_view())

]
