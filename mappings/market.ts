import { Rune } from '../generated/schema'
import { 
    MarketItemCreated,
    MarketSaleCreated 
} from '../generated/MarketNFT/NFTMarket'

export function handleMarketItemCreated(event: MarketItemCreated) : void {
    let rune = Rune.load(event.params.tokenId.toHex())
    if(rune === null){
        rune = new Rune(event.params.tokenId.toHex())
    }

    rune.tokenId = event.params.tokenId
    rune.itemId = event.params.itemId
    rune.price = event.params.price
    rune.seller = event.params.seller
    rune.owner = event.params.owner
    rune.sold = event.params.sold

    rune.save()
}

export function handleMarketSaleCreated(event: MarketSaleCreated) : void {
    let rune = Rune.load(event.params.tokenId.toHex())
    if(rune === null){
        rune = new Rune(event.params.tokenId.toHex())
    }

    rune.tokenId = event.params.tokenId
    rune.seller = event.params.seller
    rune.owner = event.params.owner
    rune.sold = event.params.sold

    rune.save()
}