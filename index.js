let btn = document.querySelector("button")



 btn.addEventListener("click",()=>{
     let red = Math.floor(Math.random()*255)
     let green = Math.floor(Math.random()*255)     
     let blue = Math.floor(Math.random()*255)
     let color = `rgb(${red},${blue},${green})`

    document.body.style.backgroundColor = color
    btn.innerText = color  
 })
