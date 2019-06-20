const sk5 = sk => {
  let wiggle = { wX: 0, wY: 0, wW: 0, wH: 0, wA: 0 }
  let col = { verm: 0, azul: 0 }
  let mouseXtemp = 0
  let mouseYtemp = 0
  let richt = { x: 0, y: 0, turnX: 1, turnY: 1 }
  let xoff = 0.0
  let yoff = 0.02
  sk.setup = () => {
    sk.createCanvas(sk.windowWidth, sk.windowHeight)
    richt.x = sk.random(100, sk.width - 100)
    richt.y = sk.random(100, sk.height - 100)
    sk.frameRate(30)
  }
  sk.draw = () => {
    sk.background(col.verm, 0, col.azul, wiggle.wA)
    sk.noStroke()
    mouseXtemp = sk.abs(mouseXtemp - sk.mouseX)
    mouseYtemp = sk.abs(mouseYtemp - sk.mouseY)
    wiggle.wX = sk.random(-5, 5)
    wiggle.wY = sk.random(-5, 5)
    wiggle.wW = sk.random(-7, 7)
    wiggle.wH = sk.random(-5, 5)
    wiggle.wA = sk.random(0, 3)
    sk.fill(255, 32 + wiggle.wA)
    xoff = xoff + 0.01
    xoff = yoff + 0.02
    let n = sk.noise(xoff) * 200
    let m = sk.noise(yoff) * 100
    sk.ellipse(
      richt.x,
      richt.y,
      n + wiggle.wW - (mouseYtemp + mouseXtemp) * 1,
      n + wiggle.wH - (mouseYtemp + mouseXtemp) * 1
    )
    richt.x = richt.x + wiggle.wX + richt.turnX
    richt.y = richt.y + wiggle.wY + richt.turnY
    if (richt.x >= sk.windowWidth - 30 || richt.x <= 30) {
      richt.turnX = richt.turnX * -1.02
      wiggle.wX = wiggle.wX * sk.abs(richt.turnX * 1.15)
    }
    if (richt.y >= sk.windowHeight - 30 || richt.y <= 30) {
      richt.turnY = richt.turnY * -1.02
      wiggle.wY = wiggle.wY * sk.abs(richt.turnY * 1.15)
    }
    wiggle.wX = wiggle.wX * sk.abs(richt.turnX)
    wiggle.wY = wiggle.wY * sk.abs(richt.turnY)
    mouseXtemp = sk.mouseX
    mouseYtemp = sk.mouseY
  }
  sk.windowResized = () => {
    sk.resizeCanvas(sk.windowWidth, sk.windowHeight)
    sk.background(col.verm, 0, col.azul, wiggle.wA)
  }
  sk.mousePressed = () => {
    richt.x = sk.random(100, sk.width - 100)
    richt.y = sk.random(100, sk.height - 100)
    richt.turnX = sk.int(sk.random(-1.6, 1.6))
    richt.turnY = sk.int(sk.random(-1.6, 1.6))
    col.verm = sk.random(0, 256)
    col.azul = sk.random(0, 129)
  }
}
