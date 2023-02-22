"""
<<<<<<< HEAD
WSGI config for FireFly project.
=======
WSGI config for FireFlyProject project.
>>>>>>> 3a5c1bcd5bc2766a15bba2112a510eff1d956780

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/2.2/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application

<<<<<<< HEAD
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'FireFly.settings')
=======
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'FireFlyProject.settings')
>>>>>>> 3a5c1bcd5bc2766a15bba2112a510eff1d956780

application = get_wsgi_application()
