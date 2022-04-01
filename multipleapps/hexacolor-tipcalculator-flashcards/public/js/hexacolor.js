const body = document.getElementById('body')
const input = document.getElementById('input-id')
const button = document.getElementById('button')
const invalidcolor =document.getElementById('invalid')
invalidcolor.innerHTML= "please select colors from blue,green,red,yellow,brown,pink,black,white"

button.addEventListener('click',colorchange)

function colorchange(){
    const colors = ['blue','green','red','yellow','brown','pink','black','white'];
    for (let i=0;i<colors.length;i++){
        if(colors[i]=== input.value){
            body.style.background = colors[i]
            invalidcolor.innerHTML=""
            break
        }
        else{
            invalidcolor.innerHTML="invalid color input"
        }
    };   
    
};