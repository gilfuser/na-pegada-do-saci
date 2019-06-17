const sk9 = sk => {
  let wiggle = { wX: 0, wY: 0, wW: 0, wH: 0, wA: 0 }
  let col = { verm: 0, verde: 0, azul: 0 }
  let mouseXtemp = 0
  let mouseYtemp = 0
  let xoff = 0.0
  let yoff = 0.02
  let posXloop
  let posYloop
  let largura = 100
  let altura = 100
  // let nums = [20, 16, 84, 92, 139]
  // let num = 184
  // let palavras = ['amor', 'saúde', 'esperanca', 'música', 'supercollider']
  let index = 0
  let uoff = 0.0
  let voff = 0.0
  let zoff = 0.0
  let noiseScale = 0.02
  let heads = []
  sk.setup = () => {
    sk.createCanvas(sk.displayWidth, sk.displayHeight)
    for (i = 0; i < 100; i++) {
      heads[i] = new Heads()
    }
  }
  sk.draw = () => {
    mouseXtemp = mouseXtemp - sk.mouseX
    mouseYtemp = mouseYtemp - sk.mouseY
    zoff = zoff + 0.1
    let t = sk.noise(zoff) * 5.5
    wiggle.wA = t + wiggle.wA * 0.1
    sk.background(col.verm, 0, col.azul, wiggle.wA)
    sk.fill(255, 32 + wiggle.wA)
    // fill(255)
    // textSize(25)
    // text(palavras[index], 20, 200)
    for (let i = 0; i < heads.length; i++) {
      heads[i].jitter()
      heads[i].display()
    }
    mouseXtemp = sk.mouseX
    mouseYtemp = sk.mouseY
  }
  sk.windowResized = () => {
    sk.resizeCanvas(sk.windowWidth, sk.windowHeight)
    sk.background(col.verm, 0, col.azul, wiggle.wA)
  }
  sk.mousePressed = () => {
    for (let i = 0; i < 11; i++) {
      heads[i].x = sk.random(0.1, sk.displayWidth)
      heads[i].xOfst = sk.random(0.1, sk.displayWidth)
      heads[i].y = sk.random(0.1, sk.displayHeight)
      heads[i].yOfst = sk.random(0, sk.displayHeight)
      heads[i].w = sk.random(0.1, sk.displayHeight * 0.2)
      heads[i].h = sk.random(0.1, sk.displayHeight * 0.2)
      heads[i].wB = sk.random(0.1, sk.displayHeight * 0.2)
      heads[i].hB = sk.random(0.11, sk.displayHeight * 0.2)
      heads[i].walk = sk.random(0.1, 10.1)
    }
    col.verm = sk.random(0, 250)
    col.azul = sk.random(0, 129)
  }

  Heads = function () {
    this.x = sk.random(0.1, sk.displayWidth)
    this.xOfst = sk.random(0.1, sk.displayWidth)
    this.y = sk.random(0.1, sk.displayHeight)
    this.yOfst = sk.random(0, sk.displayHeight)
    this.w = sk.random(sk.displayHeight * 0.01, sk.displayHeight * 0.2)
    this.h = sk.random(sk.displayHeight * 0.01, sk.displayHeight * 0.2)
    this.wB = sk.random(sk.displayHeight * 0.01, sk.displayHeight * 0.2)
    this.hB = sk.random(sk.displayHeight * 0.01, sk.displayHeight * 0.2)
    this.walk = sk.random(0.1, 10.1)
    this.display = function () {
      sk.stroke(255)
      sk.fill(255, 255, 255, 20)
      sk.rect(this.x, this.y, this.w, this.h)
    }
    this.jitter = function () {
      xoff = xoff + 0.51
      yoff = yoff + 0.51
      uoff = xoff + 0.51
      voff = yoff + 0.51

      let m = sk.map(sk.noise(yoff), 0, 1, -0.5, 0.5) * this.walk
      let n = sk.map(sk.noise(yoff), 0, 1, -0.5, 0.5) * this.walk
      let u = sk.map(sk.noise(uoff), 0, 1, -0.5, 0.5) * this.walk
      let v = sk.map(sk.noise(voff), 0, 1, -0.5, 0.5) * this.walk
      this.x = -this.x
      this.w = this.w + u
      this.w = -this.w
      this.h = this.h + v
      this.h = -this.h
      this.x = this.xOfst - this.w * 0.5 + n
      this.x = this.x + n
      this.y = this.yOfst - this.h * 0.5 + m
      this.y = this.y + m
    }
    return this
  }
  sk.mouseReleased = () => {
    posX = sk.random(largura, sk.displayWidth - largura)
    posY = sk.random(altura, sk.displayHeight - altura)
    col.verm = sk.random(0, 256)
    col.azul = sk.random(0, 129)
    sk.background(col.verm, 0, col.azul)
  }
}
