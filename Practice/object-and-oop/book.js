/*
Tạo một class Book với các thuộc tính và methods
	+ Thuộc tính: id, title, author, publicationYear, availableCopies.
	+ Constructor nhận vào tất cả các thuộc tính trên.
	+ Methods:
		a) borrow(): Giảm số lượng sách có sẵn, throw error nếu không còn sách.
		b) return(): Tăng số lượng sách có sẵn.
		c) getInfo(): Trả về một string chứa thông tin của sách.
	+ Getter: available (trả về true nếu còn sách, ngược lại false).
 */

class Book{
	constructor (id, title, author, publicationYear, availableCopies=0){
		this.id = id;
		this.title = title;
		this.author = author;
		this.publicationYear = publicationYear;
		this.availableCopies = availableCopies*1;
	}

	borrow(quantity = 1){
		if(this.availableCopies == 0){
			throw new Error("Func borrow: Sold out.");
		}
		if(quantity*1 > this.availableCopies){
			throw new Error("Func borrow: Invalid quantity")
		}
		this.availableCopies -= quantity;
		console.log(`availableCopies after borrow call: ${this.availableCopies}`);
		return this.availableCopies;
	}

	return(quantity = 1){
		this.availableCopies += quantity;
		console.log(`availableCopies after return call: ${this.availableCopies}`);
		return this.availableCopies;
	}

	getInfo(){

		let result = `Book information:
		Id 		: ${this.id}
		Title 	: ${this.title}
		Author 	: ${this.author}
		Public 	: ${this.publicationYear}
		Quantity: ${this.availableCopies}`;

		console.log(result);

		return result;
	}

	get available(){
		if(this.availableCopies){
			console.log(`Available : ${this.availableCopies}`);
		}else{
			console.log(`Not available : ${this.availableCopies}`);
		}
		return this.availableCopies > 0;
	}
}
module.exports = Book;


book1 = new Book("1", "Harry Potter and Something", "J.K Rowling", 1997, 2000);
book2 = new Book("2", "Game of Thorn", "George R. R. Martin", 1996, 0);

// // book1.borrow(5000); -> raise an error
// // book2.borrow(); -> raise an error

book1.borrow(50);

book2.getInfo();

console.log(book2.return());
book2.getInfo();

console.log(book2.available);
