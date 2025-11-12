
const authors = [
    {
        id: "anna-nowak",
        name: "Anna Nowak",
        role: "Redaktor naczelna",
        class: "3A",
        avatar: "https://picsum.photos/200/300",
        bio: "Lubi reportaże i fotografię. Prowadzi dział Kultura.",
        email: "anna.nowak@gazetka.edu",
        socials: { instagram: "#", x: "#", github: "#" },
        interests: ["reportaż", "film", "fotografia"],
    },
    {
        id: "maskiu",
        name: "maksiu sosna",
        role: "Dziennikarz sportowy",
        class: "2C",
        avatar: "https://picsum.photos/200/300",
        bio: "Biega, gra w siatkówkę, pisze relacje z meczów.",
        email: "bartek.kowalski@gazetka.edu",
        socials: { instagram: "#", x: "#" },
        interests: ["siatkówka", "bieganie", "analiza"],
    },
    {
        id: "celina-maj",
        name: "Celina Maj",
        role: "Popularnonaukowa",
        class: "1B",
        avatar: "https://picsum.photos/200/300",
        bio: "Zafascynowana kosmosem i biologią molekularną.",
        email: "celina.maj@gazetka.edu",
        socials: { instagram: "#" },
        interests: ["astronomia", "biologia", "czytanie"],
    },
    {
        id: "daniel-wisniewski",
        name: "Daniel Wiśniewski",
        role: "Reporter szkolny",
        class: "2A",
        avatar: "https://picsum.photos/200/300",
        bio: "Na tropie wszystkiego, co dzieje się w szkole.",
        email: "daniel.wisniewski@gazetka.edu",
        socials: { x: "#" },
        interests: ["wydarzenia", "wywiady", "podcasty"],
    },
    {
        id: "ewa-lewandowska",
        name: "Ewa Lewandowska",
        role: "Felietonistka",
        class: "4D",
        avatar: "https://picsum.photos/200/300",
        bio: "Pisze opinie i felietony o aktualnych tematach.",
        email: "ewa.lewandowska@gazetka.edu",
        socials: { instagram: "#" },
        interests: ["publicystyka", "muzyka", "teatr"],
    },
];

function openModal(name, klasa, bio) {
    document.getElementById('modal-title').textContent = name;
    document.getElementById('modal-age').textContent = `Klasa: ${klasa}`;
    document.getElementById('modal-desc').textContent = bio;
    document.getElementById('modal-backdrop').style.display = 'flex';
}

document.getElementById('modal-close').onclick = function () {
    document.getElementById('modal-backdrop').style.display = 'none';
}


function renderAuthors() {
    const container = document.getElementById('authors-list');
    authors.forEach(author => {
        const authorEl = document.createElement('div');
        authorEl.className = 'author-block';
        authorEl.innerHTML = `
      <img src="${author.avatar}" alt="${author.name}" class="author-avatar">
      <span class="author-name">${author.name}</span>
      <span class="author-desc">
        ${author.role} &ndash; klasa ${author.class}<br>${author.bio}
      </span>
      <button class="profile-btn" onclick="openModal('${author.name}', '${author.class}', '${author.bio}')">Zobacz profil</button>
    `;
        container.appendChild(authorEl);
    });
}


document.addEventListener('DOMContentLoaded', renderAuthors);



      
        
