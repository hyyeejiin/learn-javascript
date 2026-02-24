// Default Parameter : 이 값이 없으면 undefined
const hello = (username  = "사용자") => {
    console.log(`안녕하세요, ${username}님!`);
};

hello();
hello('혜진');

