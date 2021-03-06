import { Item } from "../classes/Item"
import { Coin } from "../classes/Coin"

import { calculateBalance } from '../helpers/coinHelper'

class SaleService {
  Compare (enteredCoins: Array<Coin>, requestedItem: Item) {
    return calculateBalance(enteredCoins) - requestedItem.Price >= 0
  }

  CalculateChange (enteredCoins: Array<Coin>, requestedItem: Item) {
    return calculateBalance(enteredCoins) - requestedItem.Price
  }

  CalculateRemaining (enteredCoins: Array<Coin>, requestedItem: Item) {
    return requestedItem.Price - calculateBalance(enteredCoins)
  }
}

const saleService = new SaleService()
export default saleService