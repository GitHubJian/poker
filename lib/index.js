// 生成随机数，交换位置
function shuffle(arr) {
  var newArr = arr.slice(0)
  for (var i = newArr.length - 1; i >= 0; i--) {
    var randomIndex = Math.floor(Math.random() * (i + 1))
    var itemAtIndex = newArr[randomIndex]
    newArr[randomIndex] = newArr[i]
    newArr[i] = itemAtIndex
  }

  return newArr
}

function Poker() {
  var cardType = ['黑桃', '红桃', '梅花', '方块']

  var cardValue = [
    '2',
    'A',
    'K',
    'Q',
    'J',
    '10',
    '9',
    '8',
    '7',
    '6',
    '5',
    '4',
    '3'
  ]

  var specialCard = ['大王', '小王']

  var allCards = []
  for (var j = 0, jl = cardValue.length; j < jl; j++) {
    for (var i = 0, il = cardType.length; i < il; i++) {
      allCards.push(cardType[i] + '-' + cardValue[j])
    }
  }

  allCards = specialCard.concat(allCards)

  this.originalPokers = allCards
  this.pokers = this.originalPokers
}

Poker.prototype.shuffle = function() {
  this.pokers = shuffle(this.originalPokers)
}

Poker.prototype.sort = function(arr) {
  let rest = []
  for (var i = 0; i < arr.length; i++) {
    let x = arr[i]

    let index = this.originalPokers.findIndex(function(v) {
      return v == x
    })

    rest[index] = x
  }

  return rest.filter(v => v)
}

Poker.prototype._deal = function(i) {
  return this.pokers[i]
}

Poker.prototype.deal = function() {
  var A = []
  var B = []
  var C = []

  var D = this.pokers.slice(this.pokers.length - 3)

  for (var i = 0, il = this.pokers.length - 3; i < il; i++) {
    if (i % 3 == 0) {
      A.push(this._deal(i))
    } else if (i % 3 == 1) {
      B.push(this._deal(i))
    } else if (i % 3 == 2) {
      C.push(this._deal(i))
    }
  }

  return {
    A,
    B,
    C,
    D
  }
}

module.exports = Poker
