//Concatenation
document.getElementById('concatenate').onclick = function () {

    let str1 = prompt('Enter a String');
    let str2 = prompt('Enter another String');
    let statement1 = '1<sup>st</sup> String = ' + str1 + '<br>2<sup>st</sup> String = ' + str2;
    let statement2 = str1 + str2;

    document.getElementById('statement').innerHTML = statement1
    document.getElementById('output').innerHTML = statement2
}

//Input name
document.getElementById('input_name').onclick = function () {

    let str = prompt('Enter Your Name');
    if (str !== null && str !== '') {
        document.getElementById('output').innerHTML = 'Welcome ' + str + '<p class="d-inline block"> &#127881;</p>';
    }
}


//Comparison Operator
document.getElementById('comparison_op').onclick = function () {

    let num1 = +prompt('Enter an integer');
    let num2 = +prompt('Enter another integer');
    let statement1 = '1<sup>st</sup> Integer= ' + num1 + '<br>2<sup>st</sup> Integer= ' + num2;
    let statement2;

    if (num1 > num2) {
        statement2 = num1 + ' is larger';
    } else if (num2 > num1) {
        statement2 = num2 + ' is larger';
    } else if (num1 === num2) {
        statement2 = 'Both Integer are Same';
    }

    document.getElementById('statement').innerHTML = statement1;
    document.getElementById('output').innerHTML = statement2;
}

//If else
document.getElementById('if_else').onclick = function () {

    let number = +prompt("Enter a number:");
    let statement1='You Entered '+number;
    let statement2;

    if (number > 0) {
        statement2="The number is positive";
    } else if (number == 0) {
        statement2="The number is 0";
    } else {
        statement2="The number is negative";
    }

    document.getElementById('statement').innerHTML = statement1
    document.getElementById('output').innerHTML = statement2
    
}

//Testing set of conditions
document.getElementById('condition').onclick = function () {
    let marks=+prompt('Enter your Marks Out of 100')
    let statement1=' Entered Marks '+marks;
    let statement2

    if(marks>90 && marks<=100){
        statement2='Congrats You Got <strong>A Grade</strong>'
    } else if (marks>=80 ){
        statement2='Congrats You Got <strong>B Grade</strong>'
    } else if(marks>=60){
        statement2='You Got <strong>C Grade</strong>'
    } else if(marks>=40){
        statement2='Congrats You Got <strong>D Grade</strong>'
    } else if(marks<40 && marks>=0){
        statement2='You are <strong>Fail </strong>'
    } else {
        statement2='Invalid Marks'
    }
    
    document.getElementById('statement').innerHTML = statement1
    document.getElementById('output').innerHTML = statement2
}

//Testing set of conditions
document.getElementById('nested_condition').onclick = function () {
    let marks=+prompt('Enter your Marks Out of 100')
    let statement1=' Entered Marks '+marks;
    let statement2

    if(marks>90 && marks<=100){

        if(marks>=95){
            statement2='Congrats You Got <strong>A+ Grade</strong>'
        } else{
            statement2='Congrats You Got <strong>A- Grade</strong>'
        }
    
    } else if (marks>=80 ){
    
        if(marks>=85){
            statement2='Congrats You Got <strong>B+ Grade</strong>'
        } else{
            statement2='Congrats You Got <strong>B- Grade</strong>'
        }
        
    } else if(marks>=60){
        
        if(marks>=70){
            statement2=' You Got <strong>C+ Grade</strong>'
        } else{
            statement2=' You Got <strong>C- Grade</strong>'
        }
        
    } else if(marks>=40){
        
        if(marks>=50){
            statement2=' You Got <strong>D+ Grade</strong>'
        } else{
            statement2=' You Got <strong>D- Grade</strong>'
        }
        
    } else if(marks<40 && marks>=0){
        statement2='You are <strong>Fail </strong>'
    } else {
        statement2='Invalid Marks'
    }
    
    document.getElementById('statement').innerHTML = statement1
    document.getElementById('output').innerHTML = statement2
}

//Login
document.getElementById('login').onclick = function () {

    let name=prompt('Enter Your UserName             Hint: abdulrahman002')
    let password=prompt('Enter Password             Hint:1234' )

    if(name==='abdulrahman002'){

        if(password==='1234'){
            document.write('<h1 style="color: 401F71">You are Welcome </h1>')
        } else{
            document.getElementById('output').innerHTML = 'Incorrect Password'
        }
    
    } else{
        document.getElementById('output').innerHTML = 'Wrong Credential'
    }
}

//Clear Statement
document.getElementById('clr-statement').onclick = function () {

    document.getElementById('statement').innerHTML = ''
}

//Clear Output
document.getElementById('clr-output').onclick = function () {
    
    document.getElementById('output').innerHTML = ''
}