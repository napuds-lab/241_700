/*
//String
let fname = 'john'
console.log('name',fname)
const idcard = '123'

//Number
let age = 30
let height = 150.5
const pi = 3.14
fname = 'tom'

//idcard = '456'
console.log('idcard',idcard)

console.log('name',fname,'age',age)
//console.log('age',age)
*/

/**
 condition statement (if,else,switch)
 == != > >= < <=


let number1 = 5
let number2 = 5

//let condition1 =number1 >= number2 //boolean
//console.log('condition1 = ',condition1)

// if - else condition
if(number1!=number2){
    console.log('this if')
}
else if(number1==number2){
    console.log('this else if')
}
else{
    console.log('this else')
}
 */

/***
 //gtade
 >=80 A
 >=70 B
 >=60 C
 >=50 D
 else F
 

let score = prompt('ใส่ตัวเลข')
if(score>=80){
    console.log('A')
}
else if(score>=70){
    console.log('B')
}
else if(score>=60){
    console.log('C')
}
else if(score>=50){
    console.log('D')
}
else{
    console.log('F')
}
*/

/****
 && and
 || or
 not !


 let number1 = 5
 let number2 = 10

 let condition = !(number1>=3 || number2>=11)
 console.log('result of condition = ',condition)

 let number = 20
 if(number % 2 == 0){
    console.log('you are even.')
 }else{
    console.log('you are odd.')
 }
*/

/*****
 //loop


 let counter = 0
 while(counter<=9){
    console.log('Hi')
    counter = counter + 1

 }

 for(let counter=0;counter<10;counter=counter+1){
    console.log('Hi')
 }
 */

 /*
 //array
 

 let ages = [50,20,25,30,35,40]

 if(ages.includes(30)){
    console.log('30 is found')
 }

 ages.sort()
 console.log('ages sorted',ages)

 let name = ['aa','bb','cc']
 name.push('dd')
 console.log('name',name)

 name.pop()
 console.log('name after pop',name)
 console.log('name',name.length)
 console.log('name index',name[0])

 for(let index=0;index<name.length;index++){
    console.log('name list',name[index])
 }
 */

 /**
 //object

let student = [{
    age: 30,
    name: 'aa',
    grade: 'A',
},{
    age: 35,
    name: 'bb',
    grade: 'B',
}]
student.push({
    age: 40,
    name: 'cc',
    grade: 'C',
})

student.pop()

for(let index=0;index<student.length;index++){
    console.log('Student Number',(index+1))
    console.log('age',student[index].age)
    console.log('name',student[index].name)
    console.log('grade',student[index].grade)
}

console.log(student)
console.log(student.name)

let age1 = 30
let name1 = 'aa'
let grade1 = 'A'

let age2 = 20
let name2 = 'bb'
let grade2 = 'B'
 */

/***
function


let score1 = 55
let score = 65

let grade = ''

//ประกาศ ฟังชัน
function calculat_grade(score){
if(score>=80){
    grade='A'
}
else if(score>=70){
    grade='B'
}
else if(score>=60){
    grade='C'
}
else if(score>=50){
    grade='D'
}
else{
    grade='F'
}
return grade
}

//เรียกใช้ฟังชัน
let grade1 = calculat_grade(score1)
console.log('Grade',grade1)
 */

/*
array 2


let score = [20,30,40,50]
let new_score = []

for(let index=0;index<score.length;index++){
    console.log('score',score[index])
    if(score[index]>=30){
      new_score.push(score[index])
}
}

let newScore = score.filter((s) => {
    return s >=30
})

new_score.forEach((ns) => {
    console.log('new score',ns)
})

score[0] = score[0] * 2

score = score.map((x) => {
    return x * 2
})

score.forEach((s) => (
    console.log('score forEach',s)
))
*/

//object funtion

let students = [{
    name: 'aa',
    score: 50,
    grade: 'A'
},{
    name: 'bb',
    score: 80,
    grade: 'B'
}]

let student = students.find((s) => {
    if (s.name ==='aa'){
        return true
    }
})

let double_score = students.map((s) => {
    s.score = s.score * 2
    return s
})

let hightScore = students.filter((s) => {
    if(s.score >= 120){
        return true
    }
}) 

console.log(student)

console.log('double_score', double_score)

console.log('hightScore', hightScore)

