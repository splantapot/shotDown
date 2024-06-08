const menuExit = document.getElementById("menu-exit");

menuExit.addEventListener('mousedown', (e) => {
    menuExit.parentElement.style.height = menu.style.height =='1%'? '25%' : '1%';
});

const inputBase = document.getElementById('input-base');
const inputLargura = document.getElementById('input-largura');

inputBase.value = '12'