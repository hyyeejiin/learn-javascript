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
2. filter - 배열
3. find - 요소 or undefined
4. some/every - boolean
*/

const names = ["alise", "bob", "charlie", "david"];
const upperNames = names.map((name) => name.toUpperCase());
console.log("🚀 ~ upperNames:", upperNames)
