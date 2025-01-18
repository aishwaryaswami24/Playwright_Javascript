
//print hello world

/* installed node js on system to run the code */

console.log("Hello World")


//variables

let a=4
console.log(a)
console.log(typeof(a)) //which type of data stored in a variable a

let b=5.4
console.log(typeof(b))

var c="Aishwarya"
console.log(typeof(c))

let d=true
console.log(typeof(d))

var c=a+b
console.log(c)

/* let c=a+b
    ^
SyntaxError: Identifier 'c' has already been declared */

//we can not redeclare variable with let but it's possible with var

//use ! mark to change boolean value if it's true it will reverse aND GIVES false viceversa
let e=true
console.log(!e) 

//reassigning value with let is possible and with var reassigning + redeclaring is poosible 

let g="SN"

console.log(g)
g=3+4

console.log(g)


//const data type: we can not reassign or redecalre bez it's constant 

const l="SwamiNagure"
console.log(typeof(l))


//CONDITIONS

//flag value remains true only bez of ! expression changes to false
//if loop: if condition matches will execute 1st else 2nd block
const flag=true

if(!flag)
{
  console.log("condition statisfied")
}
else
{
  console.log("condition not statisfied")
}


//while loop: if condition matches means if it's true then it will keep on running until infinite time

//here condition is true then it will be in the loop only it wwill never come out of loop
/* while(true){
  console.log('I am inside loop')
 }*/


//here it will keep on executing until condition matches once it fails then it will come out of the loop
let i=0
while(i<10)
{
    i++
    console.log(i)
}

//do while loop even condition matches or not it will execute one time 
let j=0
do
{
 j++
}while(i>10);
console.log(j)

//for loop: if you know how many times you want to releat loop use for loop

for(k=0;k<10;k++)
{
    console.log(k)
}


//multiple of 2 & 5

for(let l=1;l<=10;l++)
{
    if(l%2==0 && l%5==0)
    {
        console.log(l)
    }
}