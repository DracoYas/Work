class Temps(object):

    def __init__(self,h,m,s):
        if h<0:
            raise ValueError(h,"doit être positif")
        if m<0 or m>=60:
            raise ValueError(m,"doit être compris entre 0 et 60 exclus")
        if s<0 or s>=60:         
            raise ValueError(s,"doit être compris entre 0 et 60 exclus")
        self.heures=h
        self.minutes=m
        self.secondes=s
        
    def afficher(self):
        print(self.minutes, 'h' ,self.minutes, 'm' ,self.secondes, 's')

    def ajouter(self,t2):
        t=Temps(0,0,0)
        s=self.secondes+t2.secondes
        if s<60 :
            t.secondes=s
        else:
            t.secondes=s%60
        m=self.minutes+t2.minutes+s//60
        if m<60 :
            t.minutes=m
        else :
            t.minutes=m%60
        t.heures=self.heures+t2.heures+m//60
        return t
     
    def egal(self,t2):
        return self.heures==t2.heures and self.minutes==t2.minutes and self.secondes==t2.secondes                                                           
    
    def maxi(self,t2):
        if self.egal(t2):
            return self
        if self.heures>t2.heures:
            return self
        if self.heures<t2.heures:
            return t2
        if self.minutes>t2.minutes:
            return self
        if self.minutes<t2.minutes:
            return t2
        if self.secondes>t2.secondes:
            return self
        return t2
    
    def soustraire(self,t2):
        t=Temps(0,0,0)
        if self.egal(t2):
            return t
        if self.heures<t2.heures or (self.heures==t2.heures and self.minutes<t2.minutes) or (self.heures==t2.heures and self.minutes==t2.minutes and self.secondes<t2.secondes):
            raise ValueError("le temps 1 doit être supérieur au temps 2")
        if self.secondes>=t2.secondes:
            t.secondes=self.secondes-t2.secondes
        else:
            t.secondes=self.secondes+60-t2.secondes
            self.minutes-=1
        if self.minutes>=t2.minutes:
            t.minutes=self.minutes-t2.minutes
        else:
            t.minutes=self.minutes+60-t2.minutes
            self.heures-=1
        t.heures=self.heures-t2.heures
        return t
    
class Rectangle(object):

    def __init__(self,L,l):
        if L<=0:
            raise ValueError(L,"doit être positif")
        if l<=0:
            raise ValueError(l,"doit être positif")
        self.longueur=L
        self.largeur=l
            
    def afficher(self):
        print("longueur :",self.longueur,"largeur :",self.largeur)
    def perimetre(self):
        return 2*(self.longueur+self.largeur)
        
    def surface(self):
        return self.longueur*self.largeur
        


rect=Rectangle(6,4)
print (rect.surface())
print (rect.perimetre())

class Angle(object):

    def __init__(self,deg):
        if deg<0 or deg>=360:
            raise ValueError(deg,"doit être compris entre 0 et 360 exclus")
        self.degres=deg