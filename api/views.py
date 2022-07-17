from django.http import JsonResponse
from rest_framework.generics import GenericAPIView
from rest_framework import status
from rest_framework.decorators import api_view

from api.models import Blog, Brand, Category, Product, SubCategory, Video
from api.serializers import BlogSerializer, BrandSerializer, ProductSerializer, VideoSerializer

# Create your views here.
class Home(GenericAPIView):
    def get(self,request):
        return JsonResponse({'success' : 'success'})
        
class Videos(GenericAPIView):
    serializer_class = VideoSerializer
    queryset = Video.objects.all()

    def get(self,request, pk):
        if pk == '0':
            serializer = self.serializer_class(Video.objects.all(), many = True)
        else:
            video = Video.objects.filter(pk=pk).first()
            if video is None:
                return JsonResponse({'failure':'No such video exists'},status = status.HTTP_404_NOT_FOUND , safe = False)
            video.views += 1
            video.save()
            serializer = self.serializer_class(video)
        return JsonResponse(serializer.data, status = status.HTTP_200_OK, safe = False)

class Blogs(GenericAPIView):
    serializer_class = BlogSerializer
    queryset = Blog.objects.all()

    def get(self,request, pk):
        if pk == '0':
            serializer = self.serializer_class(Blog.objects.all(), many = True)
        else:
            obj = Blog.objects.filter(pk=pk).first()
            if obj is None:
                return JsonResponse({'failure':'No such blog exists'},status = status.HTTP_404_NOT_FOUND , safe = False)
            serializer = self.serializer_class(obj)
        return JsonResponse(serializer.data, status = status.HTTP_200_OK, safe = False)

    def post(self,request, pk):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status = status.HTTP_201_CREATED, safe = False)
        return JsonResponse(serializer.errors, status = status.HTTP_400_BAD_REQUEST , safe = False)

@api_view(['POST'])
def all_products(request):
    filter = request.data['filter']
    if len(filter) == 1:
        category = Category.objects.get(name = filter[0])
        products = Product.objects.filter(category = category).order_by('rank')
        serializer = ProductSerializer(products, many = True)
    elif len(filter) == 2:
        subcategory = SubCategory.objects.get(name = filter[1])
        products = Product.objects.filter(subcategory = subcategory).order_by('rank')
        serializer = ProductSerializer(products, many = True)
    elif len(filter) == 3:
        category = Category.objects.get(name = filter[0])
        brand = Brand.objects.filter(name = filter[2]).first()
        if brand is None:
            return JsonResponse({'failure':'No such brand exists'},status = status.HTTP_404_NOT_FOUND , safe = False)
        products = Product.objects.filter(category = category, brand = brand).order_by('rank')
        serializer = ProductSerializer(products, many = True)
    else:
        serializer = ProductSerializer(Product.objects.all().order_by('rank'), many = True)
    return JsonResponse(serializer.data, status = status.HTTP_200_OK, safe = False)

@api_view(['POST'])
def brands(request):
    filter = request.data['filter']
    subcategory = SubCategory.objects.get(name = filter[1])
    products = Product.objects.filter(subcategory = subcategory)
    brands = Brand.objects.filter(id__in = products)
    serializer = BrandSerializer(brands, many = True)
    return JsonResponse(serializer.data, status = status.HTTP_200_OK, safe = False)

#https://www.instagram.com/explore/search/keyword/?q=flipkart
#https://www.instagram.com/explore/tags/flipkart/
#https://www.instagram.com/flipkart/tagged/

@api_view(['GET',])
def get_trends(request):
    return JsonResponse({'success' : 'success'})