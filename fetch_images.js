const fs = require('fs');

const places = [
    'Skansen we Wdzydzach Kiszewskich', 'Kamienne kręgi w Węsiorach', 'Wieżyca (wzgórze)',
    'Kolegiata Kartuska', 'Będomin', 'Zamek w Bytowie', 'Szymbark (województwo pomorskie)',
    'Słowiński Park Narodowy', 'Kalwaria Wejherowska', 'Lasy Mirachowskie',
    'Kościerzyna', 'Wdzydzki Park Krajobrazowy', 'Jezioro Wdzydze', 'Jezioro Żarnowieckie',
    'Jezioro Charzykowskie', 'Jezioro Raduńskie', 'Jezioro Karsińskie', 'Jezioro Ostrzyckie',
    'Jezioro Mausz', 'Jezioro Łebsko', 'Jezioro Wielewskie', 'Radunia (rzeka)',
    'Słupia (rzeka)', 'Piaśnica (rzeka)', 'Wieprza', 'Bory Tucholskie',
    'Kaszubski Park Krajobrazowy', 'Kaszuby', 'Las', 'Jezioro', 'Kajak', 'Rower'
];

async function getImage(title) {
    try {
        const url = `https://pl.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=pageimages&format=json&pithumbsize=800`;
        const res = await fetch(url);
        const data = await res.json();
        const pages = data.query.pages;
        const pageId = Object.keys(pages)[0];
        if (pageId !== '-1' && pages[pageId].thumbnail) {
            return pages[pageId].thumbnail.source;
        }
    } catch (e) {
        console.error(`Error for ${title}:`, e);
    }
    return null;
}

async function main() {
    const results = {};
    for (const place of places) {
        const img = await getImage(place);
        if (img) {
            results[place] = img;
        } else {
            results[place] = 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'; // fallback forest
        }
        console.log(`Fetched ${place}`);
    }
    fs.writeFileSync('images_map.json', JSON.stringify(results, null, 2));
    console.log('Done mapping images.');
}

main();
