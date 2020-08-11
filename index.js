class Circle {
  constructor(radius){
    this.radius = radius;
  }
  get diameter() {
    return this.radius * 2
  }

  set diameter(input) {
    this._diameter = input;
  }

  get circumference() {
    return this.diameter * Math.PI
  }

  set circumference() {
    
  }
  
  get area() {
    return (this.radius * this.radius ) * Math.PI
  }
}
