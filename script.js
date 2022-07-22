let title = document.getElementById('title');
let symbols = document.getElementById('symbols');

title.addEventListener('input', (e) => {
    if (e.target.value.length <= 100) {
       symbols.textContent = `${e.target.value.length}/100`; 
    } else return false;
});