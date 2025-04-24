function onclickk() {

    var on = document.getElementById('on')
    var on1 = document.getElementById('img')

    on.innerHTML = 'HI';
    on.style.padding = '20px';
    on.style.background = '#04aa69';
    on.style.borderColor = 'blue';
    on.style.width = '50px';
    on.style.transition = '2s , color 1s';
    on.style.textAlign = 'center'
    on.style.color = 'white'

    on1.innerHTML = 'HI';
    on1.style.padding = '20px';
    on1.style.background = '#04aa69';
    on1.style.width = '50px';
    on1.style.transition = '2s , color 1s';
    on1.style.textAlign = 'center'
    on1.style.color = 'white'
    on1.src = 'https://www.w3schools.com/js/pic_bulbon.gif'

}
function onchangee() {
    let on = document.getElementById('input_btn')
    on.innerHTML = 'Hello!'
    on.style.color = 'white'
    on.style.padding = '20px'
    on.style.border = 'red'; // not working
    on.style.transition = '1s'
    on.style.background = 'rgb(37, 86, 221)'
    on.style.width = '175px'
}

function onmouseoverr() {
    let on = document.getElementById('overme')
    let on1 = document.getElementById('overme')

    on.style.background = 'red'
    on.style.width = '100px'
    on.style.padding = '20px'
    on.style.transition = '1s'
}

function onmouseoutt() {
    let on = document.getElementById('overme')
    let on1 = document.getElementById('overme')

    on.style.background = 'green'
    on.style.width = '220px'
    on.style.padding = '10px'
    on.style.transition = '1s'
}

function onkeydownn() {
    let on = document.getElementById('onkey')

    on.innerHTML = 'you just enter any key above input button'
    on.style.width = '100px'
    on.style.transition = ' width 1s, color 0.5s , 1s'
    on.style.padding = '20px'
    on.style.background = 'green'
    on.style.color = 'white'

}

function onloadd() {
    alert("you'v recently reload the page")
}