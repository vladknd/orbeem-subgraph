const fs = require('fs')
const { resolve } = require('path')

const dirImage = resolve(__dirname, 'nfts');
const dirMetaData = resolve(__dirname, 'metadata')
console.log(dirImage);
console.log(dirMetaData);

const files = fs.readdirSync(dirImage)
console.log(files)

const CID_IMAGE = "bafybeicwjamha3frl7stc4f4pt3jiocogwn5w3bwr7u4eaknrgytebsik4"
const name = "Dota2 First NFT Collection "
const description = "First ORBEEM DOTA2 NFT Collection. Each NFT has three attributes and can be used to get rewards for a game based on the results of the match(kills, deaths, assists)."

for(let i = 0; i < 23; i++) {
    const runeObj = {
        name,
        description,
        image: `ipfs://${CID_IMAGE}/${i+1}.png`
    }

    const runeJSON = JSON.stringify(runeObj)

    fs.writeFileSync(`${dirMetaData}/${i+1}.json`, runeJSON, 'utf8', function (err) {
        if (err) {
            console.log("An error occured while writing JSON Object to File.");
            return console.log(err);
        }
     
        console.log("JSON file has been saved.");
    })
}