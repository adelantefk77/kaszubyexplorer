const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');
let app = fs.readFileSync('app.js', 'utf8');

// 1. Add new restaurants
const newRestaurants = `
                <article class="place-card" onclick="openModal('restaurant-wdziydze-1')">
                    <img src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Zajazd u Sołtysa" class="place-img" />
                    <div class="place-body">
                        <span class="place-category">Kuchnia Polska • Wdzydze</span>
                        <h3 class="place-name">Zajazd u Sołtysa (4.6⭐️)</h3>
                        <p class="place-desc">Spokojny zajazd położony w parku, serwujący dania kuchni lokalnej w przytulnej atmosferze.</p>
                    </div>
                </article>
                <article class="place-card" onclick="openModal('restaurant-wdziydze-2')">
                    <img src="https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Weranda, Bar, Noclegi nad wodą" class="place-img" />
                    <div class="place-body">
                        <span class="place-category">Bar Nad Wodą • Wdzydze</span>
                        <h3 class="place-name">Weranda, Bar nad wodą (4.7⭐️)</h3>
                        <p class="place-desc">Lounge bar położony bezpośrednio nad wodą, znany z bardzo dużych porcji oraz miłej i pomocnej obsługi.</p>
                    </div>
                </article>
`;
html = html.replace('<!-- RESTAURANTS TAB CONTENT -->\n        <div class="places-grid hidden" id="tab-content-regional">', '<!-- RESTAURANTS TAB CONTENT -->\n        <div class="places-grid hidden" id="tab-content-regional">\n' + newRestaurants);

// 2. Add new attractions
const newAttractions = `
                <article class="place-card" onclick="openModal('attraction-bory-1')">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Beechforest062005.jpg/960px-Beechforest062005.jpg" alt="Most Miłości" class="place-img" />
                    <div class="place-body">
                        <span class="place-category">Natura • Bory Tucholskie</span>
                        <h3 class="place-name">Most Miłości (4.4⭐️)</h3>
                        <p class="place-desc">Romantyczne miejsce położone wśród dzikiej przyrody, idealne na spacer i pamiątkowe zdjęcia.</p>
                    </div>
                </article>
                <article class="place-card" onclick="openModal('attraction-bory-2')">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/KB_Zamek_Krzy%C5%BCacki_w_Bytowie.jpg/960px-KB_Zamek_Krzy%C5%BCacki_w_Bytowie.jpg" alt="Ruiny mostu" class="place-img" />
                    <div class="place-body">
                        <span class="place-category">Historia • Bory Tucholskie</span>
                        <h3 class="place-name">Ruiny mostu (4.7⭐️)</h3>
                        <p class="place-desc">Historyczne pozostałości mostu, który został wysadzony po przeprawieniu się przez rzekę; ciekawe miejsce dla pasjonatów historii.</p>
                    </div>
                </article>
                <article class="place-card" onclick="openModal('attraction-bory-3')">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Jezioro_%C5%BBabinek_fragment_Wdecki_PK_01.07.10_p.jpg/960px-Jezioro_%C5%BBabinek_fragment_Wdecki_PK_01.07.10_p.jpg" alt="Wdecki Park Krajobrazowy" class="place-img" />
                    <div class="place-body">
                        <span class="place-category">Park Krajobrazowy • Bory Tucholskie</span>
                        <h3 class="place-name">Wdecki Park Krajobrazowy (4.7⭐️)</h3>
                        <p class="place-desc">Rozległy park krajobrazowy oferujący piękne trasy spacerowe i bliski kontakt z naturą.</p>
                    </div>
                </article>
`;
html = html.replace('<!-- POZIOM II (Natura) -->\n        <div class="places-grid hidden" id="tab-content-nature">', '<!-- POZIOM II (Natura) -->\n        <div class="places-grid hidden" id="tab-content-nature">\n' + newAttractions);


// 3. Add to app.js
const newModalData = `
  // NOWE ATRAKCJE BORY TUCHOLSKIE
  'attraction-bory-1': {
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Beechforest062005.jpg/960px-Beechforest062005.jpg',
    badge: 'Natura',
    title: 'Most Miłości',
    subtitle: 'Bory Tucholskie - 4.4 ⭐️ na Google Maps',
    desc: 'Romantyczne miejsce położone wśród dzikiej przyrody w Borach Tucholskich, idealne na spacer we dwoje. Słynie z zawieszonych na barierach kłódek zostawianych przez zakochanych oraz pięknego tła do fotografii.',
    stats: [
      { val: 'Dostępne', key: 'Wejście' },
      { val: 'Wysoka', key: 'Popularność' },
      { val: 'Spacerowy', key: 'Charakter' },
    ],
    tags: ['Romantyczne', 'Fotografia', 'Natura', 'Spacer'],
  },
  'attraction-bory-2': {
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/KB_Zamek_Krzy%C5%BCacki_w_Bytowie.jpg/960px-KB_Zamek_Krzy%C5%BCacki_w_Bytowie.jpg',
    badge: 'Historia',
    title: 'Ruiny mostu',
    subtitle: 'Bory Tucholskie - 4.7 ⭐️ na Google Maps',
    desc: 'Historyczne pozostałości starego mostu, malowniczo zlokalizowane nad brzegiem rzeki. Obiekt, który niegdyś służył do przeprawy, dziś stanowi fascynujący punkt dla pasjonatów lokalnej historii i miejskich odkrywców.',
    stats: [
      { val: 'Bezpłatne', key: 'Bilety' },
      { val: 'Historyczne', key: 'Znaczenie' },
    ],
    tags: ['Zabytki', 'Urbex', 'Ruiny', 'Rzeka'],
  },
  'attraction-bory-3': {
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Jezioro_%C5%BBabinek_fragment_Wdecki_PK_01.07.10_p.jpg/960px-Jezioro_%C5%BBabinek_fragment_Wdecki_PK_01.07.10_p.jpg',
    badge: 'Park',
    title: 'Wdecki Park Krajobrazowy',
    subtitle: 'Bory Tucholskie - 4.7 ⭐️ na Google Maps',
    desc: 'Niezwykle malowniczy park obejmujący terytorium wokół doliny rzeki Wdy. Charakteryzuje się borami sosnowymi, torfowiskami i polodowcowymi wzniesieniami. Często organizowane są tu spacery edukacyjne.',
    stats: [
      { val: '23 786 ha', key: 'Powierzchnia' },
      { val: 'Doliny', key: 'Rzeźba' },
    ],
    tags: ['Park Krajobrazowy', 'Rzeka Wda', 'Natura', 'Edukacja'],
  },
  
  // NOWE RESTAURACJE WDZYDZE
  'restaurant-wdziydze-1': {
    img: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    badge: 'Restauracja',
    title: 'Zajazd u Sołtysa',
    subtitle: 'Wdzydze Kiszewskie - 4.6 ⭐️ na Google Maps',
    desc: 'Spokojny, tradycyjny zajazd zlokalizowany na obrzeżach parku etonograficznego. Znany z przygotowywania na miejscu świeżych, kaszubskich specjałów z produktów pochodzących od lokalnych dostawców. Miejsce to gości zachęca wspaniałą atmosferą drewnianych wnętrz.',
    stats: [
      { val: 'Kaszubska', key: 'Kuchnia' },
      { val: 'Umiarkowane', key: 'Ceny' },
      { val: 'Polecane', key: 'Ocena' },
    ],
    tags: ['Obiad', 'Tradycja', 'Zajazd', 'Klimatyczne'],
  },
  'restaurant-wdziydze-2': {
    img: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    badge: 'Bar / Lounge',
    title: 'Weranda Bar',
    subtitle: 'Wdzydze (nad wodą) - 4.7 ⭐️ na Google Maps',
    desc: 'Bar lounge i miejsca noclegowe tuż nad brzegiem "Kaszubskiego Morza" (Jeziora Wdzydze). Lokal zebrał wysokie noty za gigantyczne, smaczne porcje jedzenia, chłodne piwo oraz wyjątkową bliskość plaży.',
    stats: [
      { val: 'Europejska', key: 'Kuchnia' },
      { val: 'Tak', key: 'Pokoje' },
      { val: 'XL', key: 'Porcje' },
    ],
    tags: ['Plaża', 'Bar', 'Duże porcje', 'Noclegi'],
  },
`;

app = app.replace('// JEDZENIE - REGIONALNE / KARCZMY', newModalData + '\n  // JEDZENIE - REGIONALNE / KARCZMY');

fs.writeFileSync('index.html', html);
fs.writeFileSync('app.js', app);
console.log('Done!');
