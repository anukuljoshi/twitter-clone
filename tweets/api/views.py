from django.contrib.auth import get_user_model
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from tweets.models import Tweet

from .serializers import TweetSerializer

User = get_user_model()


@api_view()
def api_tweet_list_view(request, *args, **kwargs):
    qs = Tweet.objects.all()
    serializer = TweetSerializer(qs, many=True)
    return Response(serializer.data, status.HTTP_200_OK)


@api_view()
def api_tweet_detail_view(request, id, *args, **kwargs):
    qs = Tweet.objects.filter(id=id).first()
    if(qs):
        serializer = TweetSerializer(qs)
        return Response(serializer.data, status.HTTP_200_OK)
    return Response({}, status.HTTP_400_BAD_REQUEST)


@api_view(["POST"])
def api_tweet_create_view(request, *args, **kwargs):
    serializer = TweetSerializer(data=request.data)
    request.data['author'] = request.user.id
    if(serializer.is_valid(raise_exception=True)):
        serializer.save()
        return Response({"message" : "tweet created"}, status.HTTP_201_CREATED)
    return Response({"message" : serializer.error_messages}, status.HTTP_400_BAD_REQUEST)


