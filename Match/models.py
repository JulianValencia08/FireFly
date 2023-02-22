from djongo import models

class MyModel(models.Model):
    my_field = models.CharField(max_length=100)
    my_array_field = models.ArrayField(model_container=models.CharField(max_length=50))