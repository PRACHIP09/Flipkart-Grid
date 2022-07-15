from rest_framework.generics import GenericAPIView
from rest_framework.response import Response

# Create your views here.
class Home(GenericAPIView):
    def get(self,request):
        return Response({'success' : 'success'})
