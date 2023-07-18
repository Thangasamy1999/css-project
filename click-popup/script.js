window.onload=function(){
    const btnOpen=document.querySelector('.btnOpen');
    const btnClose=document.querySelectorAll('.btnClose');
    const container=document.querySelector('.modal-container');

    btnOpen.addEventListener('click',function(){
        container.classList.add('click');
    });

   /* for(let i=0;i<btnClose.length;i++){

    btnClose[i].addEventListener('click',function(){
        container.classList.remove('click');
    });
    
}*/
btnClose.forEach(btn=>{ btn.addEventListener('click',function(){
        container.classList.remove('click');
    });
});

}