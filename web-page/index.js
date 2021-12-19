const ittech= document.getElementById('ittech');
const modal_container=document.getElementById('modal_container');
const close=document.getElementById('close');
ittech.getElementById("click",() =>{
    modal_container.classList.add('show');
});
close.getElementById("click",() =>{
    modal_container.classList.remove('show');
});