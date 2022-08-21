// import fs from "fs"
// import path from 'path';
// import { fileURLToPath } from 'url';
const fs = require('fs')
const { resolve } = require('path');

const dir = resolve(__dirname, 'nfts');
console.log(dir)

const files = fs.readdirSync(dir)
console.log(files)

for(let i = 0; i < files.length; i++) {
    const oldPath = dir + `/${files[i]}`
    const newPath = dir +`/${i+1}.jpg`
    
    fs.rename(
        oldPath,
        newPath,
        (err) => { 
            
        }
    )
}

fs.rename()