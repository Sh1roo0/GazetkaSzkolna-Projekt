
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
           
        
        
   

    


window.addEventListener('DOMContentLoaded', ()=>{
  document.querySelectorAll('article').forEach((a,i)=>{
    setTimeout(() => a.classList.add('loaded'), 100 + 120*i);
  });
});

   
        const posts = [
    {
        id: "premiera-teatralna-mlodych",
        slug: "premiera-teatralna-mlodych",
        title: "Premiera teatralna koła Młodych",
        excerpt: "Relacja z premiery spektaklu przygotowanego przez szkolne koło teatralne.",
        content: "W piątek w auli odbyła się premiera spektaklu „Cienie”. Publiczność nagrodziła młodych aktorów owacjami na stojąco...",
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
        content: "Spotkanie zaczęło się od mocnej zagrywki kapitana naszej drużyny. Po zaciętej końcówce tie-break zakończył się wynikiem 17:15...",
        cover: "https://picsum.photos/400/200?random=2",
        date: "2025-10-15T18:30:00+02:00",
        categoryId: "sport",
        authorId: "bartek-kowalski",
        tags: ["siatkówka", "relacja"],
        readingMinutes: 3,
        featured: true,
    },
    {
        id: "jak-powstaje-tetniak-galaktyk",
        slug: "jak-powstaje-tetniak-galaktyk",
        title: "Jak powstaje „tętniak” galaktyk? – popularnonaukowo",
        excerpt: "Zjawiska grawitacyjne prowadzą do niezwykłych deformacji kosmicznych struktur.",
        content: "Choć nazwa brzmi metaforycznie, opisuje realne efekty oddziaływań grawitacyjnych na skalę galaktyk...",
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
        content: "Podczas uroczystej akademii nagrodzono 12 nauczycieli i 8 uczniów za szczególne osiągnięcia...",
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
        content: "Technologie wspierają proces twórczy, ale mogą też zniechęcać do samodzielnych poszukiwań...",
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
        content: "Samorząd uczniowski organizuje kiermasz: przynieś nieużywane tytuły i znajdź coś dla siebie...",
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
        content: "Biblioteka szkolna zaprasza do udziału w maratonie czytelniczym – przygotowaliśmy listę tytułów i wyzwania...",
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
        content: "Do wykonania peryskopu potrzebne będą dwie lusterka ustawione pod kątem 45 stopni...",
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
        content: "Zaczynamy od rozgrzewki: 10 minut truchtu i dynamiczne rozciąganie. Następnie 6 stacji po 40 sekund...",
        cover: "https://picsum.photos/400/200?random=9",
        date: "2025-09-18T17:00:00+02:00",
        categoryId: "sport",
        authorId: "bartek-kowalski",
        tags: ["trening", "poradnik"],
        readingMinutes: 3,
        featured: false,
    },
    {
        id: "poznaj-nowy-sklad-redakcji",
        slug: "poznaj-nowy-sklad-redakcji",
        title: "Poznaj nowy skład redakcji",
        excerpt: "Kim jesteśmy i co planujemy w tym roku?",
        content: "Witamy nowych członków zespołu! W tym roku stawiamy na reportaż i multimedia...",
        cover: "https://picsum.photos/400/200?random=10",
        date: "2025-09-10T10:15:00+02:00",
        categoryId: "zycie-szkoly",
        authorId: "anna-nowak",
        tags: ["redakcja", "plan"],
        readingMinutes: 2,
        featured: true,
    },
];

const categories = [
  { id: "kultura", name: "Kultura" },
  { id: "sport", name: "Sport" },
  { id: "nauka", name: "Nauka" },
  { id: "zycie-szkoly", name: "Życie szkoły" },
  { id: "opinia", name: "Opinia" }
];

const main = document.querySelector("main");

posts.sort((a,b) => new Date(a.date) - new Date(b.date));
posts.forEach(post => {
  
    const category = categories.find(c => c.id === post.categoryId);
    const date = new Date(post.date).toLocaleDateString("pl-PL", { day: "numeric", month: "long", year: "numeric" });
   main.innerHTML += `
  <article>
    <img src="${post.cover}" alt="${post.title}" loading="lazy">
    <div class="text-wrapper">
      <p><span>${date}</span> | ${category ? category.name : "Inne"}</p>
      <h1>${post.title}</h1>
      <p>${post.excerpt}</p>
      <a href="post.html?slug=${post.slug}">Czytaj więcej</a>
    </div>
  </article>
`;

});
