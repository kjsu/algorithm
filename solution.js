/*
    모든 숫자 더하기
    - 재귀함수보다 등차수열의합 공식을 쓰면 더 빠름
*/
function sumTo(n) {
    // if (n == 1) return 1;
    // return n + sumTo(n - 1);

    return n * (n + 1) / 2;
}

/*
    팩토리얼
    - 삼항 조건 연산자에서 0은 false, 1은 true를 응용해서 간결한 코드 작성
*/
function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
}

/*
    피보나치 수열
    - 재귀 방식은 숫자가 커질수록 속도가 크게 저하됨
      그 이유는 fibonacci(2), fibonacci(3)과 같이 중복 호출이 크게 증가하기 때문
    - 반복문 및 기존 값을 저장하는 방식으로 변경
*/
function fibonacci(n) {
    // return n <= 1 ? n : fib(n - 1) + fib(n - 2);

    let prevNum = 1;
    let num = 1;
    for (let i = 3; i <= n; i++) {
        let temp = prevNum + num;
        prevNum = num;
        num = temp;
    }
    return num;
}