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

function codigopix(x) {
    switch (x) {
    case 1:
        document.getElementById("pix").innerHTML = 
    `<h1>Passeio de Barco na MarioGloria - R$500</h1>
    <p>Chave pix: kamilalimasilva354@gmail.com</p>`
    break
    case 2:
        document.getElementById("pix").innerHTML = 
    `<h1>Café Colombo - R$100</h1>
    <p>Chave pix: kamilalimasilva354@gmail.com</p>`
    break
    case 3:
        document.getElementById('pix').innerHTML = 
    `<h1>Jardim Botanico - R$60</h1>
    <p>Chave pix: kamilalimasilva354@gmail.com</p>`
    break
    case 4:
        document.getElementById('pix').innerHTML = 
    `<h1>Cristo Redentor - R$150</h1>
    <p>Chave pix: kamilalimasilva354@gmail.com</p>`
    break
    case 5: 
        document.getElementById('pix').innerText = 
        `<h1>Mirante Dona Marta - R$100</h1>
        <p>Chave Pix: kamilalimasilva354@gmail.com</p>`
        break
    case 6:
        document.getElementById('pix').innerText = 
        `<h1>Pão de açucar - R$200</h1>
        <p>Chave Pix: kamilalimasilva354@gmail.com</p>`
        break
    case 7:
        document.getElementById('pix').innerText = 
        `<h1>Parque Lage - R$60</h1>
        <p>Chave Pix: kamilalimasilva354@gmail.com</p>`
        break
    case 8:
        document.getElementById('pix').innerText = 
        `<h1>Real Gabinete PT - R$60</h1>
        <p>Chave Pix: kamilalimasilva354@gmail.com</p>`
        break
    case 9:
        document.getElementById('pix').innerText = 
        `<h1>Caminho Niemeyer - R$60</h1>
        <p>Chave Pix: kamilalimasilva354@gmail.com</p>`
        break
    case 10:
        document.getElementById('pix').innerText = 
        `<h1>Campo São Bento Niterói - R$30</h1>
        <p>Chave Pix: kamilalimasilva354@gmail.com</p>`
        break
    case 11:
        document.getElementById('pix').innerText = 
        `<h1>Ilha da Boa Viagem Niterói - R$30</h1>
        <p>Chave Pix: kamilalimasilva354@gmail.com</p>`
        break
    case 12:
        document.getElementById('pix').innerText = 
        `<h1>Museu Arte Conteporânia - R$50</h1>
        <p>Chave Pix: kamilalimasilva354@gmail.com</p>`
        break
    case 13:
        document.getElementById('pix').innerText = 
        `<h1>Solar Jambeiro Niterói - R$30</h1>
        <p>Chave Pix: kamilalimasilva354@gmail.com</p>`
        break
    case 14:
        document.getElementById('pix').innerText = 
        `<h1>Teatro Municipal Niterói - R$40</h1>
        <p>Chave Pix: kamilalimasilva354@gmail.com</p>`
        break
    case 15:
        document.getElementById('pix').innerText = 
        `<h1>Trilha das andorinhas Niterói - R$70</h1>
        <p>Chave Pix: kamilalimasilva354@gmail.com</p>`
        break
    }
}
