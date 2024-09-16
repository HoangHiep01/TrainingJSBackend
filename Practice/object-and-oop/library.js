/*
Tạo một class Library để quản lý collection của Book.
	+ Thuộc tính: name, books (array chứa các Book objects)
	+ Constructor nhận vào tên của thư viện
	+ Methods:
		a) addBook(book): Thêm một cuốn sách mới vào thư viện
		b) removeBook(bookId): Xóa một cuốn sách khỏi thư viện dựa trên id
		c) findBookById(bookId): Tìm và trả về một cuốn sách theo id
		d) borrowBook(bookId): Cho mượn một cuốn sách (sử dụng method
		borrow của Book)
		e) returnBook(bookId): Nhận lại một cuốn sách đã cho mượn
	+ Getter: availableBooks (trả về số lượng sách có sẵn trong thư viện)
 */



// import Book from "./book.js"
const Book = require("./book.js");

class Library{
	books = [];
	constructor (name){
		this.name = name;
	}

	addBook(book){
		if(this.books.some((ele) => ele.id == book.id)){
			console.log("Func addBook: Id already exists.");
			return -1;
		}
		this.books.push(book);
		console.log("Func addBook: List books", this.books);
		return this.books.length;
	}

	removeBook(bookId){
		let index = this.books.findIndex((ele) => ele.id == bookId);

		if(index == -1){
			console.log("Func removeBook: Id not found.");
			return -1;
		}
		this.books.splice(index,1);
		console.log("Func removeBook: Delete succeseful.", this.books);
		return this.books.length;
	}

	findBookById(bookId){
		let index = this.books.findIndex((ele) => ele.id == bookId);

		if(index == -1){
			console.log("Func findBookById: Id not found.");
			return -1;
		}

		return this.books[index].getInfo();
	}

	borrowBook(bookId, quantity = 1){
		let index = this.books.findIndex((ele) => ele.id == bookId);

		if(index == -1){
			console.log("Func borrowBook: Id not found.");
			return -1;
		}

		return this.books[index].borrow(quantity);
	}

	get availableBooks(){
		let totalBook = 0;
		for(let book of this.books){
			totalBook += book.availableCopies;
		}
		return totalBook;
	}
}

// book1 = new Book("1", "Harry Potter and Something", "J.K Rowling", 1997, 2000);
// book2 = new Book("2", "Game of Thorn", "George R. R. Martin", 1996, 0);

librator = new Library("Center");

librator.addBook(book1);
librator.addBook(book2);

librator.removeBook("1");
librator.removeBook("1");

librator.findBookById("1");
librator.findBookById("2");

console.log(`Total books available in ${librator.name} library ${librator.availableBooks}`);
