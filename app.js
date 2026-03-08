// ===========================
// KASZUBY EXPLORER – app.js
// ===========================

// ---- NAVBAR: sticky + active link ----
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 30);
  highlightNavOnScroll();
});

function highlightNavOnScroll() {
  const sections = ['explore', 'trails', 'lakes', 'places', 'map'];
  let current = '';
  for (const id of sections) {
    const el = document.getElementById(id);
    if (el && window.scrollY >= el.offsetTop - 130) current = id;
  }
  navLinks.forEach(link => {
    link.classList.toggle('active', link.dataset.section === current);
  });
}

// ---- HAMBURGER MENU ----
const hamburgerBtn = document.getElementById('hamburgerBtn');
const navLinksList = document.getElementById('nav-links');

hamburgerBtn.addEventListener('click', () => {
  navLinksList.classList.toggle('open');
});

navLinksList.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinksList.classList.remove('open'));
});

// ---- TRAIL TABS ----
const tabBtns = document.querySelectorAll('.tab');
tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const tab = btn.dataset.tab;
    tabBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('tab-content-hiking').classList.toggle('hidden', tab !== 'hiking');
    document.getElementById('tab-content-cycling').classList.toggle('hidden', tab !== 'cycling');
  });
});

// ---- PLACES FILTER ----
const filterBtns = document.querySelectorAll('.filter-btn');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.querySelectorAll('.place-card').forEach(card => {
      const cats = card.dataset.category || '';
      card.classList.toggle('hidden', filter !== 'all' && !cats.includes(filter));
    });
  });
});

// ---- MODAL DATA ----
const modalData = {
  // TRAILS
  'trail-1': {
    img: 'assets/szlak_kaszubski.png',
    badge: 'Szlak pieszy · Czerwony',
    title: 'Szlak Kaszubski',
    subtitle: 'Pojezierze Kaszubskie',
    desc: 'Jeden z najdłuższych i najpiękniejszych szlaków pieszych w północnej Polsce, liczący łącznie ok. 139 km. Przemierza Pojezierze Kaszubskie, ukazując piękno przyrody i bogactwo kulturowe regionu. Na trasie: Lasy Mirachowskie, Jeziora Raduńskie ("Kółko Raduńskie"), okolice Kościerzyny i rejon jezior wdzydzkich. W granicach Kaszubskiego Parku Krajobrazowego ma długość ~60 km. Szlak jest podzielony na krótsze odcinki, co ułatwia planowanie wędrówek.',
    stats: [
      { val: '139 km', key: 'Długość całkowita' },
      { val: 'Średni', key: 'Trudność' },
      { val: 'Wielodniowy', key: 'Czas przejścia' },
    ],
    tags: ['Lasy Mirachowskie', 'Jeziora Raduńskie', 'Kościerzyna', 'KPK', 'Północ → Południe'],
  },
  'trail-2': {
    img: 'assets/wiezyce_tower.png',
    badge: 'Szlak pieszy · Czarny',
    title: 'Szlak Wzgórz Szymbarskich',
    subtitle: 'Sopot → Sierakowice',
    desc: 'Szlak zaczyna się w Sopocie i prowadzi przez Wieżycę (najwyższy szczyt niżu środkowoeuropejskiego, 329 m n.p.m.) z wieżą widokową, przez Gołubie, Bącką Hutę, kończąc się w Sierakowicach. Cała trasa liczy 121,5 km, a odcinek w Kaszubskim Parku Krajobrazowym ma ~60 km. Na szlaku znajduje się Centrum Edukacji i Promocji Regionu w Szymbarku.',
    stats: [
      { val: '121,5 km', key: 'Długość' },
      { val: 'Trudny', key: 'Trudność' },
      { val: '7–10 dni', key: 'Szacunkowy czas' },
    ],
    tags: ['Wieżyca 329 m', 'Sopot', 'Szymbark', 'Gołubie', 'KPK'],
  },
  'trail-3': {
    img: 'assets/szlak_kaszubski.png',
    badge: 'Szlak pieszy · Niebieski',
    title: 'Szlak Kartuski',
    subtitle: 'Trójmiasto → Kartuzy',
    desc: 'Malowniczy szlak łączący Trójmiasto z Kartuzami wzdłuż rzeki Raduni. Dostępny z aglomeracji miejskiej. Idealna propozycja na weekendowy wypad z rodziny lub dla osób, które chcą stopniowo odkrywać Kaszuby. Trasa prowadzi przez malownicze doliny i lasy Pojezierza Kaszubskiego.',
    stats: [
      { val: 'Trójmiasto–Kartuzy', key: 'Trasa' },
      { val: 'Łatwy', key: 'Trudność' },
      { val: '1–2 dni', key: 'Czas' },
    ],
    tags: ['Rzeka Radunia', 'Trójmiasto', 'Kartuzy', 'Weekend'],
  },
  'trail-4': {
    img: 'assets/jezioro_wdzydze.png',
    badge: 'Szlak pieszy · Zielony',
    title: 'Szlak Jezior Raduńskich',
    subtitle: 'Kółko Raduńskie',
    desc: 'Szlak biegnie wzdłuż Jeziora Raduńskiego Dolnego (737 ha) i Górnego (392 ha), tworząc tzw. "Kółko Raduńskie" – idealne miejsce do żeglarstwa i turystyki. Trasa (ok. 40 km) może być podzielona na krótsze odcinki, dzięki czemu jest dostępna dla całych rodzin.',
    stats: [
      { val: '~40 km', key: 'Długość' },
      { val: 'Łatwy', key: 'Trudność' },
      { val: '1–2 dni', key: 'Czas' },
    ],
    tags: ['J. Raduńskie Dolne', 'J. Raduńskie Górne', 'Kółko Raduńskie', 'Rodzinny'],
  },
  'trail-5': {
    img: 'assets/kamienne_kregi.png',
    badge: 'Szlak pieszy · Żółty',
    title: 'Szlak Kamiennych Kręgów',
    subtitle: 'Węsiory · Odry',
    desc: 'Niezwykły szlak prowadzący przez tajemnicze kamienne kręgi – cmentarzyska Gotów i Gepidów z I–III w. n.e. w Węsiorach i Odrach. Te prehistoryczne pomniki przyrody i historii bywają porównywane do kaszubskiego Stonehenge. Otoczone lasem, tworzą mistyczną, niepowtarzalną atmosferę.',
    stats: [
      { val: '~20 km', key: 'Długość' },
      { val: 'Łatwy', key: 'Trudność' },
      { val: '1 dzień', key: 'Czas' },
    ],
    tags: ['Węsiory', 'Odry', 'Prehistoria', 'Tajemnice', 'Historia Gotów'],
  },
  'trail-6': {
    img: 'assets/jezioro_wdzydze.png',
    badge: 'Szlak pieszy · Zielony',
    title: 'Szlak Wdzydzki',
    subtitle: 'Wdzydzki Park Krajobrazowy',
    desc: 'Pętla przez Wdzydzki Park Krajobrazowy wokół największego kaszubskiego jeziora – Wdzydze (1417 ha). Obejmuje jeziora Jelenie, Radolne i Gołuń. Szlak jest bogaty w flory i fauny parku. Przy jeziorach wiele miejsc do odpoczynku, kąpieli i wypożyczenia kajaków.',
    stats: [
      { val: '~48 km', key: 'Długość pętli' },
      { val: 'Średni', key: 'Trudność' },
      { val: '2–3 dni', key: 'Czas' },
    ],
    tags: ['J. Wdzydze', 'Park Krajobrazowy', 'Kajaki', 'Żeglarstwo'],
  },
  // CYCLING
  'bike-1': {
    img: 'assets/kaszuby_hero.png',
    badge: 'Szlak rowerowy · Niebieski',
    title: 'Pierścień Zatoki Puckiej',
    subtitle: 'Gdynia → Hel',
    desc: 'Około 76-kilometrowy szlak rowerowy wzdłuż brzegu Zatoki Puckiej. Prowadzi przez Swarzewo, Puck, Władysławowo, Chałupy, Kuźnicę, Jastarnię, Juratę aż do Helu. Trasa biegnąca głównie wydzielonymi ścieżkami i asfaltem. Ze względu na długość wiele osób dzieli wyprawę na dwa dni.',
    stats: [
      { val: '~76 km', key: 'Długość' },
      { val: 'Średni', key: 'Trudność' },
      { val: '1–2 dni', key: 'Czas' },
    ],
    tags: ['Hel', 'Zatoka Pucka', 'Morze', 'Asfalt', 'Ścieżki'],
  },
  'bike-2': {
    img: 'assets/szlak_kaszubski.png',
    badge: 'Szlak rowerowy · System tras',
    title: 'Kaszubska Marszruta',
    subtitle: 'Bory Tucholskie',
    desc: 'System czterech szlaków rowerowych w Borach Tucholskich, odpowiedni nawet dla rodzin z małymi dziećmi. Trasy zachwycają widokami na jeziora i lasy, a dzika zwierzyna jest tu na porządku dziennym. Dobre oznakowanie i infrastruktura turystyczna.',
    stats: [
      { val: '4 trasy', key: 'Liczba szlaków' },
      { val: 'Łatwy–Średni', key: 'Trudność' },
      { val: 'Rodzinny', key: 'Dla kogo' },
    ],
    tags: ['Bory Tucholskie', 'Rodziny', 'Natura', 'Dzika zwierzyna'],
  },
  'bike-3': {
    img: 'assets/jezioro_wdzydze.png',
    badge: 'Szlak rowerowy · Czerwony',
    title: 'Dookoła Jezior Wdzydzkich',
    subtitle: 'Pętla przez WPK',
    desc: 'Rowerowa pętla (48,5 km) wokół kompleksu Jezior Wdzydzkich. Szlak prowadzi przez Wdzydzki Park Krajobrazowy, umożliwiając obserwację "Kaszubskiego Morza" z różnych perspektyw. Wzdłuż trasy skansen, wieża widokowa oraz miejsca do kąpieli.',
    stats: [
      { val: '48,5 km', key: 'Długość' },
      { val: 'Średni', key: 'Trudność' },
      { val: '1 dzień', key: 'Czas' },
    ],
    tags: ['J. Wdzydze', 'Pętla', 'Park Krajobrazowy', 'Widoki'],
  },
  'bike-4': {
    img: 'assets/szlak_kaszubski.png',
    badge: 'Szlak rowerowy · Żółty',
    title: 'Szlak Geologiczny',
    subtitle: 'Wdzydze–Karsin–Wiele',
    desc: 'Trasa (30 km) przebiegająca przez Wdzydze Tucholskie → Cisewie → Bąk → Karsin → Wiele → Przytarnia → Kliczkowy → Borsk. Prezentuje geologię polodowcowego krajobrazu Kaszub. Ciekawa zarówno dla miłośników przyrody, jak i dla rowerzystów szukających spokojnych tras.',
    stats: [
      { val: '30 km', key: 'Długość' },
      { val: 'Łatwy', key: 'Trudność' },
      { val: '4–5 godzin', key: 'Czas' },
    ],
    tags: ['Geologia', 'Edukacja', 'Wiele', 'Karsin'],
  },
  'bike-5': {
    img: 'assets/kaszuby_hero.png',
    badge: 'Szlak rowerowy · Historyczny',
    title: 'Szlak Józefa Wybickiego',
    subtitle: 'Będomin → Sikorzyno',
    desc: 'Historyczna trasa rowerowa między Będominem – miejscem urodzenia Józefa Wybickiego, autora "Mazurka Dąbrowskiego" – a Sikorzynem. Łączy piękną kaszubską przyrodę z ważnymi miejscami historii narodowej.',
    stats: [
      { val: '~25 km', key: 'Długość' },
      { val: 'Łatwy', key: 'Trudność' },
      { val: 'Półdniowy', key: 'Czas' },
    ],
    tags: ['Będomin', 'Hymn Polski', 'Historia', 'Sikorzyno'],
  },
  'bike-6': {
    img: 'assets/szlak_kaszubski.png',
    badge: 'Szlak rowerowy · Niebieski',
    title: 'Błękitna Trasa Rowerowa',
    subtitle: 'Zatoka Gdańska · KPK',
    desc: 'Trasa (36,5 km) wzdłuż Zatoki Gdańskiej i w okolicach Kaszubskiego Parku Krajobrazowego. Wydzielone ścieżki rowerowe, minimalne przewyższenia – idealna dla dzieci i rodzin. Panoramiczne widoki na morze i wzgórza kaszubskie.',
    stats: [
      { val: '36,5 km', key: 'Długość' },
      { val: 'Łatwy', key: 'Trudność' },
      { val: 'Semifullday', key: 'Czas' },
    ],
    tags: ['Zatoka Gdańska', 'KPK', 'Ścieżka rowerowa', 'Dzieci'],
  },
  // LAKES
  'lake-wdzydze': {
    img: 'assets/jezioro_wdzydze.png',
    badge: 'Jezioro · Największe na Kaszubach',
    title: 'Jezioro Wdzydze',
    subtitle: '"Kaszubskie Morze"',
    desc: 'Największe jezioro Kaszub i Pojezierza Kaszubskiego – szóste co do głębokości jezioro w Polsce (max. 68–70 m). Ma charakterystyczny kształt krzyża i składa się z pięciu połączonych akwenów. Na jeziorze kilka naturalnych wysp, w tym Ostrów Wielki – jedna z największych wysp jeziornych w kraju. Doskonałe warunki do żeglarstwa i kajakarstwa. Nad brzegiem skansen – najstarszy w Polsce.',
    stats: [
      { val: '1417 ha', key: 'Powierzchnia' },
      { val: '68 m', key: 'Max głębokość' },
      { val: '6. w Polsce', key: 'Ranking głębokości' },
      { val: '5 akwenów', key: 'Budowa' },
    ],
    tags: ['Żeglarstwo', 'Kajaki', 'Wędkarstwo', 'Kąpiel', 'Skansen', 'WPK'],
  },
  'lake-zarnowieckie': {
    img: 'assets/kaszuby_hero.png',
    badge: 'Jezioro · Północne Kaszuby',
    title: 'Jezioro Żarnowieckie',
    subtitle: 'Jedno z najczystszych jezior Kaszub',
    desc: 'Położone w północnej części Kaszub, jezioro Żarnowieckie uchodzi za jedno z najczystszych w regionie. Powierzchnia ok. 1430 ha przy głębokości nie przekraczającej 20 m. Doskonałe warunki do żeglarstwa, windsurfingu i sportów wodnych. W okolicy szlaki rowerowe i piesze.',
    stats: [
      { val: '1430 ha', key: 'Powierzchnia' },
      { val: 'max 20 m', key: 'Głębokość' },
      { val: 'I klasa', key: 'Czystość wody' },
    ],
    tags: ['Żeglarstwo', 'Windsurfing', 'Kite', 'Czyste wody'],
  },
  'lake-charzykowskie': {
    img: 'assets/jezioro_wdzydze.png',
    badge: 'Jezioro · Bory Tucholskie',
    title: 'Jezioro Charzykowskie',
    subtitle: 'Centrum żeglarskie Kaszub',
    desc: 'Jedno z największych jezior Kaszub (ponad 1300 ha), leżące w malowniczych Borach Tucholskich. Maksymalna głębokość 30,5 m. Połączone cieśniną z Jeziorem Karsińskim (679 ha). Popularny ośrodek żeglarski z rozbudowaną infrastrukturą: mariny, campingi, restauracje.',
    stats: [
      { val: '1300 ha', key: 'Powierzchnia' },
      { val: '30,5 m', key: 'Max głębokość' },
      { val: 'Bory Tucholskie', key: 'Lokalizacja' },
    ],
    tags: ['Żeglarstwo', 'Kajaki', 'Camping', 'Marina'],
  },
  'lake-radunskie': {
    img: 'assets/kaszuby_hero.png',
    badge: 'Jezioro · Kółko Raduńskie',
    title: 'Jezioro Raduńskie Dolne',
    subtitle: 'Część "Kółka Raduńskiego"',
    desc: 'Wchodzi w skład układu połączonych jezior zwanego "Kółkiem Raduńskim" – razem z Jeziorem Raduńskim Górnym (392 ha) stanowią jeden z najpopularniejszych rejonów żeglarskich Kaszub. Powierzchnia 737 ha. Okolica tętni życiem turystycznym całe lato.',
    stats: [
      { val: '737 ha', key: 'Powierzchnia' },
      { val: 'Kółko Raduńskie', key: 'Układ' },
    ],
    tags: ['Żeglarstwo', 'Wioślarstwo', 'Regatty', 'Wakacje'],
  },
  'lake-karsinske': {
    img: 'assets/jezioro_wdzydze.png',
    badge: 'Jezioro · Bory Tucholskie',
    title: 'Jezioro Karsińskie',
    subtitle: 'Sąsiad Charzykowskiego',
    desc: 'Powierzchnia 679 ha, maksymalna głębokość 27 m. Sąsiaduje z Jeziorem Charzykowskim, z którym jest połączone. Doskonałe miejsca do kąpieli z piaszczystymi plażami i wędkarstwa. Spokojna strona Borów Tucholskich.',
    stats: [
      { val: '679 ha', key: 'Powierzchnia' },
      { val: '27 m', key: 'Max głębokość' },
    ],
    tags: ['Kąpiel', 'Wędkarstwo', 'Plaże', 'Bory Tucholskie'],
  },
  'lake-ostrzyckie': {
    img: 'assets/kaszuby_hero.png',
    badge: 'Jezioro · KPK',
    title: 'Jezioro Ostrzyckie',
    subtitle: 'Punkt odpoczynku na Szlaku Kaszubskim',
    desc: 'Malownicze jezioro w sercu Kaszubskiego Parku Krajobrazowego. Jedno z punktów widokowych na Szlaku Kaszubskim. Okolica obejmuje wiele rezerwatów przyrody i cennych siedlisk. Doskonałe miejsce do spokojnego odpoczynku.',
    stats: [
      { val: '~200 ha', key: 'Powierzchnia' },
      { val: 'KPK', key: 'Park' },
    ],
    tags: ['Szlak Kaszubski', 'Przyroda', 'Rezerwaty', 'Spokój'],
  },
  'lake-mausz': {
    img: 'assets/jezioro_wdzydze.png',
    badge: 'Jezioro · Najczystsze',
    title: 'Jezioro Mausz',
    subtitle: 'I klasa czystości wody',
    desc: 'Uważane za jedno z najczystszych jezior w całej Polsce, z wodą klasy I. Wyróżnia się wyjątkową przezroczystością toni i malowniczym leśnym otoczeniem. Raj dla nurków i miłośników kąpielisk z krystalicznie czystą wodą.',
    stats: [
      { val: '>300 ha', key: 'Powierzchnia' },
      { val: 'I klasa', key: 'Czystość wody' },
    ],
    tags: ['Kąpiel', 'Nurkowanie', 'Wędkarstwo', 'Czystość'],
  },
  'lake-lebsko': {
    img: 'assets/kaszuby_hero.png',
    badge: 'Jezioro · Słowiński PN',
    title: 'Jezioro Łebsko',
    subtitle: 'Największe polskie jezioro przybrzeżne',
    desc: 'Trzecie co do powierzchni jezioro w Polsce (po Śniardwach i Mamrach). Leży na terenie Słowińskiego Parku Narodowego, wpisanego na listę Rezerwatów Biosfery UNESCO. Słynie z ruchomych wydm Czołpińskiej i Łąckiej oraz bogatej awifauny.',
    stats: [
      { val: '7055 ha', key: 'Powierzchnia' },
      { val: '3. w Polsce', key: 'Ranking' },
      { val: 'UNESCO', key: 'Status' },
    ],
    tags: ['Słowiński PN', 'Wydmy', 'UNESCO', 'Ornitologia', 'Łeba'],
  },
  // PLACES
  'place-skansen': {
    img: 'assets/skansen_wdzydze.png',
    badge: 'Skansen · Najstarszy w Polsce',
    title: 'Kaszubski Park Etnograficzny we Wdzydzach',
    subtitle: 'Wdzydze Kiszewskie · zał. 1906',
    desc: 'Najstarszy skansen w Polsce, założony przez Teodorę i Izydora Gulgowskich. Prezentuje ponad 50 obiektów architektury ludowej Kaszub i Kociewia z okresu XVII–XIX wieku: chałupy, wiatraki, kuźnie, karczmę i kościół. Obowiązkowy punkt programu każdej wycieczki na Kaszuby. Rezerwat przyrody wokół parku.',
    stats: [
      { val: 'od 1906 r.', key: 'Historia' },
      { val: '50+ obiektów', key: 'Eksponaty' },
      { val: '~20 zł', key: 'Bilet wstępu' },
      { val: '2–4 godz.', key: 'Czas zwiedzania' },
    ],
    tags: ['Skansen', 'Etnografia', 'Historia', 'Kaszubski folklor'],
  },
  'place-kregi': {
    img: 'assets/kamienne_kregi.png',
    badge: 'Prehistoria · I–III w. n.e.',
    title: 'Kamienne Kręgi w Węsiorach',
    subtitle: 'Gm. Sulęczyno · Cmentarzysko Gotyckie',
    desc: 'Tajemnicze cmentarzysko Gotów i Gepidów z I–III w. n.e. Kilkanaście kamiennych kręgów (pierścieni z głazów) i kurhanów ukrytych w lesie. Porównywane do kaszubskiego Stonehenge i uznawane przez niektórych za miejsca mocy. Podobne kręgi można zobaczyć w Odrach (gm. Czersk). Wstęp wolny, łatwy dojazd.',
    stats: [
      { val: 'I–III w. n.e.', key: 'Wiek' },
      { val: 'Germanie', key: 'Twórcy' },
      { val: 'Wolny', key: 'Wstęp' },
      { val: '1–2 godz.', key: 'Czas' },
    ],
    tags: ['Prehistoria', 'Gotowie', 'Historia', 'Tajemnicze miejsca', 'Wstęp wolny'],
  },
  'place-wiezyce': {
    img: 'assets/wiezyce_tower.png',
    badge: 'Punkt widokowy · 329 m n.p.m.',
    title: 'Wieżyca – najwyższy punkt Niżu Środkowoeuropejskiego',
    subtitle: 'Szymbark k. Kartuz',
    desc: 'Wieżyca (329 m n.p.m.) to najwyższe wzniesienie na Niżu Środkowoeuropejskim i symbol Kaszub. Na szczycie stoi drewniana Wieża Widokowa im. Jana Pawła II, z której w pogodny dzień widać Zatokę Gdańską, a nawet Trójmiasto. Na szlaku na wieżę (ok. 700 m z parkingu) liczne tablice edukacyjne o geologii i przyrodzie.',
    stats: [
      { val: '329 m n.p.m.', key: 'Wysokość' },
      { val: 'Niż Środkowoeuropejski', key: 'Rekord' },
      { val: 'Wolny', key: 'Wstęp' },
    ],
    tags: ['Widok', 'Wieża', 'Rekord', 'Natura', 'Punkt widokowy'],
  },
  'place-kartuzy': {
    img: 'assets/skansen_wdzydze.png',
    badge: 'Zabytek · XIV wiek',
    title: 'Kolegiata Kartuska w Kartuzach',
    subtitle: 'Kartuzy · Dawny klasztor Kartuzów',
    desc: 'XIV-wieczny kompleks klasztorny Kartuzów – jeden z najważniejszych zabytków Kaszub. Kościół wyróżnia się unikalnym dachem w kształcie wieka trumny, symbolizującym zakonną medytację nad śmiercią. W środku cenne wyposażenie i epitafia fundatorów. Muzeum Kaszubskie w pobliżu prezentuje historię i folklor regionu.',
    stats: [
      { val: 'XIV wiek', key: 'Data budowy' },
      { val: 'Rejestr zabytków', key: 'Status' },
      { val: 'Wolny', key: 'Wstęp' },
    ],
    tags: ['Kartuzy', 'Klasztor', 'Zabytek', 'Architektura', 'Historia'],
  },
  'place-bedomin': {
    img: 'assets/kaszuby_hero.png',
    badge: 'Muzeum · Patriotyczne',
    title: 'Muzeum Hymnu Narodowego w Będominie',
    subtitle: 'Będomin · Miejsce urodzenia Józefa Wybickiego',
    desc: 'W Będominie urodził się Józef Wybicki – autor słów "Mazurka Dąbrowskiego", polskiego hymnu narodowego. Muzeum mieści się w odrestaurowanym dworze i prezentuje historię hymnu, życie Wybickiego oraz kontekst kształtowania się polskiej tożsamości narodowej w XVIII–XIX wieku.',
    stats: [
      { val: '1747 r.', key: 'Narodziny Wybickiego' },
      { val: '~15 zł', key: 'Bilet wstępu' },
      { val: '1–2 godz.', key: 'Czas zwiedzania' },
    ],
    tags: ['Hymn Polski', 'Józef Wybicki', 'Muzeum', 'Historia', 'Patriotyzm'],
  },
  'place-bytow': {
    img: 'assets/skansen_wdzydze.png',
    badge: 'Zamek · XIV wiek',
    title: 'Zamek Krzyżacki w Bytowie',
    subtitle: 'Bytów · Twierdza z XIV w.',
    desc: 'Dawna twierdza Zakonu Krzyżackiego, zbudowana w XIV wieku. Jedna z najlepiej zachowanych warowni krzyżackich w Polsce. Mieści muzeum regionalne z ekspozycją historyczną. Wokół zamku rekreacyjne tereny i centrum miasta Bytów.',
    stats: [
      { val: 'XIV wiek', key: 'Data budowy' },
      { val: '~18 zł', key: 'Bilet wstępu' },
      { val: '2–3 godz.', key: 'Czas zwiedzania' },
    ],
    tags: ['Zamek', 'Krzyżacy', 'Historia', 'Muzeum', 'Bytów'],
  },
  'place-szymbark': {
    img: 'assets/skansen_wdzydze.png',
    badge: 'Centrum edukacji',
    title: 'Centrum Edukacji i Promocji w Szymbarku',
    subtitle: 'Szymbark · Unikatowe atrakcje',
    desc: 'Kompleks atrakcji turystycznych z unikalną "Domem do Góry Nogami" (można w nim stanąć na suficie!), "Domem Sybiraka" opowiadającym o historii Sybiraków oraz Najdłuższą Deską Świata (36,83 m). Skansen z historycznymi architekturami i bunkier z II wojnie światowej.',
    stats: [
      { val: '~25 zł', key: 'Bilet wstępu' },
      { val: '2–4 godz.', key: 'Czas zwiedzania' },
      { val: '36,83 m', key: 'Najdłuższa deska' },
    ],
    tags: ['Dom do góry nogami', 'Sybir', 'Rekordy', 'Edukacja', 'Rozrywka'],
  },
  'place-slowinski': {
    img: 'assets/kaszuby_hero.png',
    badge: 'Park Narodowy · UNESCO',
    title: 'Słowiński Park Narodowy',
    subtitle: 'Łeba / Smołdzino · Ruchome wydmy',
    desc: 'Jeden z najbardziej ulubionych polskich parków narodowych. Słynący z ruchomych wydm (Czołpińskiej i Łąckiej), które przemieszczają się nawet kilkanaście metrów rocznie. Dzikie plaże, jeziora Łebsko i Gardno, bogata awifauna. Wpisany na listę Rezerwatów Biosfery UNESCO.',
    stats: [
      { val: '18619 ha', key: 'Obszar parku' },
      { val: 'UNESCO', key: 'Status' },
      { val: '~23 zł', key: 'Bilet wstępu' },
      { val: 'Cały dzień', key: 'Czas wizyty' },
    ],
    tags: ['Wydmy', 'UNESCO', 'Bałtyk', 'Ornitologia', 'J. Łebsko'],
  },
  'place-kalwaria': {
    img: 'assets/skansen_wdzydze.png',
    badge: 'Sanktuarium · XVII w.',
    title: 'Kalwaria Wejherowska',
    subtitle: 'Wejherowo · "Kaszubska Jerozolima"',
    desc: 'XVII-wieczny kompleks 26 kaplic i kościołów rozsianych po lasach i wzgórzach. Znana jako "Kaszubska Jerozolima", jest jednym z największych i najważniejszych polskich miejsc pielgrzymek. Cudowny spacer przez leśne alejki. Wpisana na Pomnik Historii.',
    stats: [
      { val: 'od XVII w.', key: 'Historia' },
      { val: '26 kaplic', key: 'Obiekty' },
      { val: 'Wolny', key: 'Wstęp' },
    ],
    tags: ['Pielgrzymki', 'Sanktuarium', 'Las', 'Wejherowo', 'Historia'],
  },
  'place-lasy-mirachowskie': {
    img: 'assets/szlak_kaszubski.png',
    badge: 'Rezerwat przyrody',
    title: 'Lasy Mirachowskie',
    subtitle: 'Mirachowo · Kaszubski Park Krajobrazowy',
    desc: 'Jeden z największych kompleksów leśnych na Kaszubach. Obejmuje kilka rezerwatów przyrody: "Szczelina Lechicka" (unikalna forma skalna) i "Lubygość". Idealne miejsce do pieszych wędrówek, obserwacji ptaków i grzybobrania. Na terenie Kaszubskiego Parku Krajobrazowego.',
    stats: [
      { val: 'KPK', key: 'Park' },
      { val: '2+ rezerwaty', key: 'Ochrona' },
      { val: 'Wolny', key: 'Wstęp' },
    ],
    tags: ['Lasy', 'Rezerwat', 'Grzyby', 'Ptaki', 'KPK'],
  },
  'place-muzeum-akordeonu': {
    img: 'assets/skansen_wdzydze.png',
    badge: 'Muzeum · Unikatowe',
    title: 'Muzeum Akordeonu w Kościerzynie',
    subtitle: 'Kościerzyna · "Serce Kaszub"',
    desc: 'Jedno z niewielu polskich muzeów poświęconych historii akordeonu – instrumentu silnie związanego z kaszubską kulturą muzyczną. Unikalna ekspozycja instrumentów z całego świata. Kościerzyna, zwana "sercem Kaszub", oferuje też inne atrakcje: muzeum kolejnictwa i stare miasto.',
    stats: [
      { val: '~12 zł', key: 'Bilet wstępu' },
      { val: '1–2 godz.', key: 'Czas zwiedzania' },
      { val: 'Kościerzyna', key: 'Lokalizacja' },
    ],
    tags: ['Akordeon', 'Muzyka', 'Muzeum', 'Kościerzyna', 'Unikatowe'],
  },
  'place-wdzydzki-park': {
    img: 'assets/jezioro_wdzydze.png',
    badge: 'Park Krajobrazowy',
    title: 'Wdzydzki Park Krajobrazowy',
    subtitle: 'Wdzydze Tucholskie',
    desc: 'Obszar chroniony obejmujący kompleks Jezior Wdzydzkich (Wdzydze, Jelenie, Radolne, Gołuń) o łącznej powierzchni ponad 40 000 ha. Szlaki piesze i rowerowe, ścieżki edukacyjne, kajaki do wypożyczenia. Bogata flora i fauna – obszar Natura 2000.',
    stats: [
      { val: '>40 000 ha', key: 'Obszar' },
      { val: 'Natura 2000', key: 'Status UE' },
      { val: 'Wolny', key: 'Wstęp' },
    ],
    tags: ['Park Krajobrazowy', 'Natura 2000', 'Kajaki', 'Ścieżki', 'J. Wdzydze'],
  },
  'lake-wielewskie': {
    img: 'assets/jezioro_wielewskie.png',
    badge: 'Jezioro · I klasa czystości',
    title: 'Jezioro Wielewskie',
    subtitle: 'Wiele, gm. Karsin · Wdzydzki Park Krajobrazowy',
    desc: 'Jezioro Wielewskie to wyjątkowo czyste jezioro morenowe na Kaszubach, leżące na południowym skraju Wdzydzkiego Parku Krajobrazowego. Nad jego północno-wschodnim brzegiem leży wieś Wiele. Woda zaliczana jest do I klasy czystości, a przezroczystość sięga aż 50 metrów – czyni to jezioro jednym z ulubionych miejsc nurków w Polsce. Na plaży w Wielu działa strzeżone kąpielisko (10:00–18:00) z piaszczystym dnem, placem zabaw i boiskiem do piłki plażowej. W wodach jeziernych żyją szczupaki, okonie, leszcze, liny i płocie. Zimą przy silnych mrozach popularne jest wędkarstwo podlodowe, łyżwiarstwo i hokej.',
    stats: [
      { val: '155 ha', key: 'Powierzchnia' },
      { val: '40,5 m', key: 'Głębokość max' },
      { val: '11,8 m', key: 'Głębokość śred.' },
      { val: 'I klasa', key: 'Czystość wody' },
      { val: '~50 m', key: 'Przezroczystość' },
      { val: 'WPK', key: 'Park krajobrazowy' },
    ],
    tags: ['I klasa czystości', 'Nurkowanie', 'Kąpielisko', 'Wędkarstwo', 'Kajaki', 'WPK'],
  },
  // KAYAK TRAILS
  'kayak-1': {
    img: 'assets/jezioro_wielewskie.png',
    badge: 'Kajaki · Popularny',
    title: 'Kółko Raduńskie i Radunia',
    subtitle: 'Przez "Kaszubskie Morze"',
    desc: 'Najpopularniejszy szlak kajakowy Kaszub, ciągnący się przez połączone jeziora Kółka Raduńskiego. Gwarantuje piękne widoki i spokojną, relaksującą podróż. W dolnym odcinku rzeka Radunia oferuje bardziej dynamiczny spływ o charakterze podgórskim.',
    stats: [
      { val: '~40 km', key: 'Długość jeziorna' },
      { val: 'Łatwy', key: 'Trudność' },
      { val: '2-3 dni', key: 'Czas spływu' },
    ],
    tags: ['Kajaki', 'Kółko Raduńskie', 'Jeziora', 'Rzeka Radunia']
  },
  'kayak-2': {
    img: 'assets/kaszuby_hero.png',
    badge: 'Kajaki · Przygodowy',
    title: 'Spływ rzeką Słupią',
    subtitle: 'Bory Tucholskie → Bałtyk',
    desc: 'Zróżnicowany szlak o dużym spadku wód, co nadaje mu momentami charakter rzeki górskiej. Prowadzi przez urokliwy Park Krajobrazowy Dolina Słupi. Ze względu na zwalone drzewa i bystrza, wymaga doświadczenia w kajakarstwie.',
    stats: [
      { val: '~133 km', key: 'Długość całkowita' },
      { val: 'Średni / Trudny', key: 'Trudność' },
      { val: '5-7 dni', key: 'Czas spływu' },
    ],
    tags: ['Rzeka Słupia', 'Park Krajobrazowy', 'Przygoda', 'Doświadczeni']
  },
  'kayak-3': {
    img: 'assets/jezioro_wdzydze.png',
    badge: 'Kajaki · Historyczny',
    title: 'Spływ do Bałtyku Piaśnicą',
    subtitle: 'Jezioro Żarnowieckie → Dębki',
    desc: 'Bardzo malowniczy i niezwykle spokojny szlak, często nazywany "Spływem do morza". Rzeka leniwie meandruje przez rezerwat "Piaśnickie Łąki" prosto do Bałtyku. W sam raz na wyjazd z rodziną.',
    stats: [
      { val: '~7 km', key: 'Długość' },
      { val: 'Bardzo łatwy', key: 'Trudność' },
      { val: '2-3 godziny', key: 'Czas spływu' },
    ],
    tags: ['Piaśnica', 'Jezioro Żarnowieckie', 'Morze Bałtyckie', 'Rodzinny']
  },
  'kayak-4': {
    img: 'assets/szlak_kaszubski.png',
    badge: 'Kajaki · Malowniczy',
    title: 'Szlak Kajakowy Wieprza',
    subtitle: 'Dzika i naturalna',
    desc: 'Rzeka o bardzo zmiennym charakterze – od bystrych odcinków po leniwie płynące wody. Miejscami koryto zachowało zupełnie dziki charakter. Świetna propozycja dla poszukujących wyzwań i kontaktu z niezmienioną przez człowieka naturą.',
    stats: [
      { val: '~112 km', key: 'Długość całkowita' },
      { val: 'Zmienny (Średni)', key: 'Trudność' },
      { val: '4-6 dni', key: 'Czas spływu' },
    ],
    tags: ['Wieprza', 'Dzika rzeka', 'Natura', 'Krajobrazy']
  },
  // RESTAURANTS
  'rest-1': {
    img: 'assets/restauracja_mulk_checz.png',
    badge: 'Restauracja · Kaszubska',
    title: 'Mùlk Chëcz Kaszëbskô',
    subtitle: 'Tradycja i Smak',
    desc: 'Prawdziwie kaszubska gospoda, w której poczujesz niezapomniany klimat regionu. Serwowane są tu regionalne potrawy przygotowywane według tradycyjnych przepisów. Na szczególną uwagę zasługują potrawy z gęsiny, ryby oraz domowe przetwory.',
    stats: [
      { val: 'Regionalna', key: 'Kuchnia' },
      { val: '$$', key: 'Cena' },
    ],
    tags: ['Tradycyjna', 'Kaszubska', 'Gęsina', 'Klimatyczna']
  },
  'rest-2': {
    img: 'assets/restauracja_nordowi_mol.png',
    badge: 'Restauracja · Słynna',
    title: 'Nordowi Mól',
    subtitle: 'Celina i Jacek',
    desc: 'Słynna karczma łącząca w sobie najlepsze cechy kuchni kaszubskiej i staropolskiej. Miejsce jest pełne uroku, urządzone w regionalnym stylu i cechuje się fantastyczną, gościnną atmosferą. Zawsze świeże i lokalne składniki.',
    stats: [
      { val: 'Kaszubska/Polska', key: 'Kuchnia' },
      { val: '$$ - $$$', key: 'Cena' },
    ],
    tags: ['Staropolska', 'Lokalne składniki', 'Tradycja', 'Urokliwa']
  },
  'rest-3': {
    img: 'assets/restauracja_pod_syty_gesia.png',
    badge: 'Restauracja · Gęsina',
    title: 'Restauracja "Pod Sytą Gęsią"',
    subtitle: 'Bogactwo Smaków',
    desc: 'Jeżeli szukasz doskonałej kaszubskiej gęsiny – to jest to miejsce. Restauracja specjalizuje się w daniach opartych na gęsinie, przyrządzanej na dziesiątki autorskich sposobów i łączonej z sezonowymi owocami oraz ziołami.',
    stats: [
      { val: 'Specjalności Regionalne', key: 'Kuchnia' },
      { val: '$$$', key: 'Cena' },
    ],
    tags: ['Gęsina', 'Autorskie dania', 'Elegancka', 'Sezonowe menu']
  },
  'rest-4': {
    img: 'assets/restauracja_karczma_viking.png',
    badge: 'Karczma · Unikatowa',
    title: 'Karczma Viking',
    subtitle: 'Niezwykły klimat',
    desc: 'Wspaniałe miejsce, które architekturą wystrojem nawiązuje do skandynawskich czasów. Oprócz tradycyjnych potraw kaszubskich skosztować tu można wybornych pieczeni i dań z ognia. Wieczorem lokal urzeka specyficznym klimatem.',
    stats: [
      { val: 'Mięsna / Regionalna', key: 'Kuchnia' },
      { val: '$$', key: 'Cena' },
    ],
    tags: ['Klimatyczna', 'Z ognia', 'Pieczenie', 'Ciekawy wystrój']
  },
  'rest-5': {
    img: 'assets/restauracja_lesny_dwor.png',
    badge: 'Restauracja · Fine Dining',
    title: 'Restauracja Biôłi Trus (Leśny Dwór)',
    subtitle: 'Nowoczesna Kaszubszczyzna',
    desc: 'Fine-diningowa perła na kulinarnym szlaku Kaszub. Niezwykłe menu degustacyjne pokazuje nowoczesne oblicze lokalnych produktów i smaków. Wspaniałe położenie i eleganckie, nowoczesne wnętrze dodają posiłkowi niepowtarzalnej oprawy.',
    stats: [
      { val: 'Fine Dining', key: 'Kuchnia' },
      { val: '$$$$', key: 'Cena' },
    ],
    tags: ['Fine Dining', 'Nowoczesna', 'Menu Degustacyjne', 'Ekskluzywna']
  },
  'rest-6': {
    img: 'assets/restauracja_palac_lebunia.png',
    badge: 'Pałac · Klasyczna',
    title: 'Restauracja Pałac Łebunia',
    subtitle: 'Pałacowa elegancja',
    desc: 'Miejsce o wspaniałej historii i najwyższym poziomie usług kulinarnych. Dania nawiązujące do czasów świetności pałacu, skomponowane przez doświadczonych szefów kuchni. Wyjątkowe otoczenie zachęca do długiego relaksu i delektowania się każdą chwilą.',
    stats: [
      { val: 'Polska / Autorska', key: 'Kuchnia' },
      { val: '$$$', key: 'Cena' },
    ],
    tags: ['Pałac', 'Elegancka', 'Autorska', 'Historia']
  },
  'rest-7': {
    img: 'assets/restauracja_grzybowski_mlyn.png',
    badge: 'Karczma · Nad rzeką',
    title: 'Karczma Grzybowski Młyn',
    subtitle: 'Szum wody i las',
    desc: 'Bajecznie ulokowana karczma w starym młynie, otoczona lasem. Daje możliwość zakosztowania prawdziwej kaszubskiej kuchni ze wspaniałym widokiem. Idealne stoisko pit-stopowe na wycieczce rowerowej lub samochodowej objazdowce Kaszub.',
    stats: [
      { val: 'Kaszubska', key: 'Kuchnia' },
      { val: '$$', key: 'Cena' },
    ],
    tags: ['Młyn', 'Przyroda', 'Tradycja', 'Widokowa']
  },
  'rest-8': {
    img: 'assets/restauracja_chata_kaszubska.png',
    badge: 'Gospoda · Sielanka',
    title: 'Gospoda Kaszubska Chata',
    subtitle: 'Domowe jedzenie',
    desc: 'Cudowne, ciepłe wnętrze przypominające wiejską chatę z duszą. Specjalnością gospody są ręcznie lepione pierogi w wielu wariacjach, wyśmienite zupy oparte na domowych bulionach i dania z grzybów prosto z kaszubskiego lasu.',
    stats: [
      { val: 'Tradycyjna', key: 'Kuchnia' },
      { val: '$ - $$', key: 'Cena' },
    ],
    tags: ['Sielanka', 'Pierogi', 'Grzyby', 'Domowa']
  },
  'rest-9': {
    img: 'assets/restauracja_rybarnia.png',
    badge: 'Smażalnia / Restauracja',
    title: 'Ryby nad Jeziorem',
    subtitle: 'Świeże smaki',
    desc: 'Genialne miejsce dla pasjonatów ryb i dobrego jedzenia. Smażalnia oraz restauracja leżąca bezpośrednio przy jeziorze, dysponująca letnimi tarasami. Smak zawsze świeżego łososia, sielawy, czy szczupaka w akompaniamencie jeziornego wiatru - bezcenny.',
    stats: [
      { val: 'Ryby', key: 'Kuchnia' },
      { val: '$$', key: 'Cena' },
    ],
    tags: ['Ryby', 'Nad jeziorem', 'Smażalnia', 'Świeżość']
  }
};

// ---- MODAL ENGINE ----
function openModal(id) {
  const data = modalData[id];
  if (!data) return;
  const content = document.getElementById('modal-content');
  content.innerHTML = `
    <img src="${data.img}" alt="${data.title}" class="modal-hero-img" onerror="this.style.display='none'" />
    <div class="modal-body">
      <div class="modal-badge">${data.badge}</div>
      <h2 class="modal-title">${data.title}</h2>
      ${data.subtitle ? `<div class="modal-subtitle">${data.subtitle}</div>` : ''}
      <p class="modal-desc">${data.desc}</p>
      ${data.stats ? `<div class="modal-stats-row">${data.stats.map(s => `<div class="modal-stat-item"><span class="msi-val">${s.val}</span><span class="msi-key">${s.key}</span></div>`).join('')}</div>` : ''}
      ${data.tags ? `<div class="modal-tags">${data.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>` : ''}
    </div>
  `;
  document.getElementById('modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

// ---- GSAP-like fade in on scroll ----
const observerOptions = { threshold: 0.12, rootMargin: '0px 0px -60px 0px' };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll(
  '.trail-card, .lake-card, .place-card, .category-card'
).forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// ---- SMOOTH SCROLL for internal links ----
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  });
});
