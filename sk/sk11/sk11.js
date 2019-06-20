const sk11 = sk => {
  const {
    width,
    height,
    windowHeight,
    windowWidth,
    CENTER,
  } = sk
  let flick = { wX: 0, wY: 0, wW: 0, wH: 0, wA: 0 }
  let col = { verm: 0, verde: 0, azul: 0 }
  let zoff = 0.0
  let heads = []
  let colors = []
  let rows
  let cols
  sk.setup = () => {
    rows = sk.random(5, 20)
    cols = rows * 2
    sk.frameRate(30)
    sk.createCanvas(windowWidth, windowHeight)
    for (let i = 0; i < cols; i++) {
      heads[i] = []
      for (let j = 0; j < rows; j++) {
        w = sk.random(windowHeight / (rows * 4), windowHeight / (rows * 2))
        h = sk.random(windowHeight / (rows * 4), windowHeight / (rows * 2))
        x = (windowWidth / cols) * i + windowWidth / cols / 2
        y = (windowHeight / rows) * j + windowHeight / rows / 2
        heads[i][j] = new Heads2(w, h, x, y)
      }
    }
  }
  sk.draw = () => {
    zoff = zoff + 0.1
    let t = sk.noise(zoff) * 2.5
    flick.wA = t + flick.wA * 0.2
    sk.background(col.verm, 0, col.azul, flick.wA)
    sk.fill(255, 32 + flick.wA)
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        x = i * 30
        y = j * 30
        sk.stroke(0)
        heads[i][j].unsicher()
        heads[i][j].window()
      }
    }
  }
  sk.windowResized = () => {
    sk.resizeCanvas(sk.windowWidth, sk.windowHeight)
    sk.background(col.verm, 0, col.azul, flick.wA)
  }
  function Heads2 (w, h, x, y) {
    // this.sizes = function(w, h, x, y){
    this.xoff = 0.01
    this.yoff = 0.02
    /* this.wiggle.w = random(-7, 7);
        this.wiggle.h = random(-5, 5); */
    this.xoff = this.xoff + sk.random(0.0001, 0.01)
    this.yoff = this.yoff + sk.random(0.0001, 0.01)
    this.n = sk.noise(this.xoff) * 150
    this.m = sk.noise(this.yoff) * 150
    this.w = w
    this.h = h
    this.x = x
    this.y = y
    this.richt = { x: 1, y: 1, turnX: 1, turnY: 1 }
    this.wiggle = { x: 1, y: 1, w: 1, h: 1, wA: 1 }
    //   }
    this.cor = sk.color(255, 255, 255, 10)

    this.unsicher = function () {
      this.wiggle.x = sk.random(-5, 5)
      this.wiggle.y = sk.random(-5, 5)
      this.xoff = 0.01
      this.yoff = 0.02
      this.xoff = this.xoff + sk.random(0.002, 0.04)
      this.yoff = this.yoff + sk.random(0.002, 0.04)
      this.n = sk.noise(this.xoff) * 20
      this.m = sk.noise(this.yoff) * 20
    }
    this.window = function () {
      sk.stroke(0)
      sk.fill(this.cor)
      sk.ellipseMode(CENTER)

      sk.ellipse(this.x, this.y, this.w /** this.n */, this.h /** this.m */)

      if (
        (this.x <= this.w * 0.5 && this.wiggle.x < 0) ||
        (this.x >= width - this.w * 0.5 && this.wiggle.x > 0)
      ) {
        this.richt.turnX = -this.richt.turnX
        this.wiggle.x = this.wiggle.x * this.richt.turnX
        this.cor = sk.color(sk.random(57, 256), sk.random(23, 98), 0, 10)
        col.verm = sk.random(0, 206)
        col.azul = sk.random(0, 129)

        //  this.wiggle.x = abs(this.wiggle.x) * this.richt.turnX * 1.15;
      }

      if (
        (this.y <= this.h * 0.5 && this.wiggle.y < 0) ||
        (this.y >= height - this.h * 0.5 && this.wiggle.y > 0)
      ) {
        this.richt.turnY = -this.richt.turnY
        this.wiggle.y = this.wiggle.y * this.richt.turnY
        this.cor = sk.color(sk.random(57, 256), sk.random(23, 98), 0, 10)
      }

      this.x = this.x + this.wiggle.x
      this.y = this.y + this.wiggle.y
      //   this.richt.y = this.richt.y + this.wiggle.y;
      // this.wiggle.x = this.wiggle.x * abs(this.richt.turnX);
      // this.wiggle.y = this.wiggle.y * abs(this.richt.turnY);
    }

    this.changeColor = function () {
      this.cor = sk.color(sk.random(57, 256), sk.random(23, 98), 0, 10)
    }
    /* this.clicked = function(){
        var d = dist(this.x, this.y, mouseX, mouseY);
        if ( (d < (this.w)) && (d < (this.w)) ){
            this.changeColor();
          }
    } */
    /* this.mouseXtemp = mouseX;
        this.mouseYtemp = mouseY; */
    this.intersects = function (other) {
      //  this.other = other;
      // this.changeColor();
      var d = sk.dist(this.x, this.y, other.x, other.y)
      //  if( d < this.w + other.w ){
      return true
      //  } else { return false;
      //       }
    }
    /*  this.drawDist = function(){

        fill(0);
        var x1 = this.x;
        var y1 = this.y;
        var x2 = mouseX;
        var y2 = mouseY;
        line(x1, y1, x2, y2);
        ellipse(x1, y1, 7, 7);
        ellipse(x2, y2, 7, 7);

        // d is the length of the line
        // the distance from point 1 to point 2.
        var d = int(dist(x1, y1, x2, y2));
        if ( this.d > int(this.w) ){
                        this.cor = color(random(57, 256), random(23, 98), 0, 10 );
            };
        // Let's write d along the line we are drawing!
        push();
        translate( (x1+x2)/2, (y1+y2)/2 );
        rotate( atan2(y2-y1,x2-x1) );
        text(nfc([this.w, "   ", d],1,1), 0, -5);
        pop(); */
    //  }
    return this
  }
}
