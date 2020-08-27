from django.shortcuts import render, redirect, reverse


def list_view(request, *args, **kwargs):
    if(not request.user.is_authenticated):
        return redirect(reverse('accounts:login'))
    context = {}
    return render(request, 'tweets/list.html', context)


def detail_view(request, id, *args, **kwargs):
    if(not request.user.is_authenticated):
        return redirect(reverse('accounts:login'))
    context = {
        'tweet_id' : id
    }
    return render(request, 'tweets/detail.html', context)

