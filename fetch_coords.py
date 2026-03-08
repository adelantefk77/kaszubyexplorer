import json
import urllib.request
import urllib.parse
import time
import re

with open('places.json', 'r') as f:
    places = json.load(f)

# Default Kaszuby center (Wiezyca area)
DEFAULT_COORD = [54.223, 18.122]

coords = {}

# We will try to add "Kaszuby, Poland" or "Pomorskie, Poland" to improve accuracy
for place in places:
    title = place['title']
    id = place['id']
    
    # Custom tweaks for better geocoding results
    query = title
    if "Szlak" in query:
        query = query + " Kaszuby"
    elif "Jezioro" in query:
        query = query + " Pomorskie"
    else:
        query = query + " Kaszuby"
    
    url = f"https://nominatim.openstreetmap.org/search?q={urllib.parse.quote(query)}&format=json&limit=1"
    
    req = urllib.request.Request(url, headers={'User-Agent': 'KaszubyExplorerAgent/1.0'})
    try:
        with urllib.request.urlopen(req) as response:
            data = json.loads(response.read().decode())
            if data and len(data) > 0:
                coords[id] = [float(data[0]['lat']), float(data[0]['lon'])]
                print(f"[{id}] SUCCESS: {title} -> {coords[id]}")
            else:
                # Retry without "Kaszuby"
                url2 = f"https://nominatim.openstreetmap.org/search?q={urllib.parse.quote(title)}&format=json&limit=1"
                req2 = urllib.request.Request(url2, headers={'User-Agent': 'KaszubyExplorerAgent/1.0'})
                with urllib.request.urlopen(req2) as res2:
                    data2 = json.loads(res2.read().decode())
                    if data2 and len(data2) > 0:
                        coords[id] = [float(data2[0]['lat']), float(data2[0]['lon'])]
                        print(f"[{id}] SUCCESS (retry): {title} -> {coords[id]}")
                    else:
                        print(f"[{id}] FAILED: {title} -> using default")
                        # Adding slight random offset to default so markers don't overlap completely
                        import random
                        coords[id] = [DEFAULT_COORD[0] + random.uniform(-0.1, 0.1), DEFAULT_COORD[1] + random.uniform(-0.1, 0.1)]
    except Exception as e:
        print(f"ERROR on {title}: {e}")
        coords[id] = DEFAULT_COORD
        
    time.sleep(1) # Be nice to Nominatim

js_output = "const placeCoords = " + json.dumps(coords, indent=2) + ";\n"
with open('coords.js', 'w') as f:
    f.write(js_output)
print("Finished!")
