from django.urls import path

from .views import (
    home,
    list_view,
    detail_view,
)

app_name = 'tweets'

urlpatterns = [
    path('', list_view, name='list'),
    path('<int:id>/', detail_view, name='detail'),
]
