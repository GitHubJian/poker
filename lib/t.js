//出牌
if (this.options.playerIndex == this.manage.curPlayerIndex) {
  var spks = [],
    gz = false
  if (this.manage.curMaxPlayerIndex == this.options.playerIndex) {
    this.manage.deskPukes = []
  }
  if (this.isCompute) {
    //电脑自动出牌
    var start = 0
    var len = this.manage.deskPukes.length || 0
    while (start < this.pukes.length) {
      spks = []
      for (var i = 0, j = start; i < len && j < this.pukes.length; i++) {
        //随便选一张 可以出就行
        if (this.pukes[j].status) {
          spks.push(this.pukes[j++])
        }
      }
      if (spks.length) {
        if (rules.valids(spks, this.manage.deskPukes)) {
          gz = true
          break
        }
      }
      start++
    }
  } else {
    //玩家选择出牌
    for (var i = 0; i < this.pukes.length; i++) {
      if (this.pukes[i].selected && this.pukes[i].status) {
        spks.push(this.pukes[i])
      }
    }
    if (rules.valids(spks, this.manage.deskPukes)) {
      gz = true
    } else {
      alert('出牌不符合规则！')
    }
  }
  if (gz) {
    this.manage.curMaxPlayerIndex = this.options.playerIndex
    this.manage.deskPukes = []
    for (var i = 0; i < spks.length; i++) {
      this.pukesLen--
      this.manage.deskPukes.push(spks[i])
      spks[i].status = false
    }
  }
  this.manage.renderPukes()
  this.manage.renderCurDiscard()
  if (this.isCompute || gz) {
    this.manage.nextPlayer()
  }
} else {
  alert('没轮到你出牌！')
}
