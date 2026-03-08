import re
import json
import time

# Regex to find modalData keys and their titles/desc
with open('app.js', 'r') as f:
    content = f.read()

# very rough extraction of keys and titles
places = {}
# looking for lines like: 'id': {
# and later title: '...'
pattern = re.compile(r"(['\"]?[\w-]+['\"]?)\s*:\s*\{.*?title:\s*['\"](.*?)['\"]", re.DOTALL)
matches = pattern.findall(content)

for match in matches:
    key = match[0].replace("'", "").replace('"', '')
    title = match[1]
    places[key] = title

print(json.dumps(places, indent=2))
