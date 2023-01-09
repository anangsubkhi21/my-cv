document.addEventListener('DOMContentLoaded',
function(){
    let ketik = new TypeIt('#typing', {})
    for(let i=1;i<100 ; i++){
        ketik.type('aku adalah seorang Front End').pause(1000).delete(28).type('aku suka ngaji').pause(1000).delete(15)
    }
    ketik.go()
})

//tombol toggle header
let hamburger = document.getElementById('hamburger-button')
let header = document.getElementById('header')
let main = document.getElementById('main')
let apakahDisembunyikan = false

hamburger.addEventListener('click', function(){
    if(apakahDisembunyikan == false){
        header.classList.add('hidden')
        main.classList.add('ful-width')
        apakahDisembunyikan = true
    }else{
        header.classList.remove('hidden')
        main.classList.remove('full-width')
        hamburger.innerHTML = "<i class='fa-solid fa-bars'></i>"
        apakahDisembunyikan = false
    }
})

// saat dokumen website di scroll
window.onscroll =  function(){
    if(document.body.scrollTop > main.offsetTop || document.documentElement.scrollTop > main.offsetTop){
        hamburger.classList.add('active')
    }else{
        hamburger.classList.remove('active')
    }
}