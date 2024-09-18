# Tổng quan

Điều mà bất đồng bộ có thể thực hiện được:

	- Chạy các tính toán nặng bằng cách gọi hàm.
	- Hàm có thể khởi chạy và trả về ngay tức thì để giúp chương trình có thể phản hồi được với sự kiện khác.
	- Hàm khi chạy các tính toán và không chặn các giao tiếp khác của người dùng với chương trình.
	- Thông báo về kết quả tính toán khi hoàn thành.

# Event Handlers

Đây là một dạng của lập trình bất đồng bộ.

# Callbacks

Là hàm được truyền tới hàm khác như một tham số, với mong muốn callback sẽ được "call" vào thời điểm thích hợp. 

Callbacks từng là cách chính để thực hiện lập trình bất đồng bộ trong js.

Khi callbacks gọi callbacks chồng lên nhau sẽ tạo ra **nested callbacks** khiến code khó đọc, khó bảo trì. Trường hợp đó được gọi là callback hell hay pyramid of doom.

Với nhưng khó khăn trên thì lập trình bất động bộ trong js hiện nay dự trên **Promise**.

# Promise

Nền tảng của lập trình bất động trong js hiện tại.

Promise là 1 đốt tượng được trả về từ bởi các hàm bất đồng bộ, nó thể hiện trạng thái tính toán hiện tại. Promise cung cấp 1 phương thức kiểm soát thông báo tính toàn thành công hay thất bại

Một promise có thể là 1 trong 3 trạng thái sau:

	- pending:
	- fulfilled:succeeded, ,lúc này có thể gọi then().
	- rejected: failed,lúc này có thể gọi catch()

```js
const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

console.log(fetchPromise);

fetchPromise.then((response) => {
  console.log(`Received response: ${response.status}`);
});

console.log("Started request…");
```

# Chaining promises

Promise có một chức năng là then(), chính phương thức năng cũng trả về một promise và chỉnh promise này cũng có thể gọi tiếp then(). Điều này tạo thành một "chuỗi" và giúp tránh callback hell.

```js
const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

// multi call
fetchPromise.then((response) => {
  const jsonPromise = response.json();
  jsonPromise.then((data) => {
    console.log(data[0].name);
  });
});

// Promise chain
fetchPromise
  .then((response) => response.json())
  .then((data) => {console.log(data[0].name);})
  ;
```

# Catching errors

Promise còn có phương thức catch(). Nó giống vớ then(), nhưng then() được bắt đầu khi nhận tín hiệu "success" trước đó, còn nếu là "fail" thì catch sẽ được gọi.

```js
const fetchPromise = fetch(
  "bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

fetchPromise
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data[0].name);
  })
  .catch((error) => {
    console.error(`Could not get products: ${error}`);
  });
  ```

# Multi promise

Khi bạn muốn tất cả promise fulfilled mà không muốn chạy riêng lẻ. Promise.all() là phương thức nhận đầu vào là array promise và trả về duy nhất 1 promise.

```js
const fetchPromise1 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);
const fetchPromise2 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
);
const fetchPromise3 = fetch(
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
);

Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
  .then((responses) => {
    for (const response of responses) {
      console.log(`${response.url}: ${response.status}`);
    }
  })
  .catch((error) => {
    console.error(`Failed to fetch: ${error}`);
  });
  ```

Ngoài ra còn có Promise.any() - giống với all(), fulfilled khi một trong các promise fulfilled và rejected khi tất cả promise rejected.

# async and await

Từ khoá async cung cấp một cách đơn giản hơn để làm việc với asynchronous promise-based code.

```js
async function myFunction() {
  // This is an async function
}
```

Trong async func có thể dùng từ khoá await để gọi hàm trả về promise. Từ khoá await giúp code chờ tới khi promise được trả về với 1 trong 2 trạng thái là filfilled hoặc rejected.

Điều này giúp viết async như sync
