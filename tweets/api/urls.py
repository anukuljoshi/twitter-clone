from django.urls import path

from .views import (
    api_tweet_list_view,
    api_tweet_detail_view,
    api_tweet_create_view,
    api_tweet_like_view
)

urlpatterns = [
    path('', api_tweet_list_view),
    path('<int:id>/', api_tweet_detail_view),
    path('create/', api_tweet_create_view),
    path('<int:id>/like/', api_tweet_like_view),
]
