const sk2 = sk => {
  let verm = sk.int(sk.random(256))
  let azul = sk.int(sk.random(127))
  sk.setup = () => {
    sk.createCanvas(sk.windowWidth, sk.windowHeight)
    sk.background(verm, 0, azul)
  }
  sk.windowResized = () => {
    sk.resizeCanvas(sk.windowWidth, sk.windowHeight)
    sk.background(verm, 0, azul)
  }
  sk.draw = () => {
    sk.noStroke()
    sk.fill(255, 255, 255, 25)
    sk.rect(sk.mouseX, sk.mouseY, sk.pmouseX, sk.pmouseY)
  }
  sk.mousePressed = () => {
    verm = sk.int(sk.random(256))
    azul = sk.int(sk.random(127))
    sk.background(verm, 0, azul)
  }
}
