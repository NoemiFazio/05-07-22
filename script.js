// Object methods
// Dato un oggetto prodotto come quello dell'esempio calcoliamo il costo della variante con tutti
//gli addon attivi facendo la somma di tutti i values dentro product.addons. Usiamo Object.values
//per ottenere i costi aggiuntivi da sommare al product.price.

const product = {
  id: 1,
  name: "TV",
  price: 40,
  addons: {
    decoder: 10,
    qled: 40,
    stereo: 20,
  },
};

const values = Object.values(product.addons);
console.log(values);
let sum = 0;

const fullOptionalPrice = values.forEach((val) => (sum += val));
console.log(sum + product.price);

// Implementare una grafica semplice prendendo come spunto [questo shop]
//( // https://xd.adobe.com/spec/3409f0fd-25f1-4668-428f-d25447f00e7b-4238/screen/d3fb646d-a698-4eea-bb8e-91be0b0ae011/ ). La pagina deve comprendere:

// 1)Lista di prodotti che vengono mostrati. (Possiamo gestire quelli nascosti sia
//non stampandoli che aggiungendo una classe per applicare un display:none);
// 2)Paginazione con 3 bottoni per le pagine: (1,2,3).
// 3)La parte con i filtri possiamo non implementarla al momento

// Partendo dal codice in calce:

// 1)Scrivere il codice che permette al click su un bottone della paginazione
//di cambiare shop.page;
// 2)Implementare il setter per la prop shop.page;
// 3)Implementare renderHTML in modo da usarla quando necessario aggiornare il
//contenuto della pagina;
// 4)Gestire la paginazione, si consiglia di farlo dentro il getter di shop.products.

const getProductHTML = (product) => {
  const { name, price } = product;
  return `<li>${name} - ${price}€</li>`;
};

const shop = {
  name: "Edgemonics",
  _products: [],
  _page: 1, // pagina corrente
  _per_page: 3, // numero di risultati per pagina

  get getProducts() {
    /**
     * Qui dentro dovremmo riuscire a paginare i prodotti.
     * Possiamo procurarci un indice iniziale ed uno finale lavorando con this._page e this._per_page
     * */
    console.log("Stai leggendo i prodotti di ", this.name);
    const startIndex = this._page * this._per_page; // ...
    const endIndex = startIndex - this._per_page; // ...
    const paginatedProducts = this._products.slice(endIndex, startIndex);

    return paginatedProducts;
  },

  set setProducts(newProducts) {
    /**
     * Il consiglio è quello di spostare la parte di renderHTML dentro una funzione indipendente,
     * così da rendere il metodo più snello
     * **/

    this._products = newProducts;

    const productsHTML = this.getProducts.map(getProductHTML).join("");
    document.body.innerHTML = `
          <h2>Offerte lampo</h2>
          <ul>${productsHTML}</ul>
      `;
  },

  set page(newPage) {
    /**
     * Aggiorniamo la pagina corrente.
     * Sarà che dobbiamo aggiornare il DOM anche qui?
     * */
  },

  renderHTML() {
    /**
     * Aggiorniamo il DOM stampando i risultati a schermo.
     * Avendo ora anche la paginazione, sarebbe il caso di mettere il nostro shop dentro un div specifico div.shop
     * con una struttura del genere
     * <body>
     *  div.shop -> aggiornato ad ogni chiamata della funzione
     *  div.pagination -> questo non si tocca mai
     * </body
     * e gestire la paginazione in modo separato, inserendo gli event listener una sola volta
     * **/
  },
};

shop.setProducts = [
  { id: 1, name: "TV", price: 80 },
  { id: 2, name: "PC", price: 30 },
  { id: 3, name: "LAVATRICE", price: 300 },
  { id: 4, name: "ASPIRAPOLVERE", price: 40 },
  { id: 5, name: "MOUSE", price: 15 },
  { id: 6, name: "CUFFIETTE", price: 20 },
];

const btnOne = document.createElement("button");
const btnTwo = document.createElement("button");
const btnThree = document.createElement("button");
const btnSection = document.createElement("section");
btnSection.className = "btn_section";

btnOne.innerHTML = 1;
btnTwo.innerHTML = 2;
btnThree.innerHTML = 3;
document.body.append(btnSection);
btnSection.append(btnOne, btnTwo, btnThree);
