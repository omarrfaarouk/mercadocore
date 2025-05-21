from rest_framework import serializers
from .models import Category, Product

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class ProductSerializer(serializers.ModelSerializer):
    category = CategorySerializer(read_only=True)  # nested category object
    category_id = serializers.PrimaryKeyRelatedField(
        queryset=Category.objects.all(), source='category', write_only=True
    )
    category_name = serializers.CharField(source='category.name', read_only=True)  # <-- Add this

    class Meta:
        model = Product
        fields = ['id', 'name', 'price', 'category', 'category_id', 'category_name']

