n = int(input("enter a number"))
rev = 0 
while (n> 0) :
    rem = n%10 
    rev = rem *10 + rev
    n = n/10

print(rev)