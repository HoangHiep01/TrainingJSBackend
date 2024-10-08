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

/*Phần 2:
Thêm các methods sau vào class Library:
	a) listAvailableBooks(): Trả về danh sách các sách có sẵn để cho mượn
	b) mostPopularBook(): Trả về cuốn sách được mượn nhiều nhất
	c) addBooks(...books): Thêm nhiều sách cùng lúc sử dụng rest parameter
	d) updateBookInfo(bookId, updatedInfo): Cập nhật thông tin của một cuốn
	sách

Implement các chức năng sử dụng array methods nâng cao:
	a) getBooksByAuthor(author): Trả về tất cả sách của một tác giả
	b) getAveragePublicationYear(): Tính năm xuất bản trung bình của tất cả sách
	trong thư viện
	c) categorizeBooksByDecade(): Nhóm sách theo thập kỷ xuất bản
	d) findBooksByCondition(condition): Tìm sách theo một điều kiện tùy chỉnh
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

	listAvailableBooks(){
		return this.books.filter(ele => ele.availableCopies > 0);
	}

	mostPopularBook(){
		// No idea if must not add a field in book's class to track quantity of borrow.  
	}

	addBooks(...books){
		for(let book of books){
			this.addBook(book);
		}
	}

	updateBookInfo(bookId, updatedInfo){
		let index = this.books.findIndex((ele) => ele.id == bookId);

		if(index == -1){
			console.log("Func updateBookInfo: Id not found.");
			return -1;
		}

		for (const [key, value] of Object.entries(updatedInfo)){
			this.books[index][key] = value;
		}
		this.books[index].availableCopies = this.books[index].availableCopies * 1;
		return this.books[index];
	}

	getBooksByAuthor(author){
		return this.books.filter(ele => ele.author.toLowerCase().includes(author.toLowerCase().trim()));
	}

	getAveragePublicationYear(){
		const result = this.books.reduce((accumulator, currentValue) => accumulator + currentValue.publicationYear*1, 0) / this.books.length;
		return Math.round(result);
	}

	categorizeBooksByDecade(){
		return this.books.reduce((accumulator, currentValue) => {
			let key = String(currentValue.publicationYear)[2];
			if (!accumulator[key]) {
				accumulator[key] = [];
			}
			accumulator[key].push(currentValue);
			return accumulator;
		}, {});
	}

	findBooksByCondition(condition){

		// Find by title name
		if(condition[Object.keys(condition)[0]] == "title"){
			let value = String(condition[Object.keys(condition)[1]]).toLowerCase().trim();
			return this.books.filter(ele => ele.title.toLowerCase().includes(value));
		}
	}
}

console.log("----------------------------------------------------------");
// book1 = new Book("1", "Harry Potter and Something", "J.K Rowling", 1997, 2000);
// book2 = new Book("2", "Game of Thorn", "George R. R. Martin", 1996, 0);
book3 = new Book("3", "Harry Potter and Philosopher's Stone", "J.K Rowling", 1997, 200);
book4 = new Book("4", "Harry Potter and Chamber of Secrets", "J.K Rowling", 1998, 137);
book5 = new Book("5", "Harry Potter and Prisoner of Azkaban", "J.K Rowling", 1999, 270);
book6 = new Book("6", "Harry Potter and Goblet of Fire", "J.K Rowling", 2000, 420);
book7 = new Book("7", "Harry Potter and Order of the Phoenix", "J.K Rowling", 2003, 100);
book8 = new Book("8", "Harry Potter and Half-Blood Prince", "J.K Rowling", 2005, 203);
book9 = new Book("9", "Harry Potter and Deathly Hallows", "J.K Rowling", 2007, 90);

librator = new Library("Center");

librator.addBook(book1);
librator.addBook(book2);

librator.addBooks(book3, book4, book5, book6, book7, book8, book9);

librator.removeBook("1");
librator.removeBook("1");

librator.findBookById("1");
librator.findBookById("2");

console.log(`Total books available in ${librator.name} library ${librator.availableBooks}`);

console.log("List available books: ", librator.listAvailableBooks());



librator.updateBookInfo("2", {"availableCopies":"10"});
console.log("Func updateBookInfo: ");
librator.findBookById("2");


console.log("Func getBooksByAuthor: ", librator.getBooksByAuthor("Rowling"));

console.log("Func getAveragePublicationYear: ", librator.getAveragePublicationYear());

console.log(String(librator.books[0].publicationYear));

console.log("Func categorizeBooksByDecade: ", librator.categorizeBooksByDecade());

console.log("Func findBooksByCondition: ", librator.findBooksByCondition({"prototype" : "title", "value" : "Harry"}));

