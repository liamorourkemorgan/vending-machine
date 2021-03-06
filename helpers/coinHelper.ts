import { Coin } from '../classes/Coin'
import { ICoin } from '../interfaces/CoinInterface'
import stockService from 'services/StockService';
import { Products } from 'classes/Products';

function calculateBalance(balance: Array<Coin>): number {
  let total: number = 0;

  balance.forEach(coin => {
    total += coin.value
  })

  return total
};

function getCoinByName(itemName: string) : Coin {
  switch (itemName.toLowerCase()) {
    case 'dime':
      return new Coin(2.26, 1.8);
    case 'nickel':
      return new Coin(5, 2.1)
    case 'quarter':
      return new Coin(5.6, 2.4)
  }
}

function calculateCoins(amount: number): Array<Coin> {
  let coinsToReturn: Array<Coin> = [];
  let typesOfCoin: Array<ICoin> = [
    {
      weight: 5.6,
      size: 2.4,
      value: 25,
      name: 'Quarter'
    },
    {
      weight: 2.26,
      size: 1.8,
      value: 10,
      name: 'Dime'
    },
    {
      weight: 5,
      size: 2.1,
      value: 5,
      name: 'Nickel'
    }
  ]

  let tempValue = amount

  let i = 0;

  while (i < typesOfCoin.length) {
    if (tempValue - typesOfCoin[i].value >= 0) {
      tempValue = tempValue - typesOfCoin[i].value
      coinsToReturn.push(new Coin(typesOfCoin[i].weight, typesOfCoin[i].size))
    }
    else {
      i++
    }
  }

  return coinsToReturn;
}

export {
  calculateBalance,
  calculateCoins,
  getCoinByName
}
