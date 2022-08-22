import { Rune, Collection } from '../generated/schema'
import { LeveledUp, RuneCreated, RuneInitialized, Transfer, UpdatedAttributes } from '../generated/RuneNFT/RuneNFT'
import { Bytes, ipfs, Value, JSONValue, log, json } from '@graphprotocol/graph-ts'

export function handleRuneCreated(event: RuneCreated): void {
    let rune = Rune.load(event.params.nftAddress.toHex().toString().concat(event.params.tokenId.toHex().toString()))
    if(rune === null){
        rune = new Rune(event.params.nftAddress.toHex().toString().concat(event.params.tokenId.toHex().toString()))
    }

    const path = event.params.tokenURI.substring(7) 
    log.info('METADATA', [path.toString()])
    let metadata = ipfs.cat(path)
    if(metadata){
        log.info('METADATA', [metadata.toString()])
        const value = json.fromBytes(metadata).toObject()
        if(value){
            const name = value.get("name")
            if(name){
                rune.name = name.toString()
            }

            const description = value.get("description")
            if(description){
                rune.description = description.toString()
            }

            const image = value.get("image")
            if(image){
                rune.image = image.toString().substring(7)
            }
        }
    }
    
    
    rune.tokenId = event.params.tokenId
    rune.nftAddress = event.params.nftAddress
    rune.owner = event.params.owner
    
    rune.level = event.params.level
        
    let collection = Collection.load("1")
    if(collection) {
        rune.collection = collection.id
    }
    
    
    rune.basePower = event.params.power
    rune.baseDurability = event.params.durability
    rune.baseIntelligence = event.params.intelligence
        
    rune.power = event.params.power
    rune.durability = event.params.durability
    rune.intelligence = event.params.intelligence
    
    rune.save()
}

export function handleRuneInitialized(event: RuneInitialized): void {
    let collection = new Collection("1") 
    collection.description = "The first ORBEEM Dota collection allows ypu to get rewards for playing regualr matches"
    collection.game = "DOTA2"
    collection.name = "AEGIS"
    collection.save()
}

export function handleUpdatedAttributes(event: UpdatedAttributes): void {
    let rune = Rune.load("0xE61a80BA54bD65Beb86f8758a442bdD6E7084fdd".concat(event.params.tokenId.toHex().toString()))
    if(rune === null){
        rune = new Rune(event.params.tokenId.toString())
    }

    rune.power = event.params.power
    rune.durability = event.params.durability
    rune.intelligence = event.params.intelligence
    
    rune.save()
}

export function handleLeveledUp(event: LeveledUp): void {
    let rune = Rune.load("0xE61a80BA54bD65Beb86f8758a442bdD6E7084fdd".concat(event.params.tokenId.toHex().toString()))
    if(rune === null){
        rune = new Rune(event.params.tokenId.toString())
    }

    rune.level = event.params.level

    rune.save()
}

// export function handleTransfer(event: Transfer): void {
//     let rune = Rune.load(event.params.tokenId.toString())
//     if(rune === null){
//         rune = new Rune(event.params.tokenId.toString())
//     }

//     rune.tokenId = event.params.tokenId
//     rune.owner = event.params.to

//     rune.save()
// }