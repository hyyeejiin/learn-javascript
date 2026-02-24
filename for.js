/* 
for(let i = 0; i < 5; i++){
    console.log(`${i}번째 실행 중...`);
}

// 변수 선언
const students = ["햄찌", "혜진", "룰루", "랄라", "호호"];

// 함수 반복 실행
const greeting = (username) => {
    console.log(`반갑습니다. ${username}님!`);
}

// for(let i=0; i < students.length; i++){
//     greeting(students[i]);
// }

// forEach 배열일 때만(향상된 for문)
students.forEach((name, idx) => {
    //console.log(name, idx);
    greeting(name);
})
*/

// 자주 쓰는 배열함수
/*
1. map - 배열(return 값) : 기존 배열을 조작하여 새로운 배열로 
2. filter - 배열 : 배열 안의 요소들 중 조건을 만족하는 요소들로 새로운 배열을 리턴
3. find - 요소 or undefined : 배열 안의 요소들 중에서 조건을 만족하는 첫번째 요소 리턴 / 조건을 만족하는 요소가 없으면 undefined 반환
4. some/every - boolean : (some) 배열의 요소 중 하나라도 조건을 만족하면 true, 아니면 false/ (every) 배열 안의 모든 요소가 만족해야 true
*/
const names = ["alise", "bob", "charlie", "david"];

/* map 
const upperNames = names.map((name) => name.toUpperCase());
console.log("🚀 ~ upperNames:", upperNames);

const character = "⭐";

// 각 이름 뒤에 ⭐ 넣어 출력
const emojiNames = names.map(name => name+character);
console.log("🚀 ~ emojiNames:", emojiNames);

const fn = names.map((name) => character+name);
console.log("🚀 ~ fn:", fn)
*/

/* filter
// 이름 글자 수가 5자 이상
const filterNames = names.filter((name) => name.length >= 10);
console.log("🚀 ~ filterNames:", filterNames);
*/

/*
// find
// 이름 글자 수가 5자 이상
const findNames = names.find((name) => name.length >= 5);
console.log("🚀 ~ findNames:", findNames); // 조건을 충족하는 것들이 많아도 무조건 하나만 리턴
*/

// some/every
const someNames = names.some((name) => name.length >= 5);
console.log("🚀 ~ someNames:", someNames);

const everyNames = names.every((name) => name.length >= 5);
console.log("🚀 ~ everyNames:", everyNames);

// spread syntax
const addNames = [...names, "hyejin"];
console.log("🚀 ~ addNames:", addNames);

// 
const todoItem = {
    id : 123,
    todo : "JS공부",
    isComplete : false
};
console.log("🚀 ~ todoItem:", todoItem);

const setTodoItem = {
    ...todoItem,
    memo : "집에 보내쥬라", 
    isComplete : true // 이미 존재하는 키 값인 경우 데이터 수정
};
console.log("🚀 ~ setTodoItem:", setTodoItem);

