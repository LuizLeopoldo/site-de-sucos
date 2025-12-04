let list = document.querySelectorAll('.item')
let ir = document.getElementById('ir')
let voltar = document.getElementById('voltar')

let count = list.length
let ativo = 0

console.log(list)

ir.onclick = () => {
    let activeOld = document.querySelector('.ativo')
    activeOld.classList.remove('ativo')

    ativo = ativo >= count -1 ? 0 : ativo + 1 
    list[ativo].classList.add('ativo')
}
voltar.onclick = () => {
    let activeOld = document.querySelector('.ativo')
    activeOld.classList.remove('ativo')

    ativo = ativo <= 0 ? count -1 : ativo - 1 
    list[ativo].classList.add('ativo')
}