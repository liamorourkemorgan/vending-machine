import { expect } from "chai";

import { calculateBalance } from '../../helpers/coinHelper'
import { Coin } from "../../classes/Coin";

import BankService from '../../services/BankService'
import InventoryService from '../../services/InventoryService'

describe('Bank Service', () => {

  it('Should be able to say if change can be returned', () => {
    BankService.SetBalance(2)

    let preChange = BankService.IsChangeAvaliable()

    BankService.SetBalance(0)

    let postChange = BankService.IsChangeAvaliable()

    expect(preChange).to.be.true
    expect(postChange).to.to.false
  });

  it('Should be able to return the users entered coins', () => {
    const sampleCoins: Array<Coin> = [new Coin(5.6, 2.4), new Coin(5.6, 2.4)] // Two Quarters, 50c
    const initialUserCoinCount: number = InventoryService.coins.length

    BankService.transactionBalance = sampleCoins

    BankService.CancelTransaction()

    const userCoinCount: number = InventoryService.coins.length

    expect(userCoinCount).to.be.greaterThan(initialUserCoinCount)
  })

  it('Should be able to return change', () => {
    const changeToReturn = 35

    const initialBalance: number = calculateBalance(InventoryService.coins)

    BankService.SetBalance(5000)

    BankService.ReturnChange(changeToReturn)

    const newBalance: number = calculateBalance(InventoryService.coins)

    const amountChanged = newBalance - initialBalance

    expect(amountChanged).to.be.equal(changeToReturn)
  })

  it('Should to deterime whether or not to return change', () => {
    const changeToReturn = 0

    const initialBalance: number = calculateBalance(InventoryService.coins)

    BankService.SetBalance(0)

    BankService.ReturnChange(changeToReturn)

    const newBalance: number = calculateBalance(InventoryService.coins)

    expect(initialBalance).to.be.equal(newBalance)
  })
});
