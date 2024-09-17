# Tổng quan

Giúp lưu trữ dữ liệu theo dạng danh sách, truy xuất dữ liệu theo chỉ mục của phần tử được lưu trong danh sách

# Khai báo sử dụng

Khai báo một mảng.

```js
// Cách 1:
arr1 = [1,2,3];

// Sử dụng constructor.
// Cách 2:
arr2 = new Array(1,2,3);
// Cách 3
arr3 = Array(1,2,3);

// Nếu gửi đển constructor 1 số nguyên dương n thì ta đang khai báo mảng có n phần tử trống
arr4 = Array(4);
// Tương đương với arr4 = [,,,,]
```

Truy cập mảng.

```js
//Khai báo 1 mảng
cats = ['Tom', 'Bily', 'Blomo'];

// <array>[<index>]
cats[0];
// Tom
cats[1];
// Bily
cats[2];
// Blomo

// Nếu OutOfIndex -> undefined
```

# Làm việc với toán tử

Khi thực hiện toán tử + trên array, thì toàn bộ các dữ liệu đều được chuyển thành string trước khi thực hiện tính toán.

Với toán tử trừ, nhân, chia sẽ trả về NaN.

Không nên dùng toán tử so sánh với array.

# Phương thức với array.

## Chuyển mảng về string

	<Array>.ToString()

## Truy xuất phần tử

	<Array>.at(<index>)

Giống với cách truy xuất thông thường nhưng có thể dùng negative index.

## Phương thức includes

	<array>.includes(<searchElement>, Optional: <position>)
	<searchElement>: phần tử xem xét.
	<position>: vị trí bắt đầu tìm kiếm, mặc định là tìm kiếm trên toàn mảng.

Xác định xem phần tử có trong array.

## Phương thức IndexOf

	<array>.indexOf(<searchElement>, Optional: <posotion>)
	<searchElement>: giá trị muốn tìm kiếm.
	<position>: vị trí bắt đầu tìm kiếm, mặc định là tìm kiếm trên toàn mảng.

Tìm kiếm chỉ mục của phần tử đầu tiên xuất hiện trong mảng, nếu không có trả về -1.

## Phương thức lastIndexOf

	<array>.lastIndexOf(<searchElement>, <posotion>)
	<searchElement>: giá trị muốn tìm kiếm.
	<position>: vị trí bắt đầu tìm kiếm, mặc định là tìm kiếm trên toàn mảng.

Giống với IndexOf nhưng trả về chỉ mục của phần tử xuất hiện cuối cùng.

## Các phương thức cập nhật mảng

	<array>.unshift(<element>): Thêm phần tử vào đầu mảng.
	<array>.push(<element>): Thêm phân tử vào cuối mảng.
	<array>.shift(): Lấy ra phần tử đầu mảng.
	<array>.pop(): Lấy ra phần tử cuối mảng.

## Phương thức splice

	<array>.splice(<start>, <deleteCount>, <items>)
	<start>: xác định vị trí bắt đầu biến đổi, mặc định <array>.length – 1. Với giá trị mặc định, không có phầ tử nào bị xoá <items> sẽ được thêm vào cuối mảng.
	<deleteCount>: số phần tử bị xoá kể từ <start>
	<items>: các phần tử được thêm vào.

Có thể thực hiện đồng thời xoá phần tử trong mảng và thêm phần tử mới

# Phương thực tiện ích (có thể hay dùng)

Các phương thức của array có thể sử dụng chỉ mục âm, nếu i là chỉ mục âm thì tương đương i + array.length của chỉ mục dương. Một số phương thức sau có thể truyền hàm như một tham số.

## Phương thức fill

	<array>.fill(<value>, <start> = 0, <end> = <array>.length)
	<value>: Giá trị thay thế.
	<start>: index bắt đâu tới end - 1
	<end>: điểm kết thúc

## Phương thức forEach

	<array>.forEach(<func>, <thisArg>)
	<func>: một hàm hoặc một bộ tham số.
	<thisArg>: Một tham số không bắt buộc(cần tìm hiểu sau).

```js
arr = [12, 3, 5]
// [ 12, 3, 5 ]
sum = 0
// 0
arr.forEach((num) => sum += num)
// undefined
sum
// 20
arr // Giá trị của arr không bị thay đổi
// [ 12, 3, 5 ]

// Or

arr.forEach((value, index, arr) => arr[index] = value*2)
// undefined
arr
// [ 24, 10, 16 ]
```

## Phương thức every

	<array>.every(<func>, <thisArg>)
	<func>: cần trả về kiểu boolen

Đưa từng phần tử vào func để kiểm tra. All pass true -> true, else false.

## Phương thức some

	<array>.some(<func>, <thisArg>)

Trả về true nếu có 1 phần từ vượt qua func.

## Phương thức filter

	<array>.filter(<func>, <thisArg>)

Giúp lấy ra các phần từ đặt yêu cầu func từ array.

## Phương thức find

	<array>.find(<func>, <thisArg>)

Trả về phần tử đầu tiên vượt qua func, nếu không có trả undefined.

## Phương thức findIndex

	<array>.findIndex(<func>, <thisArg>)

Giống find nhưng trả về chỉ mục của phần tử. Nếu không có phân tử thoả mãn, trả về -1.

## Phương thức entries

	<array>.entries()

Trả về một iterator lặp qua các phần tử của array. Dùng iterator.next() để duyệt qua từ giá trị

## Phương thức nối mảng

	<array>.concat(<arrays>)

Dùng để nối hai mảng.

## Phương thức cắt mảng

	<array>.slice(<start>, <end>)

Trả về một mảng con có phần từ từ start tới end-1 từ mảng ban đầu.

## Phương thức reduce

```js
reduce(callbackFn)
reduce(callbackFn, initialValue)

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);
```

Thực hiện trên từng phần tử của mảng, giá trị mỗi lần trả về sẽ trở thành tham số **accumulator** cho lần gọi phần tử tiếp theo với **currentValue** là đầu vào cho giá trị phần tử đó. Giá trị cuối cùng trả về sẽ trở thành giá trị trả về cho reduce.

	Nếu không có initialValue, accumulator đầu tiên nhận giá trị array.at(0).

	Nếu không có initialValue, currentValue đầu tiên nhận giá trị array.at(1). Nếu có thì nhận array.at(0).

## Phương thức map

	<array>.map(<func>, <thisArg>)

Áp dụng func trên các phần tử trong mảng. Trả về mảng mới chứa các phần tử là kết quả của việc áp dụng func vào từng phần tử.
