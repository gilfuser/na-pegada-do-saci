function ToggleFs (x, y, w, h, fs) {
  this.x = x
  this.y = y
  this.w = w
  this.h = h
  this.cor = 'rgb(191, 0, 150)'
  this.fs = fs
  this.img1 = myP5.loadImage('../../icons/expand-solid.png')

  this.toggle = function (fs, mX, mY) {
    let d = myP5.int(myP5.dist(this.x, this.y, mX, mY))
    if (d < this.w / 2) {
      myP5.fullscreen(fs)
      if (fs === false) {
        this.img1 = myP5.loadImage('../../icons/expand-solid.png')
      } else {
        this.img1 = myP5.loadImage('../../icons/contract-solid.png')
      }
    }
  }
  this.btn = function () {
    myP5.fill(this.cor)
    myP5.noStroke()
    myP5.rectMode(myP5.CENTER)
    myP5.rect(this.x, this.y, 30, 30)
    myP5.image(this.img1, this.w / 2, myP5.displayHeight - 45)
  }
  this.changeGray = function (cor) {
    // let d = myP5.int(myP5.dist(this.x, this.y, myP5.mouseX, myP5.mouseY))
    // if (d < this.w / 2) {
    this.cor = cor
    // } else {
    // this.cor =
    // }
  }
}
