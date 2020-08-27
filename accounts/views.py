from django.contrib.auth import get_user_model
from django.shortcuts import render, redirect, reverse
from django.contrib.auth import login, logout, authenticate
from django.contrib.auth.forms import AuthenticationForm, UserCreationForm

from .forms import UserCreateForm, LoginForm

User = get_user_model()


def register_view(request, *args, **kwargs):
    if(request.user.is_authenticated):
        return redirect(reverse('tweets:list'))
    form = UserCreateForm(request.POST or None)
    if(form.is_valid()):
        username = form.cleaned_data['username']
        password = form.cleaned_data['password']
        password2 = form.cleaned_data['password2']
        first_name = form.cleaned_data['first_name']
        last_name = form.cleaned_data['last_name']
        email = form.cleaned_data['email']
        if(password==password2):
            user = User.objects.create_user(username=username, password=password)
            user.first_name = first_name
            user.last_name = last_name
            user.email = email
            user.save()
            return redirect(reverse('accounts:login'))
        else:
            form.add_error('password', 'Passwords did not match. Try Again')
    context = {
        'form' : form
    }
    return render(request, 'accounts/register.html', context=context)


def login_view(request, *args, **kwargs):
    if(request.user.is_authenticated):
        return redirect(reverse('tweets:list'))
    form = LoginForm(request.POST or None)
    if(form.is_valid()):
        username = form.cleaned_data['username']
        password = form.cleaned_data['password']
        user = authenticate(request, username=username, password=password)
        if(user):
            login(request, user)
            return redirect(reverse('tweets:list'))
        else:
            form.add_error('username', 'Incorrect Username or Password')
    context = {
        'form' : form
    }
    return render(request, 'accounts/login.html', context=context)


def logout_view(request, *args, **kwargs):
    logout(request)
    return redirect(reverse('accounts:login'))


def user_profile_view(request, username, *args, **kwargs):
    if(not request.user.is_authenticated):
        return redirect(reverse('accounts:login'))
    context = {
        'username' : username
    }
    return render(request, 'accounts/profile.html', context=context)