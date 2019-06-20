const sk1 = sk => {
  sk.setup = () => {
    sk.createCanvas(sk.windowWidth, sk.windowHeight)
    sk.background(255, 0, 200)
  }
  sk.windowResized = () => {
    sk.resizeCanvas(sk.windowWidth, sk.windowHeight)
    sk.background(255, 0, 200)
  }
  sk.draw = () => {
    sk.noStroke()
    sk.fill(255, 255, 255, 25)
    sk.rect(sk.mouseX, sk.mouseY, 30, 30)
  }
  sk.mousePressed = () => {
    sk.background(255, 0, 200)
  }
}

// let day1_1 = new p5(sk1, 'p5sketch')
