document.addEventListener('DOMContentLoaded', () => {
  const display = document.querySelector('#display');
  const buttons = document.querySelectorAll('button[data-simbolo]');
  const equalBtn = document.querySelector('#uguale');
  const clearBtn = document.querySelector('[data-simbolo="C"]');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const simbolo = button.dataset.simbolo;
      if (simbolo === 'C') return;
      display.value += simbolo;
    });
  });

  equalBtn.addEventListener('click', () => {
    try {
      // Alternativa più sicura a eval: new Function()
      display.value = new Function('return ' + display.value)();
    } catch {
      display.value = 'Errore';
    }
  });

  clearBtn.addEventListener('click', () => {
    display.value = '';
  });
});
