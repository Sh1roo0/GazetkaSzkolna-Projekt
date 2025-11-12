 
        let burger = document.getElementById("burger");
        let menuList = document.getElementById("menuList")
        menuList.style.maxHeight = "0px";

       burger.addEventListener("click", function toggleMenu(){
          if(menuList.style.maxHeight == "0px")
           {
                menuList.style.maxHeight = "300px";
            }
            else{
                menuList.style.maxHeight = "0px";
            }
       }) 
    



      const categories = [
    {
        id: "kultura",
        name: "Kultura",
        description: "Recenzje, wydarzenia, wywiady i inspiracje kulturalne.",
        color: "#7C3AED",
        icon: "icon-theatre",
        cover: "images/kategorie/kultura.jpg",
    },
    {
        id: "sport",
        name: "Sport",
        description: "Relacje z meczów, wywiady z zawodnikami, porady treningowe.",
        color: "#10B981",
        icon: "icon-ball",
        cover: "images/kategorie/sport.jpg",
    },
    {
        id: "nauka",
        name: "Nauka",
        description: "Popularnonaukowe artykuły, doświadczenia, ciekawostki.",
        color: "#2563EB",
        icon: "icon-lab",
        cover: "images/kategorie/nauka.jpg",
    },
    {
        id: "zycie-szkoly",
        name: "Życie szkoły",
        description: "Wydarzenia, samorząd, ogłoszenia i projekty uczniowskie.",
        color: "#F59E0B",
        icon: "icon-school",
        cover: "images/kategorie/zycie.jpg",
    },
    {
        id: "opinia",
        name: "Opinie",
        description: "Felietony, komentarze i głosy redakcji.",
        color: "#EF4444",
        icon: "icon-quote",
        cover: "images/kategorie/opinia.jpg",
    },
];

const authors = [
    {
        id: "anna-nowak",
        name: "Anna Nowak",
        role: "Redaktor naczelna",
        class: "3A",
        avatar: "images/autorzy/anna.jpg",
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
        avatar: "images/autorzy/bartek.jpg",
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
        avatar: "images/autorzy/celina.jpg",
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
        avatar: "images/autorzy/daniel.jpg",
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
        avatar: "images/autorzy/ewa.jpg",
        bio: "Pisze opinie i felietony o aktualnych tematach.",
        email: "ewa.lewandowska@gazetka.edu",
        socials: { instagram: "#" },
        interests: ["publicystyka", "muzyka", "teatr"],
    },
];

const posts = [
    {
        id: "premiera-teatralna-mlodych",
        slug: "premiera-teatralna-mlodych",
        title: "Premiera teatralna koła Młodych",
        excerpt: "Relacja z premiery spektaklu przygotowanego przez szkolne koło teatralne.",
        content: `
            <p>W piątek w auli odbyła się długo wyczekiwana premiera spektaklu „Cienie”, przygotowanego przez szkolne koło teatralne. Publiczność, która szczelnie wypełniła salę, nagrodziła młodych aktorów owacjami na stojąco.</p>
            <p>Spektakl opowiadał historię grupy przyjaciół odkrywających tajemnice starego domu. Doskonała gra aktorska, przemyślana scenografia i klimatyczna muzyka sprawiły, że widzowie z zapartym tchem śledzili losy bohaterów. To był prawdziwy sukces i dowód na to, jak wielki potencjał drzemie w naszych uczniach.</p>
        `,
        cover: "https://picsum.photos/400/200?random=1",
        date: "2025-10-10T10:00:00+02:00",
        categoryId: "kultura",
        authorId: "anna-nowak",
        tags: ["teatr", "wydarzenia", "recenzja"],
        readingMinutes: 4,
        featured: true,
    },
    {
        id: "derby-siatkowki-relacja",
        slug: "derby-siatkowki-relacja",
        title: "Derby siatkówki: emocje do ostatniej piłki",
        excerpt: "Nasza drużyna zwycięża 3:2 w dramatycznym meczu z liceum nr 8.",
        content: `
            <p>Spotkanie zaczęło się od mocnej zagrywki kapitana naszej drużyny. Po zaciętej końcówce tie-break zakończył się wynikiem 17:15...</p>
            <p>To był mecz pełen zwrotów akcji. Nasi zawodnicy pokazali charakter i determinację, odrabiając straty w czwartym secie. MVP spotkania został nasz rozgrywający, 'Maksiu', który popisał się kilkoma genialnymi wystawami.</p>
        `,
        cover: "https://picsum.photos/400/200?random=2",
        date: "2025-10-15T18:30:00+02:00",
        categoryId: "sport",
        authorId: "maskiu",
        tags: ["siatkówka", "relacja"],
        readingMinutes: 3,
        featured: true,
    },
    {
        id: "jak-powstaje-tetniak-galaktyk",
        slug: "jak-powstaje-tetniak-galaktyk",
        title: "Jak powstaje „tętniak” galaktyk? – popularnonaukowo",
        excerpt: "Zjawiska grawitacyjne prowadzą do niezwykłych deformacji kosmicznych struktur.",
        content: "<p>Choć nazwa brzmi metaforycznie, opisuje realne efekty oddziaływań grawitacyjnych na skalę galaktyk...</p>",
        cover: "https://picsum.photos/400/200?random=3",
        date: "2025-09-30T09:00:00+02:00",
        categoryId: "nauka",
        authorId: "celina-maj",
        tags: ["astronomia", "fizyka"],
        readingMinutes: 6,
        featured: false,
    },
    {
        id: "dzien-edukacji-narodowej",
        slug: "dzien-edukacji-narodowej",
        title: "Dzień Edukacji Narodowej: gala nagród",
        excerpt: "Wręczenie wyróżnień dla nauczycieli i aktywnych uczniów.",
        content: "<p>Podczas uroczystej akademii nagrodzono 12 nauczycieli i 8 uczniów za szczególne osiągnięcia...</p>",
        cover: "https://picsum.photos/400/200?random=4",
        date: "2025-10-14T12:00:00+02:00",
        categoryId: "zycie-szkoly",
        authorId: "daniel-wisniewski",
        tags: ["wydarzenia", "akademia"],
        readingMinutes: 2,
        featured: true,
    },
    {
        id: "czy-ai-odejmie-nam-kreatywnosc",
        slug: "czy-ai-odejmie-nam-kreatywnosc",
        title: "Czy AI odbiera kreatywność? – felieton",
        excerpt: "Gdzie kończy się pomoc narzędzi, a zaczyna wygoda?",
        content: "<p>Technologie wspierają proces twórczy, ale mogą też zniechęcać do samodzielnych poszukiwań...</p>",
        cover: "https://picsum.photos/400/200?random=5",
        date: "2025-10-05T16:00:00+02:00",
        categoryId: "opinia",
        authorId: "ewa-lewandowska",
        tags: ["opinia", "technologia"],
        readingMinutes: 5,
        featured: false,
    },
    {
        id: "kiermasz-ksiazek-jesien-2025",
        slug: "kiermasz-ksiazek-jesien-2025",
        title: "Kiermasz książek – jesień 2025",
        excerpt: "Używane podręczniki i beletrystyka: sala 21, czwartek–piątek.",
        content: "<p>Samorząd uczniowski organizuje kiermasz: przynieś nieużywane tytuły i znajdź coś dla siebie...</p>",
        cover: "https://picsum.photos/400/200?random=6",
        date: "2025-10-02T08:00:00+02:00",
        categoryId: "zycie-szkoly",
        authorId: "daniel-wisniewski",
        tags: ["ogłoszenia", "SU"],
        readingMinutes: 1,
        featured: false,
    },
    {
        id: "maraton-czytelniczy-startujemy",
        slug: "maraton-czytelniczy-startujemy",
        title: "Maraton czytelniczy – startujemy!",
        excerpt: "Przez miesiąc codziennie 20 minut z książką. Dołącz!",
        content: "<p>Biblioteka szkolna zaprasza do udziału w maratonie czytelniczym – przygotowaliśmy listę tytułów i wyzwania...</p>",
        cover: "https://picsum.photos/400/200?random=7",
        date: "2025-09-25T07:45:00+02:00",
        categoryId: "kultura",
        authorId: "anna-nowak",
        tags: ["czytanie", "biblioteka"],
        readingMinutes: 2,
        featured: false,
    },
    {
        id: "eksperyment-z-soczewkami",
        slug: "eksperyment-z-soczewkami",
        title: "Eksperyment z soczewkami – prosty przewodnik",
        excerpt: "Jak zbudować peryskop i zobaczyć świat inaczej.",
        content: "<p>Do wykonania peryskopu potrzebne będą dwie lusterka ustawione pod kątem 45 stopni...</p>",
        cover: "https://picsum.photos/400/200?random=8",
        date: "2025-09-20T11:20:00+02:00",
        categoryId: "nauka",
        authorId: "celina-maj",
        tags: ["eksperyment", "optyka"],
        readingMinutes: 4,
        featured: false,
    },
    {
        id: "trening-obwodowy-dla-poczatkujacych",
        slug: "trening-obwodowy-dla-poczatkujacych",
        title: "Trening obwodowy dla początkujących",
        excerpt: "Prosty plan na salę gimnastyczną lub boisko.",
        content: "<p>Zaczynamy od rozgrzewki: 10 minut truchtu i dynamiczne rozciąganie. Następnie 6 stacji po 40 sekund...</p>",
        cover: "https://picsum.photos/400/200?random=9",
        date: "2025-09-18T17:00:00+02:00",
        categoryId: "sport",
        authorId: "maskiu",
        tags: ["trening", "poradnik"],
        readingMinutes: 3,
        featured: false,
    },
    {
        id: "poznaj-nowy-sklad-redakcji",
        slug: "poznaj-nowy-sklad-redakcji",
        title: "Poznaj nowy skład redakcji",
        excerpt: "Kim jesteśmy i co planujemy w tym roku?",
        content: "<p>Witamy nowych członków zespołu! W tym roku stawiamy na reportaż i multimedia...</p>",
        cover: "https://picsum.photos/400/200?random=10",
        date: "2025-09-10T10:15:00+02:00",
        categoryId: "zycie-szkoly",
        authorId: "anna-nowak",
        tags: ["redakcja", "plan"],
        readingMinutes: 2,
        featured: true,
    },
];




function findCategoryById(id) {
    for (let i = 0; i < categories.length; i++) {
        if (categories[i].id == id) {
            return categories[i];
        }
    }
    return null;
}

function findAuthorById(id) {
    for (let i = 0; i < authors.length; i++) {
        if (authors[i].id == id) {
            return authors[i];
        }
    }
    return null;
}

function findPostBySlug(slug) {
    for (let i = 0; i < posts.length; i++) {
        if (posts[i].slug == slug) {
            return posts[i];
        }
    }
    return null;
}

const postListContainer = document.getElementById("post-list-container");

if (postListContainer) {
    
    for (let i = 0; i < posts.length; i++) {
        
        const post = posts[i];

        if (post.featured == true) {
            
            const category = findCategoryById(post.categoryId);
            
            const date = new Date(post.date).toLocaleDateString("pl-PL", { 
                day: "numeric", month: "long", year: "numeric" 
            });

            let categoryName;
            if (category) {
                categoryName = category.name;
            } else {
                categoryName = "Inne";
            }

            const articleHtml = 
                "<article>" +
                    '<img src="' + post.cover + '" alt="' + post.title + '">' +
                    '<div class="text-wrapper">' +
                        '<p><span>' + date + '</span> | ' + categoryName + '</p>' +
                        '<h1>' + post.title + '</h1>' +
                        '<p>' + post.excerpt + '</p>' +
                        '<a href="post.html?slug=' + post.slug + '">Czytaj więcej</a>' +
                    '</div>' +
                "</article>";
            
            postListContainer.innerHTML += articleHtml;
        }
    }
}


const articleDetailContainer = document.getElementById("article-detail-container");

if (articleDetailContainer) {
    
    const queryString = window.location.search;
    const urlParts = queryString.split('=');
    const postSlug = urlParts[1];

    const post = findPostBySlug(postSlug);

    if (post) {
        
        const category = findCategoryById(post.categoryId);
        const author = findAuthorById(post.authorId);
        const date = new Date(post.date).toLocaleDateString("pl-PL", {
            day: "numeric", month: "long", year: "numeric"
        });

        document.title = post.title + " | Gazetka Szkolna";

        let authorName;
        if (author) {
            authorName = author.name;
        } else {
            authorName = "Redakcja";
        }

        let categoryName;
        if (category) {
            categoryName = category.name;
        } else {
            categoryName = "Inne";
        }

        const articleHtml = 
            "<article>" +
                '<header class="article-header">' +
                    '<h1>' + post.title + '</h1>' +
                    '<div class="article-meta">' +
                        '<span>Autor: <strong>' + authorName + '</strong></span>' +
                        '<span>' + date + '</span>' +
                        '<span>Kategoria: <strong>' + categoryName + '</strong></span>' +
                        '<span>Czas czytania: ' + post.readingMinutes + ' min.</span>' +
                    '</div>' +
                '</header>' +
                
                '<img src="' + post.cover + '" alt="' + post.title + '" class="article-cover-image">' +
                
                '<div class="article-body">' +
                    post.content +
                '</div>' +
            '</article>';
        
        articleDetailContainer.innerHTML = articleHtml;
        
    } else {
        
        document.title = "Nie znaleziono artykułu | Gazetka Szkolna";
        
        articleDetailContainer.innerHTML =
            '<div class="error-message">' +
                '<h1>Błąd 404</h1>' +
                '<p>Niestety, nie mogliśmy znaleźć artykułu, którego szukasz.</p>' +
                '<p><a href="index.html">Wróć na stronę główną</a></p>' +
            '</div>';
    }
}
   