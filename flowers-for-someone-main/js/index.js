const title = document.querySelector('.title')

const text = `Sana bir hediyem var miniciğim`.split('')

// Create container for better responsive layout

title.style.display = 'flex'

title.style.flexWrap = 'wrap'

title.style.justifyContent = 'center'

title.style.gap = '0.1rem'  // BURAYI DEĞİŞTİRDİM - 0.5rem'den 0.1rem'e düşürdüm

for (let index = 0; index < text.length; index++) {

if (text[index] !== ' ') {

title.innerHTML += `<span style="letter-spacing: 0;">${text[index]}</span>`  // BURAYI EKLEDİM - harfler arası boşluk yok

} else {

title.innerHTML += `<span style="width: 1rem;"></span>`  // BURAYI DEĞİŞTİRDİM - kelimeler arası boşluk arttı

}

}

const textElements = document.querySelectorAll('.title span');

textElements.forEach((element) => {

const randomDelay = Math.random() * 3;

element.style.animationDelay = `${randomDelay}s`;

});
