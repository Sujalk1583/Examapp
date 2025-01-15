from rest_framework import serializers

from examapp.models import Question, Admin, Result, Users

        
class QuestionSerializer(serializers.ModelSerializer):
    qno=serializers.IntegerField()
    qname=serializers.CharField(max_length=50,default='null')
    answer=serializers.CharField(max_length=50,default='null')
    op1=serializers.CharField(max_length=50,default='null')
    op2=serializers.CharField(max_length=50,default='null')
    op3=serializers.CharField(max_length=50,default='null')
    op4=serializers.CharField(max_length=50,default='null')
    subject=serializers.CharField(max_length=50,default='null')
    
    class Meta():
        model=Question
        fields='__all__'

class AdminSerializer(serializers.ModelSerializer):
    
    class Meta:
        model=Admin
        fields='__all__'

class UsersSerializers(serializers.ModelSerializer):
    
    class Meta:
        model=Users
        fields='__all__'
        
class ResultSerializers(serializers.ModelSerializer):
    
    class Meta:
        model=Result
        fields='__all__'
