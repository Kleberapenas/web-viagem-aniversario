let scrollContainer = document.querySelector('.Locais');
let backBtn = document.getElementById('backBtn');
let nextBtn = document.getElementById('nextBtn');
let fotoMudar = document.getElementById('foto');

scrollContainer.addEventListener('wheel',(evt)=>{
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});

nextBtn.addEventListener('click', ()=>{
    scrollContainer.scrollLeft += screen.width*0.64;
});

backBtn.addEventListener('click', ()=>{
        scrollContainer.scrollLeft -= screen.width*0.64;
});

fotoMudar.addEventListener('click',()=>{
    if('.jpeg' in displayImage.src){
        displayImage.src= 'resources\src\images\QRCode.jpg'
    } else {
        displayImage.src
    }
});

function changeImage() {
    fotoMudar.displayImage.src='resources\src\images\QRCode.jpg';
};

