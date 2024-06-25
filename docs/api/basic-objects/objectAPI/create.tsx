import CodeBlock from '@theme/CodeBlock';

const Create = () => (
  <>
    <CodeBlock title="添加额外属性">
      {`const car = {
  make: 'Toyota',
  model: 'Corolla',
};

const myCar = Object.create(car, {
  year: {
    value: 2020,
    writable: true,
    enumerable: true,
  },
});

console.log(myCar.make); // 输出：'Toyota'
console.log(myCar.year); // 输出：2020
`}
    </CodeBlock>

    <CodeBlock title="建立原型链的继承关系">
      {`// 定义一个动物对象作为原型
const animal = {
  type: "Animal",
  sound() {
    console.log("Animal makes a sound");
  },
};

// 使用 Object.create() 创建一个新对象，并将 animal 设置为它的原型
const dog = Object.create(animal);
dog.type = "Dog"; // 可以覆盖原型中的属性

dog.bark = function () {
  console.log("Woof Woof!");
};

// 创建另一个对象，也继承自 animal 原型
const cat = Object.create(animal);
cat.type = "Cat";

cat.meow = function () {
  console.log("Meow Meow!");
};

// 测试继承关系和方法调用
console.log(dog.type); // 输出: Dog
dog.sound(); // 输出: Animal makes a sound
dog.bark(); // 输出: Woof Woof!

console.log(cat.type); // 输出: Cat
cat.sound(); // 输出: Animal makes a sound
cat.meow(); // 输出: Meow Meow!`}
    </CodeBlock>
  </>
);

export default Create;
