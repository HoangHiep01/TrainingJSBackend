function generateFibonacci(n) {
	
	fibo = Array();
	if (n <= 0) {
		return fibo;
	}

	fiboCalu = (i) => {
		if(i < 3){
			if(fibo.length <= i){
				fibo.push(1);
			}
			return 1;
		}
		value = fiboCalu(i-1) + fiboCalu(i-2);
		if(fibo.length < i){
			fibo.push(value);
		}
		return value;
	}

	fiboCalu(n);
	return fibo;
}

// 1,1,2,3,5,8,...
function fibonacci(n) {
    if (n <= 2) {
        return 1
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function generateFibonacciTemplate(n, func){
	if(n <= 0 ){ return []};
	result = Array.apply(null, Array(n));
	result.forEach((value, index, arr) => { arr[index] = func(index+1); })
	return result;
}

function fibonacciWithCache(n,memo) {
    memo = memo || {}
    if (memo[n]) {
        return memo[n]
    }
    if (n <= 2) {
        return 1
    }
    return memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo)
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


 a = generateFibonacciTemplate(20, memoizer(fibonacci));
// res = memoizer(fibonacci)(9);
// console.log(generateFibonacci2(5));
console.log(a);