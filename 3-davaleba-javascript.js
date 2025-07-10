//დაწერეთ ფუნქცია რომელსაც გადასცემ ორ რიცხვს (m,n) და დააბრუნებს რომელიც მეტია იმ რიცხვს , 
// თუ რიცხვები ტოლია დააბრუნებს 0 -ს

function checkMore (m, n){
if(m>n){
    return m;
}
else if(m<n){
    return n;
}else return 0;
}

console.log(checkMore(8, 8));

//2. დაწერეთ ფუნქცია რომელსაც გადასცემთ ორ ცვლადს(რიცხვს), დააბრუნეთ რიცხვების ჯამი
function sumNumber (a, b){
    return a+b;
}

console.log(sumNumber (6, 4));




//3. დაწერეთ ფუნქცია რომელიც დააბეჭდავს თქვენ სახელს და გვარს ( ფუნქციას არ აქვს პარამეტრი)
function fullName (){
    console.log("Irakli Mestvirishvili");
}

fullName();


//4. დაწერეთ ფუნქცია ორი პარამეტრით : firstname და lastname დააბრუნეთ სრული სახელი და დაბეჭდეთ 
// ( ფუნქცია აბრუნებს სრულ სახელს და ფუნქციის გარეთ ბეჭდავთ)

function nameType (fName, lName){
    return fName+" "+lName;
}

console.log(nameType("ika", "mestvi"));

//5. Დაწერეთ ფუნქცია რომელსაც გადასცემთ ერთ რიცხვს (n) და ფუნქციამ უნდა დააბრუნოს 1 დან ამ რიცხვამდე  
// (n-მდე) რიცხვების ნამრავლი ( ანუ თუ რიცხვი არის 3 ფუნქციამ უნდა დააბრუნოს 1*2*3 -ის მნიშვნელობა, 
// დაგჭირდებათ ახალი ცვლადის გამოცხადება ფუნქციის შიგნით რომელსაც მიანიჭებთ ნამრავლის მნიშვნელობას. 
// Პ.ს. გამოიყენეთ თქვენთვის სასურველი ციკლი)

function multiplyNumber(n){
    let result=1;

    for(let i=1;i<=n;i++){
        result=result*i;
    }
    
    return result;
}

console.log(multiplyNumber(5));
console.log("---");



//Შემდეგი დავალებებისთვის გამოიყენეთ :ობიექტი student - 
// რომელსაც აქვს შემდეგი properties: firstName, lastName, age, scores (scores არის შემდეგი რიცხვების მასივი: 4,7,5,3,2) 
// და მეთოდი fullName რომელიც აბრუნებს სტუდენტის სრულ სახელს ( ობიექტი შეიცავს მეთოდს, ცალკე ფუნქციად არ უნდა დაწეროთ ) 
let student = {
    firstname: "irakli",
    lastName: "mestvirishvili",
    age: "30",
    scores: [4, 7, 5, 3, 2],
    fullName: function (){
        return this.firstname+" "+this.lastName;
    }
}

//6. დაბეჭდეთ  სტუდენტის სრული სახელი (სახელი+გვარი-  გამოიყენეთ student ობიექტის მეთოდი)

console.log(student.fullName());

//7. Დაწერეთ ფუნქცია რომელსაც გადასცემთ სტუდენტის ქულებს ( scores) და ფუნქცია დააბრუნებს  ქულების ჯამს
function sumScore(scores){
    let res=0;

    for(let i=0; i<scores.length; i++){
        res+=scores[i];
    }

    return res;
}

console.log(sumScore(student.scores));

//8. დაბეჭდეთ სტუდენტის სახელი და ასაკი
console.log("student name: "+student.firstname + "\nstudent age: " + student.age);

