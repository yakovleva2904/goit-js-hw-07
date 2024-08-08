const inputEl = document.querySelector('input#name-input');
const outputEl = document.querySelector('span#name-output');

inputEl.addEventListener('input', (e) => {
    outputEl.textContent = e.currentTarget.value.trim() || 'Anonymous';
    
});
