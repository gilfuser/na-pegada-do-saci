const sk7 = sk => {
  let wiggle = { wX: 0, wY: 0, wW: 0, wH: 0, wA: 0 }
  let col = { verm: 0, verde: 0, azul: 0 }
  let mouseXtemp = 0
  let mouseYtemp = 0
  let xoff = 0.0
  let yoff = 0.02
  let posX
  let posY
  let largura = 100
  let altura = 100
  sk.setup = () => {
    sk.createCanvas(sk.windowWidth, sk.windowHeight)
    posX = sk.windowWidth * 0.5 - largura * 0.5
    posY = sk.windowHeight * 0.5 - altura * 0.5
    sk.frameRate(30)
  }
  sk.draw = () => {
    sk.background(col.verm, 0, col.azul, wiggle.wA)
    sk.noStroke()
    mouseXtemp = sk.abs(mouseXtemp - sk.mouseX)
    mouseYtemp = sk.abs(mouseYtemp - sk.mouseY)
    wiggle.wX = sk.random(-1 * mouseXtemp, mouseXtemp)
    wiggle.wY = sk.random(-1 * mouseYtemp, mouseYtemp)
    wiggle.wW = sk.random(-1 * mouseXtemp, mouseXtemp)
    wiggle.wH = sk.random(-1 * mouseYtemp, mouseYtemp)
    wiggle.wA = sk.random(0, 3)
    sk.fill(255, 32 + wiggle.wA)
    xoff = xoff + 0.01
    xoff = yoff + 0.02
    let n = sk.noise(xoff) * 10
    let m = sk.noise(yoff) * 10
    largura = wiggle.wW * n - (mouseYtemp + mouseXtemp) + 100
    altura = wiggle.wH * m - (mouseYtemp + mouseXtemp) + 100
    for (let x = 0; x < 10; x++) {
      posX = sk.random(-0.5 * largura, sk.windowWidth - largura * 0.5)
      posY = sk.random(-0.5 * altura, sk.windowHeight - altura * 0.5)
      sk.rect(posX, posY, largura + mouseXtemp, altura + mouseYtemp)
    }
    if (
      sk.mouseX > posX &&
      sk.mouseX < posX + largura &&
      sk.mouseY > posY &&
      sk.mouseY < posY + altura
    ) {
      if (sk.mouseIsPressed) {
        largura = largura + (mouseYtemp + mouseXtemp)
        altura = altura + (mouseYtemp + mouseXtemp)
        posX = sk.mouseX - largura * 0.5
        posY = sk.mouseY - altura * 0.5
      }
    }
    posX = posX + wiggle.wX
    posY = posY + wiggle.wY
    mouseXtemp =sk. mouseX
    mouseYtemp =sk. mouseY
  }
  sk.windowResized = () => {
    sk.resizeCanvas(sk.windowWidth, sk.windowHeight)
    sk.background(col.verm, 0, col.azul, wiggle.wA)
  }
  sk.mouseReleased = () => {
    posX = sk.random(largura, sk.windowWidth - largura)
    posY = sk.random(altura, sk.windowHeight - altura)
    col.verm = sk.random(0, 256)
    col.azul = sk.random(0, 129)
  }
}
