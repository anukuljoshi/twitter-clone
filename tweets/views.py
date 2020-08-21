from django.shortcuts import render


def home(request, *args, **kwargs):
    context = {}
    return render(request, 'tweets/home.html', context)


def list_view(request, *args, **kwargs):
    context = {}
    return render(request, 'tweets/list.html', context)


def detail_view(request, id, *args, **kwargs):
    context = {
        'tweet_id' : id
    }
    return render(request, 'tweets/detail.html', context)

