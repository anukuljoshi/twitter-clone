from django.urls import path

from .views import (
    api_tweet_list_view,
    api_tweet_detail_view,
    api_tweet_create_view
)

urlpatterns = [
    path('', api_tweet_list_view),
    path('tweets/<int:id>/', api_tweet_detail_view),
    path('tweets/create/', api_tweet_create_view)
]
