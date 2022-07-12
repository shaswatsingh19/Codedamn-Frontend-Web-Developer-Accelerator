let output = document.getElementById('output')
let btn = document.querySelectorAll('button')


output.style.padding = "10px 5px 10px 0"
output.textContent = ' ,'
output.style.color = "#203A43"
let val = ''

Array.from(btn).forEach((button) => {
    
    // output.style.color = "#203A43"
    button.addEventListener('click' , (e) => {
        output.style.color = 'wheat'
        if (e.target.textContent === '=' && eval(val) != undefined){
            output.textContent = eval(val)
            val = eval(val)
        }
        else if (e.target.textContent === 'AC'){
            output.textContent = 'ALL CLEAR'
            setTimeout(() => {
                output.textContent = ' ,'
                output.style.color = "#203A43"
                val = ''
            },1000)
        }
        else if (e.target.textContent === 'DEL'){

            val = String(val).slice(0,-1)
            output.textContent = val
            val = eval(val)
        }
        else{
            val += e.target.textContent
            if (val === '='){
                output.textContent = ' ,'
                // output.style.color = "#203A43"
                val = ''
            }
            output.textContent = val
        }
    } )
})


// btn[0].addEventListener('click',(e) => {
//     console.log(e.target)
//     output.textContent += 'All CLEAR'
//     setTimeout(() =>{
//         output.textContent += '.'
//         output.style.color = "#203A43"
//     },1500)

// }) 

// btn[1].addEventListener('click',(e) => {
//     console.log(e.target)
//     output.textContent += 'DELETE'

// }) 
// btn[2].addEventListener('click',(e) => {
//     console.log(e.target)
//     output.textContent += '/'

// }) 

// btn[3].addEventListener('click',(e) => {
//     console.log(e.target.textContent)
//     output.textContent += '1'


// }) 

// btn[4].addEventListener('click',(e) => {
//     console.log(e.target)
//     output.textContent += '2'

// }) 
// btn[5].addEventListener('click',(e) => {
//     console.log(e.target)
//     output.textContent += '*'

// }) 

// btn[6].addEventListener('click',(e) => {
//     console.log(e.target)
//     output.textContent += '3'

// }) 

// btn[7].addEventListener('click',(e) => {
//     console.log(e.target)
//     output.textContent += '4'

// }) 
// btn[8].addEventListener('click',(e) => {
//     console.log(e.target)
//     output.textContent += '+'

// }) 

// btn[9].addEventListener('click',(e) => {
//     console.log(e.target)
//     output.textContent += '5'

// }) 

// btn[10].addEventListener('click',(e) => {
//     console.log(e.target)
//     output.textContent += '6'

// }) 
// btn[11].addEventListener('click',(e) => {
//     console.log(e.target)
//     output.textContent += '-'

// }) 
// btn[12].addEventListener('click',(e) => {
//     console.log(e.target)
//     output.textContent += '7'

// }) 
// btn[13].addEventListener('click',(e) => {
//     console.log(e.target)
//     output.textContent += '8'

// }) 

// btn[14].addEventListener('click',(e) => {
//     console.log(e.target)
//     output.textContent += '9'

// }) 
// btn[15].addEventListener('click',(e) => {
//     console.log(e.target)
//     output.textContent += '.'

// }) 
// btn[16].addEventListener('click',(e) => {
//     console.log(e.target)
//     output.textContent += '0'

// }) 
// btn[17].addEventListener('click',(e) => {
//     console.log(e.target)
//     output.textContent += '='

// }) 
