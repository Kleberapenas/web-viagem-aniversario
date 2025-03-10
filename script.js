let scrollContainer = document.querySelector('.Locais');
let backBtn = document.getElementById('backBtn');
let nextBtn = document.getElementById('nextBtn');
let fotoMudar = document.getElementsByClassName('foto');

scrollContainer.addEventListener('wheel',(evt)=>{
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});

nextBtn.addEventListener('click', ()=>{
    if(screen.width>=1000){
    scrollContainer.scrollLeft += screen.width*0.65;
} else {
    scrollContainer.scrollLeft += screen.width*1.5;
}
});

backBtn.addEventListener('click', ()=>{
    if(screen.width>=1000){
        scrollContainer.scrollLeft -= screen.width*0.65;
    } else {
        scrollContainer.scrollLeft -= screen.width*1.5;
    }
});

fotoMudar.addEventListener('click',()=>{
    if('.jpeg' in displayImage.src){
        displayImage.src= 'resources\src\images\QRCode.jpg'
    } else {
        displayImage.src
    }
})

function changeImage() {
    if('.jpeg' in displayImage.src){
        displayImage.src= 'resources\src\images\QRCode.jpg'
    } else {
        displayImage.src
    }
};

