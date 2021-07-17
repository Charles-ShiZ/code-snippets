// 寄生组合式继承
function Parent(name, age) {
  this.name = name;
  this.age = age;
}
Parent.prototype.getParentName = function() {
  return this.name;
};
function Child(name, age) {
  Parent.call(this, name, age);
  this.a = 'asdfasdf';
}

const prototype = Object.create(Parent.prototype);
prototype.constructor = Child;
Child.prototype = prototype;

Child.prototype.getAge = function() {
  return this.age;
};

const child = new Child('shizhanhong', 17);
console.log(child);
