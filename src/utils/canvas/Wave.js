import PositionedElement from "./PositionedElement";

export default class Wave extends PositionedElement {
  waveRadius = 0;
  vR = 4;

  waveWidth = 500;

  constructor(x, y, color) {
    super(x, y);

    this.color = color;
  }

  update(delta) {
    super.update(delta);

    this.waveRadius += delta * this.vR;
    this.waveWidth = Math.max(500, this.waveRadius * 0.4);
  }
}
