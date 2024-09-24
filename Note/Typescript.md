# So sánh tổng quản với js

Kiểu dữ liểu chặt chẽ hơn.

Đễ đọc, dễ bảo trì hơn.

Có interfaces giúp code trừu tượng hơn.

Có kỹ thuật decorators.

Có cấu trúc, modul hoắc các thành phần thông qua namespace.

Cú pháp giúp biểu diễn mọi thứ rõ ràng hơn.

Có kỹ thuật genetics và type.

# Types

Kiểu cơ bản nhất: string, number, boolen.

Kiểu mảng: array.

Kiểu bất kỳ: any (khi xác định được kiểu cụ thể).

## Gán kiểu cho biến

    <scope> <var_name>: <type> = <value>;

```ts
let urName: string = "Fall";
let num: number = 5;
```

# Hàm

Có thể gán kiểu cho các tham số gửi đến hàm cũng như kiểu mà hàm trả về

```ts
function quare(num: number): number {
	return num * num;
}
```

Có thể đặt thuộc tính cho tham số là **optional** bằng cách thêm ? vào cuối tên tham số.

# Kiểu object

Được xây dưng trên kiểu dữ liệu cơ bản

```ts
// The parameter's type annotation is an object type
function printCoord(pt: { x: number; y: number }) {
	console.log("The coordinate's x value is " + pt.x);
	console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });
```

# Kiểu union

Xác định biến thuộc 1 tổ hợp kiểu biến.

    <var_name>: type1 | type2| ... | typeN

```ts
function printId(id: number | string) {
	console.log("Your ID is: " + id);
}
```

Với một số phương thức riêng đi theo từng kiểu dữ liệu thì cần dùng cấu trúc điều kiện để kiểm tra.

# Kiểu aliases

Đặt tên cho kiểu dữ liệu tự định nghĩa.

```ts
type Point = {
	x: number;
	y: number;
};

// Exactly the same as the earlier example
function printCoord(pt: Point) {
	console.log("The coordinate's x value is " + pt.x);
	console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 100, y: 100 });
```

Có thể dùng từ khoá **type** để đặt tên cho kiểu Union.

```ts
type ID = number | string;
```

# Interfaces

Một cách khác để định nghĩa một kiểu dữ liệu.

Sự khác biệt giữa **interfaces** và **aliases**.

| Interfaces                      | Aliases                                        |
| ------------------------------- | ---------------------------------------------- |
| Mở rộng với key word **extend** | Mở rộng với ký tự &                            |
| Có thể thêm thuộc tính mới      | Không thể thêm thuộc tính mới sau khi khởi tạo |

# Kiểu Assertions

Dùng để xác định kiểu dữ cho giá trị không thuộc ts.

    <scope> <var_name> = <value> as <assertions type>

Có thể dùng nhiều hơn một **as**

```ts
const a = expr as any as T;
```

# Kiểu Literal

Dùng một giá trị cụ thể để xác định kiểu. Tên kiểu cũng chính là giá trị.

```ts
function printText(s: string, alignment: "left" | "right" | "center") {
	// ...
}
printText("Hello, world", "left");
printText("G'day, mate", "centre"); // raise error: Argument of type '"centre"' is not assignable to parameter of type '"left" | "right" | "center"'.
```

Có thể dùng tương tự với kiểu number.

## Literal Inference

Kiểu dữ liệu còn quyết định cách đọc, ghi của dữ liệu.

```ts
declare function handleRequest(url: string, method: "GET" | "POST"): void;

const req = { url: "https://example.com", method: "GET" };
handleRequest(req.url, req.method);
```

Nên trong ví dụ bên trên, **req.method** mong muốn kiểu string chứ không phải "GET".

Có 2 cách xử lý:

Cách 1:

```js
// Change 1: Dự định req.method luôn theo kiểu literal GET
const req = { url: "https://example.com", method: "GET" as "GET" };
// Change 2: bởi một lý do nào đó, req.method có giá trị GET
handleRequest(req.url, req.method as "GET");
```

Cách 2:

```ts
const req = { url: "https://example.com", method: "GET" } as const;
handleRequest(req.url, req.method);

// Sử dụng as const chuyển toàn bộ thuộc tính thành kiểu literal.
```

# Null và Undefined

Hai giá trị này có cách thức khác nhau dựa trên strictNullChecks (on/off).

    Off: cho phép 2 giá trị này được gánm truy cập bình thường cho các biến.

    On: phải kiểm tra giá trị trước khi làm làm việc với biến và phương thức.

    Non-null Assertion Operator: đặt đặt dấu ! sau biến để xác định rằng biến không chứa null or undefined.

# Enum

Có tồn tại

# Less Common

Kiểu bigint và symbol

# Generic

Sử dụng generic type trong typescript để tạo các funtion , interface, class... có tính linh động, tái sử dụng cao (Khiến kiểu dữ liệu trừu tượng hơn).

Sử dụng từ khoá extends để giới hạn kiểu dữ liệu của tham số thành kiểu dữ liệu cụ thể.

Sử dụng từ khoá extends keyof để ràng buộc kiểu dữ liệu là thuộc tính của một đối tượng khác.

Rule from docs:

    - When possible, use the type parameter itself rather than constraining it.

    -Always use as few type parameters as possible

    - If a type parameter only appears in one location, strongly reconsider if you actually need it

Tạm dịch:

    - Nếu có thể thì không giới hạn type tham số.

    - Dựng nhiều mẫu type nhất có thể.

    - Xem xét một số trường hợp có nhất thiết cần generic.

# Decorator

Có thể dùng với class declaration, method, accessor, property hay parameter.

Giúp mở rộng thành phần mà không thay đổi thành phần.
