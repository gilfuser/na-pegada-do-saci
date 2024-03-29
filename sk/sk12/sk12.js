const sk12 = sk => {
  let col = { verm: 0, verde: 0, azul: 0 }
  let flick = { wX: 0, wY: 0, wW: 0, wH: 0, wA: 0 }
  let zoff = 0.0
  let heads = []
  let colors = []
  let rows
  let cols
  let h
  let w
  let k = 0
  sk.setup = () => {
    rows = sk.random(5, 10)
    cols = rows * 2
    sk.frameRate(30)
    sk.createCanvas(sk.windowWidth, sk.windowHeight)
    let cells = {
      x: sk.width / (cols + 2),
      y: sk.height / (rows + 2)
    }
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        w = sk.random(cells.x / 4, cells.x / 2)
        h = w
        x = cells.x * i + cells.x
        y = cells.y * j + cells.y
        heads[k] = new Heads3(w, h, x, y)
        k++
      }
    }
  }
  sk.draw = () => {
    zoff = zoff + 0.1
    let t = sk.noise(zoff) * 2.5
    flick.wA = t + flick.wA * 0.2
    sk.background(col.verm, 0, col.azul, flick.wA + 1)
    sk.fill(255, 32 + flick.wA)
    for (let i = 0; i < heads.length; i++) {
      for (let j = 0; j < heads.length; j++) {
        if (i != j && heads[i].intersects(heads[j])) {
        }
      }
      heads[i].unsicher()
      heads[i].display()
    }
  }
  sk.windowResized = () => {
    sk.resizeCanvas(sk.windowWidth, sk.windowHeight)
    sk.background(col.verm, 0, col.azul, flick.wA + 1)
  }
  function Heads3 (w, h, x, y) {
    this.xoff = 0.01
    this.yoff = 0.02
    this.xoff = this.xoff + sk.random(0.0001, 0.01)
    this.yoff = this.yoff + sk.random(0.0001, 0.01)
    this.n = sk.noise(this.xoff) * 150
    this.m = sk.noise(this.yoff) * 150
    this.w = w
    this.h = h
    this.x = x
    this.y = y
    this.richt = { x: 1, y: 1, turnX: 1, turnY: 1 }
    this.wiggle = { x: 1, y: 1, w: 1, h: 1, wA: 1 }
    this.haveColor = false
    this.cor = sk.color(255, 255, 255, 10)
    this.unsicher = function () {
      this.wiggle.x = sk.random(-5, 5)
      this.wiggle.y = sk.random(-5, 5)
      this.xoff = 0.01
      this.yoff = 0.02
      this.xoff = this.xoff + sk.random(0.002, 0.04)
      this.yoff = this.yoff + sk.random(0.002, 0.04)
      this.n = sk.noise(this.xoff) * 20
      this.m = sk.noise(this.yoff) * 20
    }
    this.changeColor = function () {
      this.cor = sk.color(sk.random(57, 256), sk.random(23, 98), 5, 10)
      col.verm = sk.random(0, 93)
      col.azul = sk.random(5, 70)
    }
    this.intersects = function (other) {
      this.other = other
      var d = sk.dist(this.x, this.y, other.x, other.y)
      if (d < this.w / 2 + other.w / 2) {
        this.passColor(other)
        return true
      } else {
        return false
      }
    }
    this.passColor = function (other) {
      if (this.haveColor) {
        other.haveColor = true
        other.cor = sk.color(sk.random(57, 256), sk.random(23, 98), 0, 10)
      }
    }
    this.display = function () {
      sk.stroke(0, 0, 0, 127)
      sk.fill(this.cor)
      sk.ellipseMode(sk.CENTER)
      sk.ellipse(this.x, this.y, this.w, this.h)
      if (
        (this.x < this.w / 2 && this.wiggle.x < 0) ||
        (this.x > sk.width - this.w / 2 && this.wiggle.x > 0)
      ) {
        this.richt.turnX = -this.richt.turnX
        this.wiggle.x = this.wiggle.x * this.richt.turnX
        this.changeColor()
        this.haveColor = true
      }
      if (
        (this.y < this.h / 2 && this.wiggle.y < 0) ||
        (this.y > sk.height - this.h / 2 && this.wiggle.y > 0)
      ) {
        this.richt.turnY = -this.richt.turnY
        this.wiggle.y = this.wiggle.y * this.richt.turnY
        this.changeColor()
        this.haveColor = true
      }
      this.x = this.x + this.wiggle.x
      this.y = this.y + this.wiggle.y
    }
    return this
  }
}
