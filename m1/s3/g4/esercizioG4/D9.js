/* ESERCIZIO 1 
       Scrivi una funzione per cambiare il titolo del documento in qualcos'altro.
      */
       let x = "Esercizio S3/G4";
       const changeTitle = function (newTitle) {
        //
        let titolo = document.querySelector('.myClass')
        titolo.innerText = newTitle;
      }
      changeTitle(x);

      /* ESERCIZIO 2
       Scrivi una funzione per cambiare la classe del titolo della pagina in "myHeading".
      */

      const addClassToTitle = function () {
        //
        let titolo = document.querySelector('.myClass');
        titolo.classList.replace('myClass', 'myHeading');
      }
      addClassToTitle();
      /* ESERCIZIO 3
       Scrivi una funzione per cambiare il contenuto di tutti i p che sono discendenti di un div.
      */

      const changePcontent = function () {
        //
        let contents = document.querySelectorAll('div > p');
        contents.forEach(content => {
            content.textContent = 'ecco i nuovi paragrafi';
        });
      }
      changePcontent();

      /* ESERCIZIO 4
       Scrivi una funzione per cambiare la proprietà href di ogni link a https://www.google.com
      */

      const changeUrls = function () {
        //
        let proprietà = document.querySelectorAll('a');
        proprietà.forEach(prop => {
          prop.href = 'https://www.google.com';
        })
      }
      changeUrls();

      /* ESERCIZIO 5
       Scrivi una funzione per aggiungere un nuovo elemento alla seconda lista non-ordinata.
      */

      let nuovoElemento = 'Quarto';
      const addToTheSecond = function (content) {
        //
        let elemento = document.getElementById('secondList');
        let li = document.createElement('li');
        let textli = document.createTextNode(content);
        li.appendChild(textli);
        elemento.appendChild(li);
      }
      addToTheSecond(nuovoElemento);

      /* ESERCIZIO 6
       Scrivi una funzione per aggiungere un secondo paragrafo al primo div.
      */
      let paragrafo = 'Questo è il paragrafo del primo div';
      const addParagraph = function (content) {
        //
        let secondoP = document.querySelector('div');
        let p = document.createElement('p');
        let textp = document.createTextNode(content);
        p.appendChild(textp);
        secondoP.appendChild(p);

      }
      addParagraph(paragrafo);

      /* ESERCIZIO 7
       Scrivi una funzione per far scomparire la prima lista non-ordinata.
      */

      const firstUlDisappear = function () {
        //
        let elimina = document.getElementById('firstList');
        elimina.remove();
      }
      firstUlDisappear();

      /* ESERCIZIO 8
       Scrivi una funzione per rendere verde lo sfondo di ogni lista non-ordinata.
      */

      const paintItGreen = function () {
        //
        let sfondo = document.querySelector('ul');
        sfondo.style.backgroundColor = 'green';
      }
      paintItGreen();
      /* ESERCIZIO 9
       Rendi il tag h1 capace di cambiare colore del testo ogni volta che l'utente ci clicca sopra.
      */

      const makeItClickable = function () {
        //
        let change = document.querySelector('h1');
        change.addEventListener('click', () => {
            change.classList.toggle('myHeading');
        })
      }
      makeItClickable();

      /* ESERCIZIO 10
       Cambia il testo del footer con qualcos'altro quando l'utente ci clicca sopra.
      */

      const changeFooterText = function () {
        //
        let change = document.querySelector('.footer > p');
        change.addEventListener('click', () => {
            change.textContent = 'Hai appena cliccato!'
        })
      }
      changeFooterText();

      /* ESERCIZIO 11  
       Aggiungi un event listener al campo di testo nella pagina e fai in modo che dopo 
       ogni lettera il suo valore venga mostrato in console.
      */

      const inputField = document.getElementById('input-field')
      // ...
      inputField.addEventListener('keyup', () => {
        console.log(inputField.value);
      })

      /* ESERCIZIO 12
       Crea un messaggio di benvenuto con un alert quando la pagina ha finito di caricarsi.
      
       window.onload = async function () {
        await new Promise(resolve => setTimeout(resolve, 3000));
        alert('ha caricato la pagina grazie ciao!');
      };
      */

      window.onload = function () {
        //
        alert('BENVENUTO');
      }
      onload();
      