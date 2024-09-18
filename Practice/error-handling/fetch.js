/*
1 Tạo một hàm fetchBookData(url) sử dụng fetch API để lấy dữ liệu sách từ một
URL.
	+ Hàm nhận vào một URL
	+ Sử dụng fetch để get dữ liệu
	+ Xử lý các trường hợp lỗi: network error, 404 not found, etc.
	+ Tạo và throw custom errors cho từng trường hợp
	+ Parse JSON response và trả về data
 */

function fetchBookData(url){

	const fetchPromise = fetch(url);

	fetchPromise
	.then( (response) => {
		// console.log(response);
		if(!response.ok){
			throw new Error(`HTTP error ${response.status}`);
		}else{

			return response.json();
		}
	} )
	.catch( (error) => {
		console.error(`Could not get the data ${error}`);
	})
}


/*
2 Implement một hàm retryRequest(url, maxRetries) sử dụng async/await.

	+ Hàm nhận vào URL và số lần thử lại tối đa
	+ Sử dụng fetchBookData để thực hiện request
	+ Nếu request thất bại, thử lại sau 1 giây
	+ Nếu đã thử maxRetries lần mà vẫn thất bại, throw error
	+ Trả về dữ liệu nếu request thành công
 */

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

async function retryRequest(url, maxRetries = 3){

	let count = 0;
	do{
		count++;
		let result = await fetchBookData(url);
		console.log(result);
		if(result){
			return result;
		}
	await sleep(1000);
	}while(count < maxRetries);

	throw new Error(`Could not make request after ${maxRetries} failed`);
}

url_404 = "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found"
url_error = "bad-scheme://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"
url = "https://openlibrary.org/search.json?q=the+lord+of+the+rings.json"
console.log(retryRequest(url_404, 5));