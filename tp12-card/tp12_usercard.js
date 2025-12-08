class UserCard extends HTMLElement {
    constructor() {
        super();
        // On crée le Shadow DOM ici, mais pas encore le contenu
        this.shadow = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        // Création du conteneur
        const card = document.createElement('div');
        card.classList.add('card');

        // Création de l'image
        const img = document.createElement('img');
        img.src = this.getAttribute('avatar') || '';
        img.alt = this.getAttribute('name') || 'Avatar';

        // Création du nom
        const name = document.createElement('h2');
        name.textContent = this.getAttribute('name') || 'Nom inconnu';

        // Ajout au conteneur
        card.appendChild(img);
        card.appendChild(name);

        // Style encapsulé
        const style = document.createElement('style');
        style.textContent = `
          .card {
            display: inline-block;
            align-items: center;
            background-color: #fff;
            border-radius: 10px;
            padding: 20px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            width: 180px;
            font-family: 'Arial', sans-serif;
            transition: transform 0.2s, box-shadow 0.2s;
          }
          .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 20px rgba(0,0,0,0.25);
          }
          img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            object-fit: cover;
            margin-bottom: 15px;
            border: 2px solid #eee;
          }
          h2 {
            font-size: 1.1rem;
            color: #333;
            margin: 0;
            text-align: center;
          }
        `;

        // Ajout du style et du conteneur au Shadow DOM
        this.shadow.appendChild(style);
        this.shadow.appendChild(card);
    }
}

// Définition du composant
customElements.define('user-card', UserCard);
