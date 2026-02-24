console.log("if");

//조건문
const score = 96;

// if (score >= 60) {
//     //조건식이 true면 실행할 로직
//     console.log("합격");
// }

// if (score >= 60) {
//   //조건식이 true면 실행할 로직
//   console.log("합격");
// } else {
//   console.log("불합격");
// }

// score >= 60 ? console.log("합격") : console.log("불합격");

console.log( score >=60 ? "합격" :"불합격")
//console.log("조건문 끝");

//else if

let grade = "F";

if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else {
  grade = "C";
}

console.log(`학생의 등급은 ${grade}입니다.`);

// == === != !==
// false 로 인식 : 0, '', null, undefined
if(0){
    console.log("true");
}else {
    console.log("false");
}

const userInput = "" ; // 사용자 입력 값
if(!userInput){
    console.log("입금해줘");
}

