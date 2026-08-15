const enterButton=document.querySelector('[data-enter]');
if(enterButton){enterButton.addEventListener('click',()=>{document.querySelector('#phase2').scrollIntoView({behavior:'smooth'});});}
