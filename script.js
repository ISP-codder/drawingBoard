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

const board = document.querySelector('#board')

const blocks = 1500
let widthBoard =  board.clientWidth
let heightBoard = board.clientHeight

function createBoard(countElW, countElH){

    // let i = 1
    // let btn = document.querySelector('.button')
    // let btnColor = document.querySelector('.button-color')
    // let btnBlack = document.querySelector('.button-black')

    // while(i < b){
    //     let div = document.createElement('div')
    //     div.className = 'block-item'
    //     div.style.width = `${widthOneBlock}px`
    //     div.style.height = `${heightOneBlock}px`
    //     div.addEventListener('mouseover', ()=>{
    //         div.style.backgroundColor = "black"
    //     })
    //     document.body.prepend(div)
    //     i++
    //     btn.addEventListener('click', ()=>{
    //         div.style.backgroundColor = 'white'
    //     })
    //     btnColor.addEventListener('click', ()=>{
    //         div.addEventListener('mouseover', ()=>{
    //             div.style.backgroundColor = "blue"
    //         })
    //     })
    //     btnBlack.addEventListener('click', ()=>{
    //         div.addEventListener('mouseover', ()=>{
    //             div.style.backgroundColor = "black"
    //         })
    //     })
    // }

    const itemWidth = widthBoard / countElW
    board.style.gridTemplateColumns = `repeat(${countElW}, ${itemWidth}px)`
    const itemHeight = heightBoard / countElH
    board.style.gridTemplateRows = `repeat(${countElH}, ${itemHeight}px)`
    let i = 0
    let btn = document.querySelector('.button')
    let btnColor = document.querySelector('.button-color')
    let btnBlack = document.querySelector('.button-black')
    while(i < countElW*countElH ){
        let div = document.createElement('div')
        div.setAttribute('data-number', i)
        div.className = 'block-item'
        div.style.width = `${itemWidth}px`
        div.style.height = `${itemHeight}px`
        board.insertAdjacentElement('afterbegin', div)


        i++
    }
    let q= false
    board.addEventListener('mouseover', (event)=>{
        if(q ){
            event.target.style.backgroundColor = "red"

        }
    })
    board.addEventListener('mousedown', (event)=>{
        q = true

    })

    board.addEventListener('mouseup', (event)=>{
        q = false
    })

}

createBoard(50,50)

