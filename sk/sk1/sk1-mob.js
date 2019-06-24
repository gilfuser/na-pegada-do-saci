const sk1 = sk => {
  let tgfs
  let fs
  let x
  let y
  let w
  let h
  let d
  sk.setup = () => {
    sk.createCanvas(sk.displayWidth, sk.displayHeight)
    sk.background(255, 0, 200)
    w = 30
    h = 30
    x = 30
    y = sk.displayHeight - h
    fs = false
    tgfs = new ToggleFs(x, y, w, h, fs)
    // tgfs.sk.mouseOver(tgfs.changeGray())
  }
  sk.windowResized = () => {
    sk.resizeCanvas(sk.displayWidth, sk.displayHeight)
    sk.background(255, 0, 200)
    tgfs.btn()
  }
  sk.touchStarted = () => {
    fs = !fs
    let mX = sk.mouseX
    let mY = sk.mouseY
    tgfs.toggle(fs, mX, mY)
  }
  sk.touchMoved = () => {
    sk.rect(sk.mouseX, sk.mouseY, 30, 30)
    return false
  }
  sk.mousePressed = () => {
    sk.background(255, 0, 200)
  }
  sk.draw = () => {
    sk.noStroke()
    tgfs.btn() // isFull = tgfs.isNotFull
    sk.fill(255, 255, 255, 25)
  }
}
document.ontouchmove = function (event) {
  event.preventDefault()
}

const myP5 = new p5(sk1, 'sk')
