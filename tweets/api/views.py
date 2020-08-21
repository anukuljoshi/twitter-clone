from django.contrib.auth import get_user_model
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework import status, permissions

from tweets.models import Tweet

from .serializers import TweetSerializer, TweetCreateSerializer

User = get_user_model()


@api_view(['GET'])
def api_tweet_list_view(request, *args, **kwargs):
    qs = Tweet.objects.all()
    serializer = TweetSerializer(qs, many=True)
    return Response(serializer.data, status.HTTP_200_OK)


@api_view(['GET'])
def api_tweet_detail_view(request, id, *args, **kwargs):
    qs = Tweet.objects.filter(id=id).first()
    if(qs):
        serializer = TweetSerializer(qs)
        return Response(serializer.data, status.HTTP_200_OK)
    return Response({}, status.HTTP_400_BAD_REQUEST)


@api_view(["POST"])
def api_tweet_create_view(request, *args, **kwargs):
    create_serializer = TweetCreateSerializer(data=request.data)
    if(create_serializer.is_valid(raise_exception=True)):
        create_serializer.save(author=request.user)
        return Response(create_serializer.data, status.HTTP_201_CREATED)
    return Response({"message" : create_serializer.error_messages}, status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
@permission_classes([permissions.IsAuthenticated])
def api_tweet_like_view(request, id, *args, **kwargs):
    tweet = Tweet.objects.filter(id=id).first()
    if(tweet):
        exist = tweet.liked_by.filter(id=request.user.id).exists()
        if(exist):
            tweet.liked_by.remove(request.user)
        else:
            tweet.liked_by.add(request.user)
        serializer = TweetSerializer(tweet)
        return Response(serializer.data, status.HTTP_200_OK)
    return  Response({}, status.HTTP_404_NOT_FOUND)