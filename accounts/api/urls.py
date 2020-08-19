from django.urls import path

from .views import (
    api_user_profile_detail_view,
    api_user_profile_list_view,
    api_user_tweet_list_view,
    api_user_followers_view,
    api_user_following_view,
    api_user_follow_view,
)

urlpatterns = [
    path('', api_user_profile_list_view),
    path('<str:username>/', api_user_profile_detail_view),
    path('<str:username>/tweets/', api_user_tweet_list_view),
    path('<str:username>/followers/', api_user_followers_view),
    path('<str:username>/following/', api_user_following_view),
    path('<str:username>/follow/', api_user_follow_view),
]
