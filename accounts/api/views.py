from django.contrib.auth import get_user_model
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework import status, permissions

from tweets.models import Tweet
from tweets.api.serializers import TweetSerializer

from accounts.models import Profile
from .serializers import UserSerializer, ProfileSerializer

User = get_user_model()


@api_view(['GET'])
def api_current_user(request, *args, **kwargs):
    user = request.user
    serializer = UserSerializer(user)
    return Response(serializer.data, status.HTTP_200_OK)

@api_view(['GET'])
def api_user_profile_list_view(request, *args, **kwargs):
    profile_list = Profile.objects.all()
    serializer = ProfileSerializer(profile_list, many=True)
    return Response(serializer.data, status.HTTP_200_OK)


@api_view(['GET'])
def api_user_profile_detail_view(request, username, *args, **kwargs):
    user = User.objects.filter(username=username).first()
    if(user):
        profile = Profile.objects.filter(user=user).first()
        if(profile):
            serializer = ProfileSerializer(profile)
            return Response(serializer.data, status.HTTP_200_OK)
    return Response({'message' : 'Not Found'}, status.HTTP_404_NOT_FOUND)


@api_view(['GET'])
def api_user_tweet_list_view(request, username, *args, **kwargs):
    user = User.objects.filter(username=username).first()
    if(user):
        user_tweets = user.user_tweets.all()
        if(user_tweets):
            serializer = TweetSerializer(user_tweets, many=True)
            return Response(serializer.data, status.HTTP_200_OK)
    return Response({}, status.HTTP_404_NOT_FOUND)


@api_view(['GET'])
def api_user_followers_view(request, username, *args, **kwargs):
    profile = Profile.objects.filter(user__username=username).first()
    if(profile):
        followers = profile.followers.all()
        serializer = ProfileSerializer(followers, many=True)
        return Response(serializer.data, status.HTTP_200_OK)
    return Response({}, status.HTTP_404_NOT_FOUND)


@api_view(['GET'])
def api_user_following_view(request, username, *args, **kwargs):
    profile = Profile.objects.filter(user__username=username).first()
    if(profile):
        following = profile.following.all()
        serializer = ProfileSerializer(following, many=True)
        return Response(serializer.data, status.HTTP_200_OK)
    return Response({}, status.HTTP_404_NOT_FOUND)


@api_view(['GET'])
@permission_classes([permissions.IsAuthenticated])
def api_user_follow_view(request, username, *args, **kwargs):
    profile = Profile.objects.filter(user__username=username).first()
    follower_profile = Profile.objects.filter(user=request.user).first()
    if(profile):
        exist = profile.followers.filter(user=request.user).exists()
        if(exist):
            profile.followers.remove(follower_profile)
        else:
            profile.followers.add(follower_profile)
        followers = profile.followers.all()
        serializer = ProfileSerializer(followers, many=True)
        return Response(serializer.data, status.HTTP_200_OK)
    return Response({}, status.HTTP_404_NOT_FOUND)