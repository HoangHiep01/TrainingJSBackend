function generateFibonacci(n) {
	
	listFibonacciNumber = Array();
	if (n <= 0) {
		return listFibonacciNumber;
	}

	caculateNthFibonacciNumber = (i) => {
		if(i < 3){
			if(listFibonacciNumber.length <= i){
				listFibonacciNumber.push(1);
			}
			return 1;
		}
		value = fiboCalu(i-1) + fiboCalu(i-2);
		if(listFibonacciNumber.length < i){
			listFibonacciNumber.push(value);
		}
		return value;
	}

	caculateNthFibonacciNumber(n);
	return listFibonacciNumber;
}

// 1,1,2,3,5,8,...
function findNthFibonacciNumber(n) {
    if (n <= 2) {
        return 1
    }
    return findNthFibonacciNumber(n - 1) + findNthFibonacciNumber(n - 2);
}

function generateFibonacciTemplate(n, func){
	if(n <= 0 ){ return []};
	result = Array.apply(null, Array(n));
	result.forEach((value, index, arr) => { arr[index] = func(index+1); })
	return result;
}

function findNthFibonacciNumberWithCache(n,memo) {
    memo = memo || {};
    if (memo[n]) {
        return memo[n];
    }
    if (n <= 2) {
        return 1;
    }
    return memo[n] = findNthFibonacciNumber(n - 1, memo) + findNthFibonacciNumber(n - 2, memo);
}


function memoizer(fun) {
    let cache = {};
    return function (n) {
        if (cache[n] != undefined ) {
          return cache[n];
        } else {
          let result = fun(n);
          cache[n] = result;
          return result;
        }
    }
}


 a = generateFibonacciTemplate(20, memoizer(findNthFibonacciNumber));
console.log(a);
// res = memoizer(fibonacci)(9);
// console.log(generateFibonacci2(5));