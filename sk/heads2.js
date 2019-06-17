//    this.walk = random(1, 10);

function Heads2 (w, h, x, y) {
  // this.sizes = function(w, h, x, y){
  this.xoff = 0.01
  this.yoff = 0.02
  /* this.wiggle.w = random(-7, 7);
        this.wiggle.h = random(-5, 5); */
  this.xoff = this.xoff + random(0.0001, 0.01)
  this.yoff = this.yoff + random(0.0001, 0.01)
  this.n = noise(this.xoff) * 150
  this.m = noise(this.yoff) * 150
  this.w = w
  this.h = h
  this.x = x
  this.y = y
  this.richt = { x: 1, y: 1, turnX: 1, turnY: 1 }
  this.wiggle = { x: 1, y: 1, w: 1, h: 1, wA: 1 }
  //   }
  this.cor = color(255, 255, 255, 10)

  this.unsicher = function () {
    this.wiggle.x = random(-5, 5)
    this.wiggle.y = random(-5, 5)
    this.xoff = 0.01
    this.yoff = 0.02
    this.xoff = this.xoff + random(0.002, 0.04)
    this.yoff = this.yoff + random(0.002, 0.04)
    this.n = noise(this.xoff) * 20
    this.m = noise(this.yoff) * 20
  }
  this.display = function () {
    stroke(0)
    fill(this.cor)
    ellipseMode(CENTER)

    ellipse(this.x, this.y, this.w /** this.n */, this.h /** this.m */)

    if (
      (this.x <= this.w * 0.5 && this.wiggle.x < 0) ||
      (this.x >= width - this.w * 0.5 && this.wiggle.x > 0)
    ) {
      this.richt.turnX = -this.richt.turnX
      this.wiggle.x = this.wiggle.x * this.richt.turnX
      this.cor = color(random(57, 256), random(23, 98), 0, 10)
      col.verm = random(0, 206)
      col.azul = random(0, 129)
    }

    if (
      (this.y <= this.h * 0.5 && this.wiggle.y < 0) ||
      (this.y >= height - this.h * 0.5 && this.wiggle.y > 0)
    ) {
      this.richt.turnY = -this.richt.turnY
      this.wiggle.y = this.wiggle.y * this.richt.turnY
      this.cor = color(random(57, 256), random(23, 98), 0, 10)
    }

    this.x = this.x + this.wiggle.x
    this.y = this.y + this.wiggle.y
  }

  this.changeColor = function () {
    this.cor = color(random(57, 256), random(23, 98), 0, 10)
  }
  this.intersects = function (other) {
    var d = dist(this.x, this.y, other.x, other.y)
    return true
  }
  return this
}
