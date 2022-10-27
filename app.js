const button = document.querySelectorAll("button")
console.log(button, '')
const input = document.querySelector(".input")

button.forEach(function(button){
    button.addEventListener('click' ,(calculate))
}
)

function calculate (e){
    const clickvalue = e.target.value;
    if(clickvalue === '=') {
        if( clickvalue !== '') 
input.value = eval(input.value)
        
    }
    else if (clickvalue === 'C'){
        input.value =''
    } else (
        input.value += clickvalue
    )
}