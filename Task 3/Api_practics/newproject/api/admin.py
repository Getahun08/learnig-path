from django.contrib import admin
from.models import user
# Register your models here.
class Useradmin(admin.ModelAdmin):
   list_display=('name','age')


admin.site.register(user,Useradmin)