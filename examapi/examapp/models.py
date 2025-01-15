from django.db import models

# Create your models here.

class Question(models.Model):
    qno=models.IntegerField(default=0, primary_key=True)
    qname=models.CharField(max_length=50,default='null')
    answer=models.CharField(max_length=50,default='null')
    op1=models.CharField(max_length=50,default='null')
    op2=models.CharField(max_length=50,default='null')
    op3=models.CharField(max_length=50,default='null')
    op4=models.CharField(max_length=50,default='null')
    subject=models.CharField(max_length=50,default='null')
    
    def __str__(self):
        return "{},{},{},{},{},{},{},{}".format(self.qno,self.qname,self.answer,self.op1,self.op2,self.op3,self.op4,self.subject)
    
    class Meta():
        db_table="Question"

class Users(models.Model):
    username=models.CharField(max_length=50,default=' ',primary_key=True)
    password=models.CharField(default='null',max_length=50)
    mobileno=models.IntegerField(default='null')
    emailid=models.EmailField(default=' ', max_length=25)
    
    def __str__(self):
        return "{},{},{},{}".format(self.username,self.password,self.mobileno,self.emailid)
    
    class Meta():
        db_table="users"
        
class Result(models.Model):
    username=models.CharField(max_length=50,default=' ',primary_key=True)
    password=models.CharField(default='null',max_length=50)
    score=models.IntegerField()
    
    def __str__(self):
        return "{},{},{}".format(self.username,self.password,self.score)
    
    class Meta():
        db_table="result"
        
class Admin(models.Model):
    username=models.CharField(max_length=50,default=' ',primary_key=True)
    password=models.CharField(default='null',max_length=50)
    
    def __str__(self):
        return "{},{}".format(self.username,self.password)
    
    class Meta():
        db_table="admin"