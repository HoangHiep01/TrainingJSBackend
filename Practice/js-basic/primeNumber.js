function isPrime(number) {
	if(number <= 1){
		return false;
	}

	let lim = Math.round(Math.sqrt(number));
	for(let i = 2; i <= lim; i++){
		if(number % i == 0){
			return false;
		}
	}
	return true;
}


console.log(isPrime(13));