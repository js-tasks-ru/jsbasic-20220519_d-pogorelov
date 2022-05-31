let calculator = {
// ваш код...
  a: null,
  b: null,
  read: function (a, b) {
    this.a = a;
    this.b = b;
  },
  sum: function () {
    return this.a + this.b;
  },
  mul: function () {
    return this.a * this.b;
  }
};

window.calculator = calculator;
