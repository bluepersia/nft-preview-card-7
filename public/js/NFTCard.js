import { FluidScale } from '/node_modules/fluidscale/fluidScale.js';

export default class NFTCard {
  constructor(el) {
    this.el = el;
    this.fluidScale = new FluidScale(el, [375, 1200]);
  }
}
