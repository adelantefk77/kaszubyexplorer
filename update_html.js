const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');
let app = fs.readFileSync('app.js', 'utf8');

const imgMap = {
  'assets/kaszuby_hero.png': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Jezioro_Zarnowieckie.jpg/960px-Jezioro_Zarnowieckie.jpg',
  'assets/szlak_kaszubski.png': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Beechforest062005.jpg/960px-Beechforest062005.jpg',
  'assets/wiezyce_tower.png': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Szimbark_%28k%C3%B2sc%C3%B3%C5%82%29.JPG/960px-Szimbark_%28k%C3%B2sc%C3%B3%C5%82%29.JPG',
  'assets/jezioro_wdzydze.png': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Jezioro_Zarnowieckie.jpg/960px-Jezioro_Zarnowieckie.jpg',
  'assets/kamienne_kregi.png': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Beechforest062005.jpg/960px-Beechforest062005.jpg',
  'assets/szlaki_rowerowe.png': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Left_side_of_Flying_Pigeon.jpg/960px-Left_side_of_Flying_Pigeon.jpg',
  'assets/jezioro_wielewskie.png': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Powiat_ko%C5%9Bcierski_035_-_Wiele_-_Jezioro_Wielewskie.JPG/960px-Powiat_ko%C5%9Bcierski_035_-_Wiele_-_Jezioro_Wielewskie.JPG',
  'assets/skansen_wdzydze.png': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Ko%C5%9Bcierzyna_-_fotopolska.eu_%28192746%29.jpg/960px-Ko%C5%9Bcierzyna_-_fotopolska.eu_%28192746%29.jpg',
  'assets/lakes_section_2.png': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Swornegacie_Jezioro_Karsi%C5%84skie_03.07.10_2k.jpg/960px-Swornegacie_Jezioro_Karsi%C5%84skie_03.07.10_2k.jpg',
  'assets/restauracja_mulk_checz.png': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/KB_Zamek_Krzy%C5%BCacki_w_Bytowie.jpg/960px-KB_Zamek_Krzy%C5%BCacki_w_Bytowie.jpg',
  'assets/restauracja_nordowi_mol.png': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/B%C4%99domin%2C_Muzeum_Hymnu_Narodowego_%28HB1%29.jpg/960px-B%C4%99domin%2C_Muzeum_Hymnu_Narodowego_%28HB1%29.jpg',
  'assets/restauracja_pod_syty_gesia.png': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Szimbark_%28k%C3%B2sc%C3%B3%C5%82%29.JPG/960px-Szimbark_%28k%C3%B2sc%C3%B3%C5%82%29.JPG',
  'assets/restauracja_karczma_viking.png': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Szimbark_%28k%C3%B2sc%C3%B3%C5%82%29.JPG/960px-Szimbark_%28k%C3%B2sc%C3%B3%C5%82%29.JPG',
  'assets/restauracja_lesny_dwor.png': 'https://upload.wikimedia.org/wikipedia/commons/3/33/Wejherowo_miestrium01.jpg',
  'assets/restauracja_palac_lebunia.png': 'https://upload.wikimedia.org/wikipedia/commons/3/33/Wejherowo_miestrium01.jpg',
  'assets/restauracja_grzybowski_mlyn.png': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Ko%C5%9Bcierzyna_-_fotopolska.eu_%28192746%29.jpg/960px-Ko%C5%9Bcierzyna_-_fotopolska.eu_%28192746%29.jpg',
  'assets/restauracja_chata_kaszubska.png': 'https://upload.wikimedia.org/wikipedia/commons/3/33/Wejherowo_miestrium01.jpg',
  'assets/restauracja_rybarnia.png': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Powiat_ko%C5%9Bcierski_035_-_Wiele_-_Jezioro_Wielewskie.JPG/960px-Powiat_ko%C5%9Bcierski_035_-_Wiele_-_Jezioro_Wielewskie.JPG',
};

// 1. Fix the HTML structure for bike trails
html = html.replace(
  `    </section>\n    <p class="trail-desc">Spektakularny szlak rowerowy wzdłuż brzegu Zatoki Puckiej. Prowadzi z\n        Gdyni przez Swarzewo, Puck, Władysławowo, Chałupy, Kuźnicę, Jastarnię, Juratę aż do Helu.\n    </p>\n    <div class="trail-tags">\n        <span class="tag">Hel</span>\n        <span class="tag">Morze</span>\n        <span class="tag">Asfalt</span>\n    </div>\n    </div>\n    </article>`,
  ''
);

// We need to properly wrap the kayak section and ensure bike and kayak sections are complete.
html = html.replace(
  `
    <article class="trail-card" onclick="openModal('bike-2')">`,
  `
            </div> <!-- End tab-content-hiking -->
            <!-- Cycling Trails (Fixed) -->
            <div class="trails-grid hidden" id="tab-content-cycling">
                 <article class="trail-card" onclick="openModal('bike-1')">
                    <div class="trail-img-wrap">
                        <img src="assets/kaszuby_hero.png" alt="Szlak Pierścienia Zatoki Puckiej" class="trail-img" />
                        <span class="trail-badge badge-blue">Niebieski</span>
                        <span class="trail-difficulty diff-medium">Średni</span>
                    </div>
                    <div class="trail-body">
                        <h3 class="trail-name">Pierścień Zatoki Puckiej</h3>
                        <div class="trail-meta">
                            <span>📏 ~76 km</span>
                            <span>⏱️ 1–2 dni</span>
                        </div>
                        <p class="trail-desc">Spektakularny szlak rowerowy wzdłuż brzegu Zatoki Puckiej. Prowadzi z Gdyni przez Swarzewo, Puck, Władysławowo, Chałupy, Kuźnicę, Jastarnię, Juratę aż do Helu.</p>
                        <div class="trail-tags">
                            <span class="tag">Zatoka Pucka</span>
                            <span class="tag">Hel</span>
                            <span class="tag">Morze</span>
                        </div>
                    </div>
                </article>
                <article class="trail-card" onclick="openModal('bike-2')">`
);

// Remove the old kayak tab content because it's duplicated before the bike error.
html = html.replace(/<!-- Kayak Trails -->[\s\S]*?(?=<\/section>)/, `
            <!-- Kayak Trails -->
            <div class="trails-grid hidden" id="tab-content-kayak">
                <article class="trail-card" onclick="openModal('kayak-1')">
                    <div class="trail-img-wrap">
                        <img src="assets/jezioro_wielewskie.png" alt="Szlak Kajakowy Radunia" class="trail-img" />
                        <span class="trail-badge badge-blue">Radunia</span>
                        <span class="trail-difficulty diff-easy">Łatwy / Średni</span>
                    </div>
                    <div class="trail-body">
                        <h3 class="trail-name">Kółko Raduńskie i Radunia</h3>
                        <div class="trail-meta">
                            <span>📏 ~98 km (rzeka) / ~40 km (Kółko)</span>
                            <span>⏱️ Od kilku godzin do kilku dni</span>
                        </div>
                        <p class="trail-desc">Szlak prowadzący wzdłuż czystych jezior "Szwajcarii Kaszubskiej". System polodowcowych jezior rynnowych łączy się w ponad 40-kilometrowy szlak kajakowy zwany "Kółkiem Raduńskim".</p>
                        <div class="trail-tags">
                            <span class="tag">Jeziorowy</span>
                            <span class="tag">Szwajcaria Kaszubska</span>
                            <span class="tag">Popularny</span>
                        </div>
                    </div>
                </article>

                <article class="trail-card" onclick="openModal('kayak-2')">
                    <div class="trail-img-wrap">
                        <img src="assets/jezioro_wdzydze.png" alt="Rzeka Słupia" class="trail-img" />
                        <span class="trail-badge badge-red">Słupia</span>
                        <span class="trail-difficulty diff-hard">Trudny (w górnym biegu)</span>
                    </div>
                    <div class="trail-body">
                        <h3 class="trail-name">Spływ rzeką Słupią</h3>
                        <div class="trail-meta">
                            <span>📏 ~133 km cały szlak</span>
                            <span>⏱️ Wielodniowy</span>
                        </div>
                        <p class="trail-desc">Szlak znany z "rynny suleńczyńskiej", gdzie w górnym biegu rzeka ma charakter niemal górski, bardzo wymagający. W dolnym biegu spokojniejsza, idealna na długie spływy z licznymi elektrowniami wodnymi.</p>
                        <div class="trail-tags">
                            <span class="tag">Rynna Suleńczyńska</span>
                            <span class="tag">Szybki nurt</span>
                            <span class="tag">Park Krajobrazowy</span>
                        </div>
                    </div>
                </article>

                <article class="trail-card" onclick="openModal('kayak-3')">
                    <div class="trail-img-wrap">
                        <img src="assets/lakes_section_2.png" alt="Piaśnica" class="trail-img" />
                        <span class="trail-badge badge-green">Piaśnica</span>
                        <span class="trail-difficulty diff-easy">Bardzo łatwy</span>
                    </div>
                    <div class="trail-body">
                        <h3 class="trail-name">Spływ do Bałtyku Piaśnicą</h3>
                        <div class="trail-meta">
                            <span>📏 ~6 km</span>
                            <span>⏱️ 2-3 godziny</span>
                        </div>
                        <p class="trail-desc">Spokojny, rodzinny spływ. Rzeka wypływa z Jeziora Żarnowieckiego i powoli meandrując pośród łąk Rezerwatu Piaśnickie Łąki, uchodzi prosto do Morza Bałtyckiego w Dębkach.</p>
                        <div class="trail-tags">
                            <span class="tag">Na plażę</span>
                            <span class="tag">Dla rodzin</span>
                            <span class="tag">Dębki</span>
                        </div>
                    </div>
                </article>

                <article class="trail-card" onclick="openModal('kayak-4')">
                    <div class="trail-img-wrap">
                        <img src="assets/szlak_kaszubski.png" alt="Rzeka Wieprza" class="trail-img" />
                        <span class="trail-badge badge-black">Wieprza</span>
                        <span class="trail-difficulty diff-medium">Średni</span>
                    </div>
                    <div class="trail-body">
                        <h3 class="trail-name">Szlak Kajakowy Wieprza</h3>
                        <div class="trail-meta">
                            <span>📏 ~108 km</span>
                            <span>⏱️ 5-6 dni (całość)</span>
                        </div>
                        <p class="trail-desc">Dzikia i spokojna rzeka, wypływająca z Jeziora Białego, idealna dla osób szukających samotności oraz bliskości natury. Liczne odcinki np. z Glewnika, otoczone gęstym lasem.</p>
                        <div class="trail-tags">
                            <span class="tag">Dzikie Kaszuby</span>
                            <span class="tag">Natura</span>
                            <span class="tag">Cisza</span>
                        </div>
                    </div>
                </article>
            </div>
            
            <div class="trails-grid hidden" id="tab-content-bory-kpk-wpk">
                <article class="trail-card" onclick="openModal('park-bory')">
                    <div class="trail-img-wrap">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Beechforest062005.jpg/960px-Beechforest062005.jpg" alt="Bory Tucholskie" class="trail-img" />
                        <span class="trail-badge badge-green">Bory Tucholskie</span>
                        <span class="trail-difficulty diff-medium">Aktywnie</span>
                    </div>
                    <div class="trail-body">
                        <h3 class="trail-name">Bory Tucholskie</h3>
                        <div class="trail-meta">
                            <span>📏 Rezerwat Biosfery</span>
                            <span>⏱️ Wiele dni</span>
                        </div>
                        <p class="trail-desc">Jeden z największych kompleksów borów sosnowych w Polsce. Znajdziesz tu Kaszubską Marszrutę, dzikie rzeki takie jak Brda i Wda, oraz liczne czyste jeziora ideale na ryby i grzyby.</p>
                        <div class="trail-tags">
                            <span class="tag">Rezerwat Biosfery</span>
                            <span class="tag">Rowery</span>
                            <span class="tag">Kajaki</span>
                        </div>
                    </div>
                </article>
                <article class="trail-card" onclick="openModal('park-kpk')">
                    <div class="trail-img-wrap">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Kaszubski_Park_Krajobrazowy-logo.svg/960px-Kaszubski_Park_Krajobrazowy-logo.svg.png" alt="Kaszubski Park Krajobrazowy" class="trail-img" />
                        <span class="trail-badge badge-blue">KPK</span>
                        <span class="trail-difficulty diff-medium">Szwajcaria Kaszubska</span>
                    </div>
                    <div class="trail-body">
                        <h3 class="trail-name">Kaszubski Park Krajobrazowy</h3>
                        <div class="trail-meta">
                            <span>📏 Najwyższe wzniesienia</span>
                            <span>⏱️ Wiele dni</span>
                        </div>
                        <p class="trail-desc">Serce Kaszub z Wieżycą, Kolegiatą Kartuską i Kółkiem Raduńskim. Bogata rzeźba terenu ukształtowana przez lądolód, strome stoki i głębokie jeziora rynnowe.</p>
                        <div class="trail-tags">
                            <span class="tag">Wieżyca</span>
                            <span class="tag">Lasy Mirachowskie</span>
                            <span class="tag">Punkty Widokowe</span>
                        </div>
                    </div>
                </article>
                <article class="trail-card" onclick="openModal('park-wpk')">
                    <div class="trail-img-wrap">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Jezioro_Zarnowieckie.jpg/960px-Jezioro_Zarnowieckie.jpg" alt="Wdzydzki Park Krajobrazowy" class="trail-img" />
                        <span class="trail-badge badge-red">WPK</span>
                        <span class="trail-difficulty diff-easy">Relaks na wodzie</span>
                    </div>
                    <div class="trail-body">
                        <h3 class="trail-name">Wdzydzki Park Krajobrazowy</h3>
                        <div class="trail-meta">
                            <span>📏 Kaszubskie Morze</span>
                            <span>⏱️ Wiele dni</span>
                        </div>
                        <p class="trail-desc">Obszar wokół jeziora Wdzydze, oferujący świetne warunki do żeglarstwa i kajakarstwa, a także unikatowy Kaszubski Park Etnograficzny (skansen).</p>
                        <div class="trail-tags">
                            <span class="tag">Kaszubskie Morze</span>
                            <span class="tag">Skansen</span>
                            <span class="tag">Żaglowce</span>
                        </div>
                    </div>
                </article>
            </div>
            </div>
            `);

// 2. Replace all images with imgMap
Object.keys(imgMap).forEach(key => {
  html = html.replace(new RegExp(key, 'g'), imgMap[key]);
  app = app.replace(new RegExp(key, 'g'), imgMap[key]);
});

// 3. Add tabs for new Parks
html = html.replace(
  '<button class="tab" data-tab="kayak" id="tab-kayak">🛶 Kajakowe</button>',
  '<button class="tab" data-tab="kayak" id="tab-kayak">🛶 Kajakowe</button>\n                <button class="tab" data-tab="bory-kpk-wpk" id="tab-parks">🌲 Parki & Bory</button>'
);
app = app.replace(
  `document.getElementById('tab-content-cycling').classList.toggle('hidden', tab !== 'cycling');`,
  `document.getElementById('tab-content-cycling').classList.toggle('hidden', tab !== 'cycling');
     const kayakTab = document.getElementById('tab-content-kayak');
     if(kayakTab) kayakTab.classList.toggle('hidden', tab !== 'kayak');
     const parksTab = document.getElementById('tab-content-bory-kpk-wpk');
     if(parksTab) parksTab.classList.toggle('hidden', tab !== 'bory-kpk-wpk');`
);

// 4. Add modal data for new parks
const newModalData = `
  // PARKS
  'park-bory': {
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Beechforest062005.jpg/960px-Beechforest062005.jpg',
    badge: 'Park Narodowy / Rezerwat',
    title: 'Bory Tucholskie',
    subtitle: 'Kraina Sosnowy Lasów i Czystych Jezior',
    desc: 'Bory Tucholskie to jeden z największych kompleksów borów sosnowych w Polsce. W północnej części przylegają do Kaszub. Teren obfituje w czyste rzeki (Brda, Wda), strugi i jeziora lobeliowe. Miejsce idealne na wycieczki rowerowe po "Kaszubskiej Marszrucie", długie spływy kajakowe oraz grzybobranie.',
    stats: [
      { val: '3196 km²', key: 'Powierzchnia' },
      { val: 'Sosnowe', key: 'Rodzaj borów' },
      { val: 'Brda, Wda', key: 'Główne rzeki' },
    ],
    tags: ['Rezerwat Biosfery UNESCO', 'Szlak Rowery', 'Kajaki', 'Grzyby', 'Jeziora Lobeliowe'],
  },
  'park-kpk': {
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Kaszubski_Park_Krajobrazowy-logo.svg/960px-Kaszubski_Park_Krajobrazowy-logo.svg.png',
    badge: 'Park Krajobrazowy',
    title: 'Kaszubski Park Krajobrazowy',
    subtitle: 'Szwajcaria Kaszubska',
    desc: 'Utworzony w 1983 roku, by chronić najbardziej urokliwą część Kaszub ze słynnymi Wzgórzami Szymbarskimi, najwyższym wzniesieniem Niżu Środkowoeuropejskiego - Wieżycą (329 m n.p.m.) oraz Kółkiem Raduńskim (14 pięknych jezior rynnowych). Park zachwyca silnie pofałdowanym polodowcowym krajobrazem.',
    stats: [
      { val: '33 202 ha', key: 'Powierzchnia' },
      { val: '329 m n.p.m', key: 'Najwyższy punkt' },
      { val: '12', key: 'Rezerwatów' },
    ],
    tags: ['Szwajcaria Kaszubska', 'Wieżyca', 'Kółko Raduńskie', 'Lasy Mirachowskie', 'Wzgórza Szymbarskie'],
  },
  'park-wpk': {
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Jezioro_Zarnowieckie.jpg/960px-Jezioro_Zarnowieckie.jpg',
    badge: 'Park Krajobrazowy',
    title: 'Wdzydzki Park Krajobrazowy',
    subtitle: 'Kaszubskie Morze',
    desc: 'Ochroną objęto kompleks Jezior Wdzydzkich o kształcie krzyża oraz przylegające bory i lasy. "Kaszubskie Morze" jest rajem dla żeglarzy i wędkarzy. Oprócz natury, park może pochwalić się ogromnym Kaszubskim Parkiem Etnograficznym - najstarszym skansenem na ziemiach polskich.',
    stats: [
      { val: '32 144 ha', key: 'Powierzchnia' },
      { val: '1417 ha', key: 'Pow. J. Wdzydze' },
      { val: 'Jeziorne', key: 'Główne atrakcje' },
    ],
    tags: ['Kaszubskie Morze', 'Jezioro Wdzydze', 'Skansen', 'Żaglówki', 'Krzyż Wdzydzki'],
  },
`;

app = app.replace('// KAYAK TRAILS', newModalData + '\n  // KAYAK TRAILS');

fs.writeFileSync('index.html', html);
fs.writeFileSync('app.js', app);

console.log('Update finished successfully.');
