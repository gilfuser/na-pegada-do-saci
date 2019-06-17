const sk4 = sk => {
  let rect1 = { verm: 0, azul: 0, posX: 0, posY: 0 }
  let rect2 = { verm: 0, azul: 0, posX: 0, posY: 0 }
  let wcolor
  sk.setup = () => {
    sk.createCanvas(sk.displayWidth, sk.displayHeight - 30)
    rect1.verm = sk.random(0, 256)
    rect1.azul = sk.random(0, 127)
    rect2.verm = sk.random(0, 127)
    rect2.azul = sk.random(0, 256)
    sk.background(rect2.verm, 0, rect1.azul)
  }
  sk.windowResized = () => {
    sk.resizeCanvas(sk.windowWidth, sk.windowHeight)
    sk.background(rect2.verm, 0, rect1.azul)
  }
  sk.draw = () => {
    sk.noStroke()
    rect1.azul = sk.random(0, 127)
    rect1.verm = sk.random(0, 127)
    wcolor = sk.map(sk.mouseX, 0, sk.displayWidth, 255, 0)
    rect1.posX = sk.random(0, sk.displayWidth)
    rect1.posY = sk.random(0, sk.displayWidth)
    sk.fill(255, rect1.verm, wcolor, 25)
    sk.rect(
      sk.mouseX + rect1.posX * 0.25,
      sk.displayWidth - rect1.posY,
      sk.pmouseX,
      sk.pmouseY
    )
  }
  sk.mousePressed = () => {
    rect1.verm = sk.int(sk.random(256))
    rect2.azul = sk.int(sk.random(127))
    sk.background(rect1.verm, 0, rect2.azul)
  }
}
