const sk3 = sk => {
  let verm = sk.int(sk.random(256))
  let azul = sk.int(sk.random(127))

  sk.setup = () => {
    sk.createCanvas(sk.windowWidth, sk.windowHeight)
    sk.frameRate(15)
    sk.background(verm, 0, azul)
  }
  sk.windowResized = () => {
    sk.resizeCanvas(sk.windowWidth, sk.windowHeight)
    sk.background(verm, 0, azul)
  }
  sk.draw = () => {
    sk.stroke(255, 255, 255, 127)
    sk.rect(sk.mouseX, sk.mouseY, (1 / sk.pmouseX) * 1000, (1 / sk.pmouseY) * 1000)
  }
  sk.mousePressed = () => {
    verm = sk.int(sk.random(256))
    azul = sk.int(sk.random(127))
    sk.background(verm, 0, azul)
  }
}
