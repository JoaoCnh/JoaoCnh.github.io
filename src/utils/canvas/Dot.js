import PositionedElement from "./PositionedElement";

export default class Dot extends PositionedElement {
  color;
  alpha;
  vAlpha = 0;
  dvAlpha = -0.1;
  size = 1;

  minAlpha = 0.2;
  minSize = 1;

  constructor(x, y, color, alpha) {
    super(x, y);

    this.color = color;
    this.alpha = alpha;
    const r = Math.random();
    this.minAlpha = 0.1 + r * 0.2;
    this.minSize = 0.5 + r * 2;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = `rgba(${this.color.join(",")}, ${this.alpha})`;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI, false);
    ctx.closePath();
    ctx.fill();
  }

  setAlpha(alpha) {
    this.alpha = Math.max(this.minAlpha, alpha);
  }

  setSize(size) {
    this.size = Math.max(this.minSize, size);
  }

  setColor(color) {
    this.color = color;
  }
}
