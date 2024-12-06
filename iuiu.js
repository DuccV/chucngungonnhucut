const cd = document.getElementById('cd')
const btn = document.querySelector('.nut')
const mc = document.querySelector('.m-cnt')
const main = document.querySelector('.main')

function handleButton() {
    time = 4
    btn.style.display = 'none'
    let itv = setInterval(() => {
        time--
        cd.textContent = time
        if(time == 0){
            clearInterval(itv)
            mc.classList.toggle('disnable')
            main.classList.remove('dis')
        }
    }, 1000)
}

btn.addEventListener('click', () => {
    handleButton()
})