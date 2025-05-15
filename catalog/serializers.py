from rest_framework import serializers
from .models import Product, Category

# Serializer for Category
class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name']


# Serializer for Product
class ProductSerializer(serializers.ModelSerializer):
    category = CategorySerializer()  # Nested category serializer

    class Meta:
        model = Product
        fields = '__all__'
    
    category = serializers.PrimaryKeyRelatedField(queryset=Category.objects.all())
