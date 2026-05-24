import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.js";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// Định nghĩa lớp Person theo chuẩn ES6
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  sayHello() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Khởi tạo một đối tượng cụ thể từ lớp Person
const person = new Person("John", 25);

// Gọi phương thức sayHello để in kết quả ra màn hình Console
person.sayHello();