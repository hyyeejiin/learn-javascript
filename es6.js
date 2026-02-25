// Default Parameter : 이 값이 없으면 undefined
/* const hello = (username  = "사용자") => {
    console.log(`안녕하세요, ${username}님!`);
};

hello();
hello('김햄찌');
 */
// Shift + Alt + A : 단락 주석
// ctrl +alt + L : 콘솔 로그 출력
/* //  논리 연산자(And Or Not)
const user = {
    isLogedIn : true, // 로그인 여부
    role : "admin"  // 다른 값으로 "user", "guest"
};

if(user.isLogedIn && user.role == "admin" ){
   // 로그인 된 경우이면서 role 이 admin
    console.log("✔️ 관리자 페이지 접근 가능");
}else{
    console.log("🚫 관리자 페이지 접근 불가능");    
};


const person = {
    age : 43,
    isParentPermision : true //부모 허락 여부
};

const canAccess = person.age >= 18 && person.isParentPermision;
console.log(canAccess);


if(canAccess){
    // 성인이거나, 부모님의 허락을 받은 
    console.log("접근 가능");
}else{
    console.log("접근 불가능");    
};

const isAdult = person.age >= 18 && "성인" ; //특이하네, 그냥 문법이니깐 외우자.
console.log("🚀 ~ isAdult:", isAdult);
 */

/* // 배열을 구조 분해 할당
const colors = ["red", "blue", "green"];
//const first = colors[0];
//const second = colors[1];

const [first, second] = colors; 

console.log(`first : ${first}`);
console.log(`second : ${second}`); */

// 객체 구조분해
const todoItem = {
    id : 123,
    toDo :"React 학습",
    isComplete : false
};
const isComplete = false;
// const id = todoItem.id;
// console.log("🚀 ~ id:", id);

const {id, toDo, isComplete:todayIsComplete} = todoItem; // 순서가 중요하지 않고 키 값이 중요, 이것도 그냥 문법이니 의문을 가지지 말고 외우면 된다. 
console.log("🚀 ~ id:", id);