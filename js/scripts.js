/*
Descrizione:
Stampare a schermo un messaggio all'interno di un h1, utilizzando i data.

Bonus:
Aggiungere alla pagina un'immagine, presa anch'essa da un data.
*/

Vue.createApp({
    data() {
      return {
        message: 'Hello World!'
      }
    }
}).mount('#app')

Vue.createApp({
    data() {
      return {
        urlImg: "https://unsplash.it/600/300?"
      };
    }
}).mount('#imgBonus')