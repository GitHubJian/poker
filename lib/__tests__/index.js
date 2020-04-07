const Poker = require('..')

const poker = new Poker()

// 洗牌
poker.shuffle()

// 发牌
let { A, B, C, D } = poker.deal()

A = poker.sort(A)

console.log(JSON.stringify(A))
