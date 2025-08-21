/* eslint-disable import/extensions */
/* eslint-disable class-methods-use-this */
// 11. EVCar
import Car from './10-car.js';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  cloneCar() {
    return new Car();
  }
}
