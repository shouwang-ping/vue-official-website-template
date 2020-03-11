// ES5 的继承，实质是先创造子类的实例对象this，然后再将父类的方法添加到this上面（Parent.apply(this)）。
// ES6 的继承机制完全不同，实质是先将父类实例对象的属性和方法，加到this上面（所以必须先调用super方法），然后再用子类的构造函数修改this。
// es5继承======================================
// function Point1(x, y) {
//   this.x = x
//   this.y = y
// }
// Point1.prototype.draw = function() {
//   console.log('父类1')
// }
// function ColorPoint2(color) {
//   this.color = color;
// }
// Point1.apply(this)
// es6继承======================================
class Point2 {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
  draw() {
    console.log('父类2')
  }
}
class ColorPoint2 extends Point2 {
  constructor(x, y, color) {
    super(x, y); // 调用父类的constructor(x, y)
    this.color = color;
  }
  childDraw() {
    super.draw();
    console.log(this.color)
    return this.x
  }
}
let cp2 = new ColorPoint2(25, 8, 'green');
console.log(cp2.childDraw())