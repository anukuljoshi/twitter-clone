from django.shortcuts import render, redirect, reverse
from django.contrib.auth import login, logout
from django.contrib.auth.forms import AuthenticationForm, UserCreationForm


def register_view(request, *args, **kwargs):
    form = UserCreationForm(data=request.POST or None)
    if(form.is_valid()):
        print(form.cleaned_data)
    context = {
        'form' : form
    }
    return render(request, 'accounts/register.html', context=context)


def login_view(request, *args, **kwargs):
    form = AuthenticationForm(request, data=request.POST or None)
    if(form.is_valid()):
        user = form.get_user()
        login(request, user)
        return redirect('/')
    context = {
        'form' : form
    }
    return render(request, 'accounts/login.html', context=context)


def logout_view(request, *args, **kwargs):
    if(request.method=='POST'):
        logout(request)
        return redirect(reverse('login'))
    return render(request, 'accounts/logout.html', {})    
