# throw

```js
throw error; // Throws a previously defined value (e.g. within a catch block)
throw new Error("Required"); // Throws a new Error object
```


# try-catch-finally

```js
myFunc();
try {
  myFunc(arg); // This may throw an error
} catch (e) {
  handleError(e); // If an error occurred, handle it
} finally {
  somethingMustDo(); // Always 
}
```

# Custom Errors

Error là một đối tượng được xây dựng trong js.

```js
// khởi tạo với constructor

new Error()
new Error(message)
new Error(message, options)

// Có thể khởi tạo mà không cần từ khoá new
// message là thông điệp lỗi
// options là đối tượng có các thuộc tính sau:
// 		+ cause: chỉ ra lý do cho lỗi.
// 		+ fileName: đường dẫn tới file báo lỗi, giá trị mặc định là đường dẫn tới file chứa constructor Error.
// 		+ lineNumber: dòng trong file raise lỗi
```

