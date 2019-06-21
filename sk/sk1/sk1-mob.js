const sk1 = sk => {
  sk.setup = () => {
    sk.createCanvas(sk.displayWidth, sk.displayHeight)
    sk.background(255, 0, 200)
  }
  sk.windowResized = () => {
    sk.resizeCanvas(sk.displayWidth, sk.displayHeight)
    sk.background(255, 0, 200)
  }
  sk.draw = () => {
    sk.noStroke()
    sk.fill(255, 255, 255, 25)
  }
  sk.touchMoved = () => {
    sk.rect(sk.mouseX, sk.mouseY, 30, 30)
    return false
  }
  sk.mousePressed = () => {
    sk.background(255, 0, 200)
  }
}

/* prevents the mobile browser from processing some default
 * touch events, like swiping left for "back" or scrolling
 * the page.
 */
document.ontouchmove = function(event) {
    event.preventDefault();
};

const myP5 = new p5(sk1, 'sk')
