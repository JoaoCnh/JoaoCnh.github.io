export default class PositionedElement {
  x;
  y;
  vx = 0;
  vy = 0;

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  setSpeed(vx, vy) {
    this.vx = vx;
    this.vy = vy;
  }

  update(delta) {
    this.x += this.vx * delta;
    this.y += this.vy * delta;
  }
}
