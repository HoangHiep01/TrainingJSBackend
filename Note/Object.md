# Tổng quan

Kiểu Object là 1 trong những kiểu dữ liệu của js. Kiểu dữ liệu có cấu trúc key:value.

# Khởi tạo

## Literal Form

```js
const obj = {
    key1: value1,
    key2: value2,
    ...
};
```

## Constructed Form

Sử dụng một hàm hoặc từ khoá new để tạo một Object và thêm các thuộc tính.

```js
function obj(value1, value2, ...) {
    this.key1 = value1;
    this.key2 = value2;
    ...
}
```

```js
let obj = new Object();
obj.key1 = value1;
obj.key2 = value2;
...
```

Có thể xoá đi thuộc tính với từ khoá delete.

## Computed Properties

Sử dụng một biến hoặc biểu thức làm tên thuộc tính bằng cách đặt nó trong dấu ngoặc [] - đây được gọi là thuộc tính được tính toán.

```js
const x = 'key';

const obj = {
  [x]: 7,
}

obj.khoa // 7
```

## Method

Một đối tượng ngoài các thuộc tính ra nó còn chứa hàm gọi là phương thức. Một phương thức là một hàm liên kết với một object, hoặc, có thể nói phương thức là một thuộc tính của object có giá trị là một hàm.

```js
const atom = {
  value: 1,

  addValue(value) {
    return atom.value + value;
  },
};
```

# Built in