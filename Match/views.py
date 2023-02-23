from django.shortcuts import render
from Accounts.models import Usuario
# Create your views here.
def home(request):
    if request.method == 'POST':
        if 'submit_button' in request.POST:
            if request.POST['submit_button'] == 'button1':
                # Metodo de filter
                usuarios = Usuario.objects.filter(intereses__icontains='LoL')

                return render(request, 'match.html', {'pareja': usuarios})
    return render(request, 'home.html')

def match(request):
    return render(request, 'match.html')