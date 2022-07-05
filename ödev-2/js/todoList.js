//* This is the updated version of "https://github.com/oguzhanduran/JavaScript-ToDo-List-Homework-2-Patika.dev" code written by Oguzhan Duran. The code is extended with using local storage by Dr. Erdi Dogan *//

let butonDOM = document.querySelector('#liveToastBtn')
let listDOM = document.querySelector('#list')
let taskDOM = document.querySelector('#task')
let ulList =document.getElementsByTagName('li')
getLocal()


for(let index=0;index<ulList.length;index++){
    let closeBtn = document.createElement('span')
    closeBtn.textContent = '\u00D7'
    closeBtn.classList.add('close')
    closeBtn.onclick = removeBtn
    ulList[index].append(closeBtn)
    ulList[index].onclick = check

}

function check(){
    this.classList.toggle('checked')
}

function removeBtn(){
    this.parentElement.remove()
}

function getLocal(){
    let lenLocalItems = localStorage.getItem('counter')
    for (let index=1;index<parseInt(lenLocalItems)+1;index++){
        let localGet = localStorage.getItem(`enter_${index}`)
        let liDOMLOCAL = document.createElement('li')
        listDOM.appendChild(liDOMLOCAL)
        liDOMLOCAL.innerHTML = localGet
    }
}

//We check if counter exist, then either we get the current counter or assign counter as 1
let counter = localStorage.getItem('counter') ? Number(localStorage.getItem('counter')) : 1

function addItem(){
    if (taskDOM == ''){
        $('.error').toast('show')
    } else {
        $('.success').toast('show')

    let liDOM = document.createElement('li')
    listDOM.appendChild(liDOM)
    liDOM.innerHTML = task.value
    let lastCounter = localStorage.getItem('counter')
    localStorage.setItem(`enter_${counter}`, task.value)
    localStorage.setItem(`counter`, counter)
    counter += 1
    taskDOM.value = ''

    liDOM.onclick = check

    let closeBtn = document.createElement('span')
    closeBtn.textContent = '\u00D7'
    closeBtn.classList.add('close')
    closeBtn.onclick = removeBtn

    liDOM.append(closeBtn)
    listDOM.append(liDOM)  
}
}
