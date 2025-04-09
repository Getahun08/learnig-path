from rest_framework import serializers
from .models import user
class userserializer(serializers.Serializer):
    name = serializers.CharField(max_length=100)
    age = serializers.IntegerField()
    def create(self, validated_data):
        return user.objects.create(**validated_data)

    class Meta:
        fields = ['name', 'age']
