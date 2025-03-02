// const windowWidth = document.querySelector('.wrapper')
//
// let blocks = 100
//
// function calculateBlocks(b){
//     const sizeBlock = windowWidth.clientWidth / b
//     console.log(sizeBlock)
// }
//
// calculateBlocks(blocks)
//
// let div = document.createElement('div')
// div.className = 'block'
// div.innerHTML = '<strong>Всем привет!</strong> Вы прочитали важное сообщение.'
//
// document.body.append(div)

const placeBlocks = document.querySelector('.wrapper')

const blocks = 5000
let widthOneBlock =  placeBlocks.clientWidth
let heightOneBlock = placeBlocks.clientHeight

function getWidth(b){

    let i = 1
    let btn = document.querySelector('.button')
    let btnColor = document.querySelector('.button-color')
    let btnBlack = document.querySelector('.button-black')

    while(i < b){
        let div = document.createElement('div')
        div.className = 'block-item'
        div.style.width = String(widthOneBlock / b)
        div.style.height = String(heightOneBlock / b)
        div.addEventListener('mouseover', ()=>{
            div.style.backgroundColor = "black"
        })
        document.body.prepend(div)
        i++
        btn.addEventListener('click', ()=>{
            div.style.backgroundColor = 'white'
        })
        btnColor.addEventListener('click', ()=>{
            div.addEventListener('mouseover', ()=>{
                div.style.backgroundColor = "blue"
            })
        })
        btnBlack.addEventListener('click', ()=>{
            div.addEventListener('mouseover', ()=>{
                div.style.backgroundColor = "black"
            })
        })
    }
}

// Создать вторую функцию, где расписать сорздание блока со стилями. В этой же функции сделать цикл while, который будет их создавать

getWidth(blocks)