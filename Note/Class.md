# Khái quát

Class là khuôn mẫu để tạo ra các object. Trong đó, dữ liệu và các câu lệnh làm việc với dữ liệu được "đóng gói" lại. Class trong js có nhưng đã trưng chung và cũng có cú pháp và ngữ nghĩa riêng.

# Chi tiết

## Định nghĩa class

Class đơn giản là 1 hàm đặc biệt, và giống với hàm có thể khai báo func expre và func declara, class cũng có thể khai báo giống vậy.

```js
// Declaration
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

// Expression; the class is anonymous but assigned to a variable
const Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

// Expression; the class has its own name
const Rectangle = class Rectangle2 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
```

	Temporal Dead Zone (TDZ): Từ điểm thực thi dòng lệnh đầu tiên cho tới khi biến được khai báo và khởi tạo, biến sẽ được tính là chưa khởi tạo với bất kỳ giá trị. Mọi truy cập vào biến sẽ nhận lỗi RefErr. Biến được định nghĩa với let, const, class đều nằm trong phạm trù này.

	Khai báo 1 đối tượng class với var thì ?

## Body class

Là nơi định nghĩa các thành phần của class như phương thức, phương thức khởi tạo.

Thành phần của class có thể phần thành 3 khía cạnh:

	- Kind: getter, setter, method or field
	- Location: static or instance.
	- Visibility: public or private.

Từ đó, ta có 16 khả dụng khác nhau.

## Constructor

Đây là một phương thức đặc biệt khi khởi tạo 1 đối tượng từ lớp và chỉ có duy nhất một constructor trong class.

## Method

Được định nghĩa trong lớp và các đối tượng được khai báo từ lớp có thể dùng.

## Static

Các phương thức, thuộc tính được định nghĩa với từ khoá **static** sẽ được truy cập thẳng từ class mà không cần khi báo đối tượng. Từ đó giúp tiết kiệm bộ nhớ, và tiện lợi khi có một thuộc tính chung về class.

Thư viện math trong các ngôn ngữ là một ví dụ tiêu biểu khi nói đến static.

## Field declarations

	Field: trường thông tin đối tượng? Chắc do xuất phát từ việc sinh ra để làm việc với html.

Public field:

```js
class Rectangle {
  height = 0;
  width;
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```

Private field:

```js
class Rectangle {
  #height = 0;
  #width;
  constructor(height, width) {
    this.#height = height;
    this.#width = width;
  }
}
```

Có thể khai báo giá trị mặc định cho field, nếu không có sẽ được set là undefined.

## Inheritance

Từ khoá extends dùng để khái báo lớp kế thừa từ 1 lớp khác.

```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name); // call the super class constructor and pass in the name parameter
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}

const d = new Dog("Mizuki");
d.speak(); // Mizuki barks
```