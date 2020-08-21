from django.contrib.auth import get_user_model
from django.shortcuts import render, redirect, reverse
from django.contrib.auth import login, logout
from django.contrib.auth.forms import AuthenticationForm, UserCreationForm

User = get_user_model()


def register_view(request, *args, **kwargs):
    form = UserCreationForm(data=request.POST or None)
    if(form.is_valid()):
        username = form.cleaned_data('username')
        password1 = form.cleaned_data('password1')
        password2 = form.cleaned_data('password2')
        if(password1==password2):
            password = password1
        user = User.objects.create_user(username=username, password=password)
        return redirect(reverse('accounts:login'))

    context = {
        'form' : form
    }
    return render(request, 'accounts/register.html', context=context)


def login_view(request, *args, **kwargs):
    form = AuthenticationForm(request, data=request.POST or None)
    if(form.is_valid()):
        user = form.get_user()
        login(request, user)
        return redirect(reverse('tweets:list'))
    context = {
        'form' : form
    }
    return render(request, 'accounts/login.html', context=context)


def logout_view(request, *args, **kwargs):
    logout(request)
    return redirect(reverse('accounts:login'))
