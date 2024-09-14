# Tổng quan

Là tổng hợp một khối lệnh nhằm làm một việc gì đó.

# Defining functions

Được định nghĩa thông thường theo cấu trúc sau:

```js
function function_name(argument) {
	// body...
}
```

Gồm các thành phần chính:

	- Tên hàm.
	- Các tham số.
	- Các câu lệnh.

# Function expressions

Cấu trúc:

```js
const function_name = function(argument){
	// body...
}
```

Không thể gọi trước khi khai báo (not hoisted). Giới hạn vùng sử dụng của hàm.

Function expressions rất tiện khi cần truyền hàm đến hàm khác như một tham số.

# Arrow functions

Còn được gọi là fat arrow

```js
() => expression

param => expression

(param) => expression

(param1, paramN) => expression

() => {
  statements
}

param => {
  statements
}

(param1, paramN) => {
  statements
}
```

Có thể dùng với keyword async.

Gắn arrow func vào biến để thực hiện đệ quy(recursion).

Không thể sử dụng để dựng method.

Không thể dùng như constructor.

Không thể dùng làm generators với yield trong các trường hợp thông thường.

# Tham số

## Using the arguments object

Tham số của hàm được quản lý giống như danh sách(array).

```js
arguments[i];
// i [0..arguments.length]
```

Sử dụng arguments[i] giúp truy cập vào tất cả tham số được gửi tới hàm mà không bị giới hạn khai báo của hàm.

## Default parameters

Theo ES6, ta có thể xác định giá trị mặc định cho tham số khi khai báo hàm.

```js
function multiply(a, b = 1) {
  return a * b;
}

console.log(multiply(5)); // 5

```

## Rest parameters

Là một cú pháp giúp khai báo một số lượng tham số không xác định dưới dạng danh sách khi khai báo hàm.

```js
function multiply(multiplier, ...theArgs) {
  return theArgs.map((x) => multiplier * x);
}

const arr = multiply(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]

```

# Function

## Hoisting

Nói về việc có thể gọi hàm trước khi khai báo. Chỉ có ở **function definition**.

## Nested func

Nói tới việc hàm(child func) được định nghĩa trong 1 hàm(parent func) khác.

## Scope

Biến được định nghĩa trong hàm không thể truy cập được từ bên ngoài do phạm vi(scope) được định nghĩa trong phạm vi hàm. Tuy nhiên, hàm có thể truy cập tất cả các biến hay hàm được khai báo trong cùng phạm vi.

Child func có thể truy cập tới biến ở parent func.

## First-class Function

Hàm có thể dùng như một biến:

	- Có thể truyền tới hàm khác như tham số.
	- Một hàm có thể trả về hàm.
	- Có thể gắn hàm vào biến.

Hàm nhận tham số là một hàm hoặc trả về hàm được gọi là **higher-order function**.
Hàm được truyền đến hàm khác như một tham số được gọi là **callback function**.