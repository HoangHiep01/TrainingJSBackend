function secondLargestNumber(arr) {
	if(arr.length < 2){
		return;
	}
	if(arr.length == 2 && arr[0] == arr[1]){
		return;
	}
	let largest = Math.max(arr[0], arr[1]);
	let secLarge = Math.min(arr[0], arr[1]);

	for(let i = 2; i < arr.length; i++){
		if(arr[i] > largest){
			secLarge = largest;
			largest = arr[i];
			continue;
		}
		if(arr[i] > secLarge){
			secLarge = arr[i]
		}
	}
	return secLarge;
}


a = [12, 35, 1, 10, 34, 1];
console.log(secondLargestNumber(a));
console.log(a.lastIndexOf(1));