import { expect } from 'chai'

import { Coin } from '../../classes/Coin'

import SaleService from '../../services/SaleService'
import InventoryService from '../../services/InventoryService'
import StockService from '../../services/StockService'
import BankService from '../../services/BankService'

describe('Sale Service', () => {
  it('Should be able to check whether userCoins is greater than or equal to requiredCoins', () => {
    const coinsToAdd: Array<Coin> = [new Coin(5.6, 2.4), new Coin(5.6, 2.4)]

    InventoryService.AddCoins(coinsToAdd)

    const requestedItem = StockService.GetProduct('Candy')

    const canMakeSale = SaleService.Compare(InventoryService.coins, requestedItem)

    expect(canMakeSale).to.be.true
  });

  it('Should be able to calculate change', () => {
    const coinsToAdd: Array<Coin> = [new Coin(5.6, 2.4), new Coin(5.6, 2.4), new Coin(5.6, 2.4)] // 75

    BankService.transactionBalance = coinsToAdd

    console.log({coinsToAdd})

    console.log(BankService.transactionBalance)

    const requestedItem = StockService.GetProduct('Candy') // 65

    const change = SaleService.CalculateChange(BankService.transactionBalance, requestedItem)

    const preCalculatedChange = 10

    expect(change).to.be.equal(preCalculatedChange)
  });

  it('Should be able to calculate the remaining profit', () => {
    const coinsToAdd: Array<Coin> = [new Coin(5.6, 2.4), new Coin(5.6, 2.4), new Coin(5.6, 2.4), new Coin(5.6, 2.4)] // 75

    BankService.transactionBalance = coinsToAdd

    console.log({coinsToAdd})

    console.log(BankService.transactionBalance)

    const requestedItem = StockService.GetProduct('Candy') // 65

    const remaining = SaleService.CalculateRemaining(BankService.transactionBalance, requestedItem)

    const preCalculatedRemaining = -35

    expect(remaining).to.be.equal(preCalculatedRemaining)
  })
});
