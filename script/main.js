//switch the blur layers sections
let darkOrange = document.getElementById('darkOrange');
let lightBlue = document.getElementById('lightBlue');
let mainPage = document.getElementById('mainPage');
let logo = document.querySelector('.logo');
let cameraTape = document.querySelector('.cameraTape');
let mainContent = document.querySelector('.mainContent');

setTimeout(()=>{
  document.getElementById('mainLoading').style.display = 'none';
}, "3000");

window.addEventListener('load', ()=>{
  setTimeout(() => {
      darkOrange.style.top = '15px';
      darkOrange.style.right = '50px';
      darkOrange.style.left = '80%';
      darkOrange.style.height = '45vh';
      darkOrange.style.zIndex = '9';
      lightBlue.style.top = '85%';
      lightBlue.style.left = '-10%';
      lightBlue.style.width = '30%';
      mainPage.style.opacity= 1;
      logo.style.marginTop = '2%';
      cameraTape.style.width = '100%';
      mainContent.style.marginTop = '0%';
    
  }, "3500");
}) 