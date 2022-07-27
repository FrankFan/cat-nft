var fs = require('fs');

const moodArr = ['excited', 'seneuous', 'energetic', 'cheerful', 'creative', 'hopeful',
    'daring', 'fascinating', 'stimulating', 'amused', 'playful', 'optimistic',
    'confused', 'rejected', 'helpless', 'submissive', 'insecure', 'anxious',
    'bewildered', 'discouraged', 'insignificant', 'inadequate', 'embarrassed', 'overwhelmed']

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


const template = {
    "name": "Cat {{number}}",
    "description": "# You are the onwer of cat{{number}}, please cherish her",
    "image": "https://bafybeicni76jef2lutviohhtv3m3tladnf3dpdduhkh3upsl7cgaoz5hmu.ipfs.nftstorage.link/cats/cat-{{number}}.jpg",
    "attributes": [
        {
            "value": "{{mood}}"
        }
    ]
}

for (let index = 0; index < 99; index++) {
    const rdm = getRandomInt(moodArr.length)
    const mood = moodArr[rdm]
    const metadata = JSON.stringify(template)
        .replace(/{{number}}/g, index + 1)
        .replace(/{{mood}}/g, mood)

    const fileName = `./metadata/${index + 1}`;
    fs.writeFileSync(fileName, JSON.stringify(JSON.parse(metadata), null, 2))
}