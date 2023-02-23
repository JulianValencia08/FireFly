from django.db import IntegrityError
from django.shortcuts import render
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.forms import AuthenticationForm
from .forms import UserCreateForm   
from django.contrib.auth.models import User
from django.contrib.auth import login, logout, authenticate
from django.shortcuts import redirect
from django.contrib.auth.decorators import login_required

# Create your views here.
def signupaccount(request):
    if request.method  == 'GET':
        return render(request, 'signupaccount.html', {'form': UserCreateForm}) 
    else:
        if request.method == 'POST':
            form = UserCreateForm(request.POST)
            if form.is_valid():
                usuario = form.save(commit=False)
            # encriptar la contraseña antes de guardar
                usuario.save()
                login(request, usuario)
                return redirect('home')
            else:
                form = UserCreateForm()
                return render(request, 'signupaccount.html', {'form': form})

def loginaccount(request):
    if request.method  == 'GET':
        return render(request, 'loginaccount.html', {'form': AuthenticationForm}) 
    else:
        user = authenticate(request, username=request.POST['username'], password=request.POST['password'])
        if user is None:
            return render(request, 'loginaccount.html', {'form': AuthenticationForm(), 'error': 'username and password do not match'})
        else:
            login(request, user)
            return redirect('home')

def logoutaccount(request):
    logout(request)
    return redirect('home')