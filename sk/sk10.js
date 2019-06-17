const sk10 = sk => {
  // const { sk.width, sk.height, sk.windowHeight, sk.windowWidth, sk.CENTER } = sk
  let flick = { wX: 0, wY: 0, wW: 0, wH: 0, wA: 0 }
  let col = { verm: 0, verde: 0, azul: 0 }
  let zoff = 0.0
  let heads = []
  sk.setup = () => {
    sk.createCanvas(sk.windowWidth, sk.windowHeight)
    // let space = sk.windowWidth * sk.windowHeight
    const multi = 60
    sk.frameRate(30)
    for (let i = 0; i <= multi; i++) {
      heads[i] = new Heads1()
      heads[i].sizes(
        sk.random(sk.windowHeight * 0.005, sk.windowHeight * 0.05),
        sk.random(sk.windowHeight * 0.005, sk.windowHeight * 0.05)
      )
    }
  }
  sk.draw = () => {
    zoff = zoff + 0.1
    let t = sk.noise(zoff) * 2.5
    flick.wA = t + flick.wA * 0.2
    sk.background(col.verm, 0, col.azul, flick.wA)
    sk.fill(255, 32 + flick.wA)
    for (let i = 0; i < heads.length; i++) {
      heads[i].unsicher()
      heads[i].display()
    }
  }
  sk.windowResized = () => {
    sk.resizeCanvas(sk.windowWidth, sk.windowHeight)
    sk.background(col.verm, 0, col.azul, flick.wA)
  }
function Heads1 () {
  this.sizes = function (w, h) {
    this.xoff = 0.01
    this.yoff = 0.02
    this.xoff = this.xoff + sk.random(0.0001, 0.01)
    this.yoff = this.yoff + sk.random(0.0001, 0.01)
    this.n = sk.noise(this.xoff) * 150
    this.m = sk.noise(this.yoff) * 150
    this.w = w
    this.h = h
    this.x = sk.random(this.w, sk.width - this.w)
    this.y = sk.random(this.h, sk.height - this.h)
    this.richt = { x: 1, y: 1, turnX: 1, turnY: 1 }
    this.wiggle = { x: 1, y: 1, w: 1, h: 1, wA: 1 }
  }
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
  this.display = function () {
    sk.stroke(0)
    sk.fill(this.cor)
    sk.ellipseMode(sk.CENTER)
    sk.ellipse(this.x, this.y, this.w * this.n, this.h * this.m)
    if (
      (this.x <= this.w * 0.5 && this.wiggle.x < 0) ||
      (this.x >= sk.width - this.w * 0.5 && this.wiggle.x > 0)
    ) {
      this.richt.turnX = -this.richt.turnX
      this.wiggle.x = this.wiggle.x * this.richt.turnX
      this.cor = sk.color(sk.random(57, 256), sk.random(23, 98), 0, 10)
      col.verm = sk.random(0, 206)
      col.azul = sk.random(0, 129)
    }

    if (
      (this.y <= this.h * 0.5 && this.wiggle.y < 0) ||
      (this.y >= sk.height - this.h * 0.5 && this.wiggle.y > 0)
    ) {
      this.richt.turnY = -this.richt.turnY
      this.wiggle.y = this.wiggle.y * this.richt.turnY
      this.cor = sk.color(sk.random(57, 256), sk.random(23, 98), 0, 10)
    }

    this.x = this.x + this.wiggle.x
    this.y = this.y + this.wiggle.y
  }

  this.changeColor = function () {
    this.cor = sk.color(sk.random(57, 256), sk.random(23, 98), 0, 10)
  }
  this.intersects = function (other) {
    var d = sk.dist(this.x, this.y, other.x, other.y)
    return true
  }
  return this
}
}
