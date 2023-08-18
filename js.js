//............................Day1.................................//
let h1Tag = document.getElementById("meamo")
h1Tag.innerHTML = "Welcome to Amaravathi";
// h1Tag.style.color = "orange";
// window.alert("Jai Amaravathi");
console.log("A.P capital is Amaravathi");
document.write("Jai Aamarvathi");

//..........................Day2(Premitive && NonPrimitive Data Types)....................................//
/////////////////////////Primitive Data Types
//Numbers
// var is Global variable it will redeclare and reassign the value;
var Num = 10;
var Num = 20;
console.log(Num);

//strings
//let is local and block scope and Redeclare is not possible reassign is possible
let name1 = "Ravali";
name1 = "Lokesh";
console.log(name1);
//const is local and block scope and Redeclare && reassignis not possible 
const name2 = "Dhruva";
//   name2 = "Rohika";
console.log(name2);
//boolean
const boolean = true;
console.log(boolean);

/////////////////////////Non primitive DataTypes
var arr = [2, 2, 5, 1, 4, 3];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
var obj = {
    name: "Amaravathi",
    capitalOf: "AndraPradesh",
    Districs: 13,
    Amaravathi: true
}
console.log(obj.name);
console.log(obj.capitalOf);
console.log(obj.Districs);
console.log(obj.Amaravathi);
console.log(obj["name"]);
console.log(obj["capitalOf"]);
console.log(obj["Districs"]);
console.log(obj["Amaravathi"]);

///////////.....................Operations......................//////////////
//1)Arthamatic operations
var a = 25;
var b = 10;
var c = a % b;
console.log(c);//5
console.log(++c);//6
console.log(c++);//6
console.log(c);//7
console.log(--c);//6
console.log(c--);//6
console.log(c * c);//25
console.log(c / c);//1
//2)LogicalOperations
// a    b    a&&b   a||b  
// 0    0     0      0
// 0    1     0      1
// 1    0     0      1
// 1    1     1      1

//3)comparisionOperators
//<,>,<=,>=,==,===,!=;
console.log(10 < 20);//true
console.log(20 > 10);//true
console.log(10 <= 20);//true
console.log(20 >= 10);//true
console.log(10 == "10");//true == check only value
console.log(10 === 10);//true === check the dataType and value
console.log(10 != 5);//true

//..................................Day3(Loops&&Conditions).......................//
//////////.........Loops.........../////////////
//for(intialization,conditionCheck,increment(or)decrement);
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

var j = 0;//intialization
while (j < arr.length) {//condition checking
    console.log(arr[j]);
    j++;//increment
}

var k = 0;//intialization
do {
    console.log(arr[k]);
    k++; //operation
} while (k < arr.length);//conditon cheking

///////////...........Conditons................/////////////
var d = 5;
if (d > 3 && d < 4) {
    console.log("Hai");
} else if (d != 4) {
    console.log("Welcome");
} else {
    console.log("elsePart");
}

var e = 7;
switch (e) {
    case 1:
        console.log("Hai");
        break;
    case 2:
        console.log("Welcome");
        break
    default:
        console.log("Default");
        break;
}

// continue and break statements
for (let a = 0; a < 10; a++) {
    if (a === 3) {
        continue
    }
    if (a === 8) {
        break
    }
    console.log(a);
}

// prime numbers
for (var i = 0; i <= 100; i++) {
    for (var j = 2; j < i; j++) {
        if (i % j === 0) {
            break;
        }
    }
    if (i == j) {
        console.log('prime', i);
    }
}

//fibonacci series
let n1 = 0, n2 = 1, nextTerm;
console.log("finonacciSeries");
for (let i = 0; i <= 10; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}

//ArmstrongMethod
// var number = prompt("Please enter a Number");
// var temp = number;
// var sum = 0;
// while (temp > 0) {
//     var digit = temp%10;
//           sum = digit**3
//          temp = parseInt(temp/10);
// }
// if(sum == number){
//     console.log(`${number} is armstrongNumber`);
// }else{
//     console.log(`${number} is not armstorngnumber`);
// }


//..............................................Day4(Arrays,String && Objects )..................//
let array = [0, 1, 2, 3, 4, 5];
array.push(6);//add at lastIndex
console.log(array);
array.pop(); // remove at lastIndex
console.log(array);
array.unshift(22)// add item at firstIndes 
console.log(array);
array.shift()// remove firstIndex
console.log(array);

spliceArray = [21, 22, 23, 24, 25]
console.log("splice", spliceArray);
delelteSplice = spliceArray.splice(2, 2, 225, 143);//remove item and add newItems in place of  removingItems
console.log("deleteSplice", delelteSplice, "spliceArray", spliceArray);

sliceArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("sliceArray", sliceArray);
deleteSlice = sliceArray.slice(2, 4);//it will removeIndex  
console.log("deleteSlice", deleteSlice);

mapArray = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
marr = mapArray.map((index, data) => {
    console.log(index, data);
    return data;
});
console.log(marr);

forEach = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
farr = mapArray.map((index, data) => {
    console.log(index, data);
    return data;
});
console.log(farr);

arrstring = [1, 2, 3, 4, 5];
console.log("convertToString", arrstring.toString());
joinArr = [11, 12, 13, 14, 15];
console.log("join", joinArr.join(" "));

filterArr = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
arrFilter = filterArr.filter((data, index) => {
    return data >= 15 && data <= 18;
});
console.log(arrFilter);

console.log(arrstring, filterArr);
console.log(arrstring.concat(filterArr));

console.log(filterArr.indexOf(14));

duplicateArr = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 11, 12, 13, 14, 15];
arrDuplicate = duplicateArr.filter((data, index) => {
    console.log("index=>", index, "indexOf", duplicateArr.indexOf(data));
    return index === duplicateArr.indexOf(data);
})
console.log(arrDuplicate);
console.log(duplicateArr.lastIndexOf(15));//lastIndexof repeatedValue

//assendingorder  
assecnding = [2, 1, 4, 3, 6, 5, 7];
assecnding.sort((a, b) => {
    return a - b;
});
console.log(assecnding);
//descendingorder
descending = [2, 1, 4, 3, 6, 5, 7];
descending.sort((a, b) => {
    return b - a
})
console.log(descending);


//////////............stringMethods............./////////////

stringMethod = "Amaravathi is Capital City of A.P";
console.log(stringMethod.toUpperCase());
console.log(stringMethod.toLowerCase());
console.log("slic=>.", stringMethod.slice(3, 10));//it will give from 3rd index upto 10Index
console.log("substr=>", stringMethod.substr(3, 10));// it will give 10 indexes from 3rd index
console.log("includes=>", stringMethod.includes("is"));//true
console.log("includes=>", stringMethod.includes("si"));//false
console.log("charAt=>", stringMethod.charAt("3"));//r => in indexPosition
console.log("charAt=>", stringMethod.charCodeAt("3"));//r => Ascii value of indexposition(114)
let splitStr = stringMethod.split(' ');
console.log('splitStr=>', splitStr);//['Amaravathi', 'is', 'Capital', 'City', 'of', 'A.P']
console.log('splitStrIndexof=>', splitStr.indexOf("Amaravathi"));//
console.log('strngMethodIndexof=>', stringMethod.indexOf("i"));//
console.log('Replace=>', stringMethod.replace("A.P", "AndraPradesh"));
console.log('AddContent=>', stringMethod + "It's Belongs to AndraPradesh");
spaceStr = "    Andrula Hrudayam Amaravathi    ";
console.log("trim=>", spaceStr.trim());// it will remove the space first and lastspaces , But notremove the middilespace

///////////........MathMethods.........../////////////
console.log("floor=>", Math.floor(15.23456));//15=> floor will not consider the after point values
console.log("round=>", Math.round(15.2));//15 => when value is below 5 it will return lowerIntigervalue
console.log("round=>", Math.round(15.6));//16=> when value is above 5 it will return nextIntigerValue
console.log("ceil=>", Math.ceil(15.0000001));//16=> when value is above 5 it will return nextIntigerValue
console.log("min=>", Math.min(-1, -2, 0, 1, 2));//-2
console.log("max=>", Math.max(-1, -2, 0, 1, 2, 3));//3
console.log("random=>", Math.random());//it will give some random value
console.log("squerroot=>", Math.sqrt(9));//3
console.log("squerroot=>", Math.sqrt(9));//3
console.log("trunc=>", Math.trunc(4.0005165));//4 trunc will not consider the after point values
console.log("sign=>", Math.sign(-3));//if value is below 0 it will return -1
console.log("sign=>", Math.sign(0));//if value is  0 it will return 0
console.log("sign=>", Math.sign(3));// if value is above 0 it will return 1
console.log("sign=>", Math.floor("a1"));//NaN
let a1 = 15.002314;
console.log("toFixed=>", a1.toFixed(3));//15.002 whatever we pass parameter Number asper that it will print afterPointNumbers
console.log(10 + 20);//30
console.log(10 + 20 + "33");//3033 before stringonly operation will happend 
console.log(10 + 20 + "33" + 44);//303344

//remove duplicate values
inputarr = [1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4];
for (var i = 0; i < inputarr.length; i++) {//0<10
    for (var j = i + 1; j < inputarr.length; j++) {//7<10
        if (inputarr[i] === inputarr[j]) {//1==1
            for (var k = j; k < inputarr.length; k++) {//7<10
                inputarr[k] = inputarr[k + 1];
            }
            j--;
            inputarr.length--;
        }
    }
}
console.log(inputarr);

//...............................................Day5...................................//
//////////////////////...........Functions............./////////////
function userName(name, age) {
    console.log(name, age);
}
userName('Lokesh', 24);
userName('Ravali', 24);

function multiply(a, b) {
    var c = a * b;
    return c;
}
console.log(multiply(2, 3));
// console.log(multiply(2,1));

function tableFunction(n) {
    for (let i = 1; i <= 10; i++) {
        console.log(n + "x" + i + "=" + n * i);
    }
}
// tableFunction(1)
// tableFunction(2)
// tableFunction(3)
// tableFunction(4)
// tableFunction(5)
// tableFunction(6)
tableFunction(7);

//BluePrint of Car
function car(name, model, colour) {
    return {
        carName: name,
        carModel: model,
        carColour: colour
    }
}
console.log(car("TATA", "Nexon", "Grey"));

let f = sum(10, 20);
function sum(a, b) {
    console.log(a + b);//justPerform
    return a + b;// returnKey word return the value for variable
}
console.log(f);

//call by value
let h = 10;
let l = 20;
let m = addMethod(h, l);//variable passinga as arguments
console.log("callbyvalue=>", m);
function addMethod(a, b) {//parameterpassing
    return a + b;
}

// call by refeance
let obje = {
    name: "Lokesh",
}
console.log(obje);
callByRef(obje)
function callByRef(data) {
    data.name = "Ravali"//overide name of obje
    data.age = 24
}
console.log("call by ref=>", obje);

//call back
let data = multiMethod(10, 20)
function multiMethod(n1, n2) {
    let result = n1 * n2;
    console.log(result);
    setTimeout(() => {
        multiMethod1(result, 40)// it will call after 1 sencond only once
    }, 1000);
}

// setInterval(() => {
//     multiMethod1(20, 15)
// }, 2000);//every 2 seconds once it will calling repeatly

function multiMethod1(n3, n4) {
    console.log("callback=>", n3 * n4);
}

//this key 
let object = {
    name: "A.P",
    capital: "Amaravathi",
    insideObj: function () {
        console.log(this.name);// this key word reffers to current Object
        console.log(this.capital);
    }
}

//..............................Day6(call,apply,bind).....................................///
calldata = {
    name: "Amaravathi",
    Location: "Guntur",
    getDetails: function () {
        var result = this.name + " " + this.Location;
        // console.log(result);
        return result;
    }
}
// calldata.getDetails();

calldata1 = function (a, b) {
    console.log(this.getDetails() + " " + "Dondapadu" + " " + a + " " + b);
}
//call
calldata1.call(calldata, "beSideOf", "krishnaRiver");//here second argument pass by cama separated
//apply
calldata1.apply(calldata, ["beSideOf", "KrisnaRiver"]);//here second argument pass by array separated

andra = {
    name: "Amaravthi",
    location: "Dondapadu"
}

capital = {
    details: function (a, b) {
        console.log(this.name, this.location + " " + a + " " + b);
    }
}

//call
capital.details.call(andra, 'capital city of A.p', "its belongs to Andrapdesh");
//apply
capital.details.apply(andra, ['capital city of A.p', "its belongs to Andrapdesh"]);
// bind
ApCapital = {
    name: "Amaravathi",
    declaredby: "naraChandrababu",
    vote: function (a) {
        let result = this.name + " " + this.declaredby + " " + a
        console.log(result);
        return result;
    }
};

bindVote = function () {
    console.log(this.vote() + " " + "my vote for Amaravthi is Capital Of A.p");
}

let bindResult = bindVote.bind(ApCapital);
bindResult();

//...............................Day7(DOM)............................///
let h2Tag = document.getElementById("demo");//getelementbyId will get form html only one Id if you have multih2le on same id
h2Tag.innerHTML = 'Amaravathi is Capital city of Andrapradesh';
h2Tag.style.color = "orange";
h2Tag.style.backgroundColor = "yellow"
console.log(h2Tag);

let h3Tag = document.getElementsByClassName("class");//getElementsByClassName will get all elements from html
h3Tag.innerHTML = "Amaravthi welcome";
console.log(h3Tag);

let pTag = document.getElementsByTagName('p');//getElementsByTagName will get all elements from html
pTag.innerHTML = "Amaravthi is capital of AndraPradesh";
console.log(pTag);

let aTag = document.getElementById("innerHtml");
aTag.innerHTML = "www.google.com";
aTag.href = "aTag";
aTag.target = "_blank";//target="_blank" open in new window;

function add() {
    h1Tag.innerHTML = "Hellow Amaravathi";
    h1Tag.classList.add("dom_class")
    //     h1Tag.style.color="Gold";
    //     h1Tag.style.backgroundColor="green";
    //     h1Tag.style.fontSize="33px"
}
function remove() {
    h1Tag.classList.remove("dom_class")
}

let H1Tag = document.querySelector("h1");//querySelector it will findout only first element asper tagname
let H1Tags = document.querySelectorAll("h1");//querySelectorAll it will find All elements asper tagname
console.log(H1Tag);
console.log(H1Tags);

let input = document.querySelector("input");
let button = document.querySelector("button");
let ulEle = document.querySelector("ul");

if (input && button) {
    button.addEventListener("click", addFun);
};

function addFun() {
    if(input.value){
        let liEle = document.createElement("li");//step1)element create in nodeList
        console.log(liEle);
        let textnode = document.createTextNode(input.value);//step2)text create in node 
        console.log(textnode);
        liEle.appendChild(textnode);//step3) child element append to parent (created content add to element)
        console.log(liEle);
        ulEle.appendChild(liEle)
        console.log(ulEle);// step4) child element add to parent element
        input.value="";// for reset the input filed
        input.focus();// input filed infocus even if you submitt the entered value 
        let btnEle = document.createElement("button");//step5) create the button for remove
        btnEle.innerHTML="X"; // content for button
        liEle.appendChild(btnEle);//append to li
        btnEle.addEventListener("click",(event)=>{
            event.target.parentElement.remove();
        })
    }else{
        console.log("NO Input");
    }
}