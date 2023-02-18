let k1 = document.querySelector('.cont-1k')
let k2 = document.querySelector('.cont-2k')
let k3 = document.querySelector('.cont-3k')
let k4 = document.querySelector('.cont-4k')

k1.onclick = ()=>{
    k1.classList.add('bg1')
    k2.classList.remove('bg2')
    k3.classList.remove('bg3')
    k4.classList.remove('bg4')

}
k2.onclick = ()=>{
    k2.classList.add('bg2')
    k1.classList.remove('bg1')
    k3.classList.remove('bg3')
    k4.classList.remove('bg4')
}
k3.onclick = ()=>{
    k3.classList.add('bg3')
    k1.classList.remove('bg1')
    k2.classList.remove('bg2')
    k4.classList.remove('bg4')
}
k4.onclick = ()=>{
    k4.classList.add('bg4')
    k2.classList.remove('bg2')
    k1.classList.remove('bg1')
    k3.classList.remove('bg3')
}