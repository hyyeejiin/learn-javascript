//console.log("후츠릿 짱");

// 변수 선언
let username = "송혜진"; //상수 const, 변수 let
//const username = "송혜진";
username = "수진";

console.log("username", username);

const num = 10; //number
console.log("🚀 ~ num:", num, typeof num); // ctrl + alt + L

const str = "이것은 문자열"; //string
console.log("🚀 ~ str:", str, typeof str);

const bool = true; // Boolean
console.log("🚀 ~ bool:", bool, typeof bool);

const empty = null; // 개발자가 의지를 가지고 값을 비워놓은
console.log("🚀 ~ empty:", empty, typeof empty);

let user; // 변수 선언, 값을 할당하지 않은
console.log("🚀 ~ user:", user, typeof user);

// 함수 선언(정의)
// function greeting() {
//   console.log("안녕하세요. 혜진님");
// }

// 화살표 함수
const greeting = () => {
    console.log("안녕하세요. 혜진님");
}
// 함수 호출
greeting();

// 미션 : 콘솔에 "Hello World!!" 텍스트 출력 함수 정의 및 호출
// 인자(argument, 함수 호출부분에서 보내는 값)와 매개변수(parameter, 함수 정의부분에서 받는 변수)
const hello = (username2) => {
    console.log(`안녕하세요, ${username2}님!`);
    //console.log("Hello World!! " + username);
}

hello("송혜진");
hello("혜진");
hello("진");

// 함수 입력과 출력
// const add = (num1, num2) => {
//     return num1 + num2
// };

const add = (num1, num2) =>  num1 + num2;

// const doublSum = (num) =>{
//     return 2*num
// };

const doublSum = (num) => 2*num;

const sum = add(10, 20);
console.log("🚀 ~ sum:", sum); //30

const result = doublSum(sum);
console.log("🚀 ~ result:", result); //60

const upperString = (str) => str.toUpperCase() ; 

console.log("대문자 변환 : ",upperString("wlwldkghkdlet"));


