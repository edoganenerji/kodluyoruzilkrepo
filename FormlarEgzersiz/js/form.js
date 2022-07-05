
//Create user form//
let userFormDom = document.querySelector('#userForm')
userFormDom.addEventListener('submit', formHandler)

function formHandler(event) {
    event.preventDefault()
}

//Array//
let user = "erdi"
let items = [10, 20, 30, user, [1,2,3]]
console.log(items[Math.floor(items.length/2)])
console.log(items.length - 1)
document.querySelector("#info").innerHTML = items[0]
console.log(
    typeof(items)
)
console.log(
    Array.isArray(items)
)

items.push(100)
console.log("push:100 ->",items)

items.unshift(100)
console.log("unshift:100 ->",items)

let lastTerm = items.pop()
console.log("pop: delete last term ->", items)

let firstTerm = items.shift()
console.log("shift: delete first term ->", items)

items[0] = 23
console.log("change the first agent ->", items)

items.splice(2,0,"add1", "add2")
console.log("using splice to add elements: ", items)

items.splice(2,2)
console.log("using splice to remove elements: ", items)

let splitItems = items.splice(1,4)
console.log("split elements from items: ", splitItems)
console.log("elements have removed from items: ", items)

let newItems = items.slice(1,4)
console.log("create a new list from items by using slice: ", newItems)



let newItems2 = items.slice(-3,-1)
console.log("create a new list from items by using slice: ", newItems2)

let x = [1,2,3,4,5]
console.log("sort: ",x.sort().reverse())

//hackerrank assignment
function getSecondLargest(nums) {
    // Complete the function
    let secondLargest
    let sortNums = nums.sort(function(a,b){return b-a})
    let firstNum = sortNums[0]
    if (nums.length==1) {
        secondLargest = firstNum
    } else {
        function checkFirst(num){
            return num < firstNum
        }
        secondLargest = sortNums.filter(checkFirst)[0]
    }
    if (Boolean(secondLargest)==true) {
        return secondLargest
    } else {
        secondLargest = sortNums[1]
        return secondLargest
    }       
}

let nums = [1,2,3,4,5,6,7,8,9,10]
console.log("second largest: ", getSecondLargest(nums))

//Pekistirme soruları
//1-
let dizi = [2,5,8,11,15,17];
// Uygun dizi metotlarını kullanarak  yukarıda verilen dizinin elemanları içinde 10'dan büyük olan elemanların 5'er katından oluşan yeni bir dizi oluşturun. (sonuç [55, 75, 85] olmalı.)
let diziFilter = dizi.filter(function(element){
    return element > 10
})
let diziMap = diziFilter.map(function(sayi){
    return sayi*5
})
console.log("1. sorunun cevabı: ",diziMap)

//2-
//let dizim = [3,6,9,14,16];
let dizim = [0,1,2,3,4]
// Uygun dizi metotlarını kullanarak, yukarıdaki dizi için aşağıdaki şartları sağlayan myFunction fonksiyonunu yazın.
// Elemanların arasında 5'ten büyük olan bir eleman varsa konsola "Beşten büyük bir eleman mevcut." yoksa "5'ten büyük eleman mevcut değil." yazdır.

function myFunction (dizi){
// Kodunuzu buraya yazın.
    let besBuyuk = dizi.some(function(sayi){
        return sayi > 5
    })
    if (besBuyuk){
        console.log("Beşten büyük bir eleman mevcut")
    } else {
        console.log("5'ten büyük eleman mevcut değil.")
    }
}

myFunction(dizim);

//3-
let dizimiz = [2,3,4];

// Uygun dizi metodunu kullanarak yukarıda verilen dizinin elemanlarının çarpımının sonucunu (24) veren bir fonksiyon yazınız.
function carpim (multiply, sayi) {
    return multiply * sayi;
}
let carp = dizimiz.reduce(carpim,1)
console.log("3. sorunun cevabı: ", carp)

//Hackerrank sorusu
let word = "javascriptloops";
function vowelsAndConsonants(s) {

    let wovel = ['a','e', 'i', 'o', 'u']
    for (let spell of s) {
        if (wovel.includes(spell)){
           console.log(spell);
        } 
    }
    for (let spell of s) {
        if (!wovel.includes(spell)){
           console.log(spell);
        }
    }
}
vowelsAndConsonants(word)

let arabalar = ['toyota', 'opel', 'citroen', 'mercedes']
let index = 0
while(arabalar[index]) {
    console.log(arabalar[index]);
    index++;
}
//******forEach */
//Numbers array'ini kullanarak her elemanının iki fazlasına sahip olan başka bir array oluşturunuz.
const numbers = [12, 24, 36]; 
const newNumbers = [];
numbers.forEach(item => newNumbers.push(item+2))
console.log(newNumbers)

//* Filter *//
//Sorular
//*Soru 1: Yukarıdaki diziyi kullanarak filter() metodu ile yaşı 30'dan büyük olan kişiyi getirin.Soru 2: Yukarıdaki diziyi kullanarak filter() metodu ile JavaScript bilen kişiyi getirin.*//

const person = [{
    name: "Adem",
    age: 25,
    languages: ["JavaScript", "CSS"],
  },
  {
    name: "Oğuz",
    age: 33,
    languages: ["Java", "HTML"],
    }
  ];
  const bigPerson = person.filter(per => per.age>30)
  console.log(bigPerson)

  const knowJS = person.filter(per => per.languages.includes('JavaScript'))
  console.log(knowJS)