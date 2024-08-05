const container =document.querySelector('.container')
const btns = document.querySelectorAll('.btn')
const imglist = ["a", "b", "c", "d"]

let index=0
btns.forEach((button)=>{
    button.addEventListener('click', ()=>{
        if(button.classList.contains('btn-left')){
            index--;
            if(index<0){
                index=imglist.length-1;
                
            }
            container.style.background = `url(images/${imglist[index]}.jpg) center/cover fixed no-repeat`
        }
        else{
            index++;
            if(index===imglist.length){
                index=0;
                
            }
            container.style.background = `url(images/${imglist[index]}.jpg) center/cover fixed no-repeat`
        }
        
    })
})