// 배열 : 순서가 있는 데이터의 집합 *index
const daysOfWeek = ["월", "화", "수", "목", "금", "토", "일"];

console.log("🚀 ~ daysOfWeek:", daysOfWeek);

console.log("화요일은", daysOfWeek[1] + "가", "나서 화요일");

const students = ["햄찌", "혜진", "룰루", "랄라", "호호"];
console.log("students 갯수(size)", students.length);

console.log(students.at(1));
console.log(students[1]);

// 객체 : key와 value로 구성된 속성들의 묶음
const student = {
  name: "혜진",
  mbti: "isfj",
  isMale: false,
  sujects: ["html".toUpperCase(), "css".toUpperCase(), "javascript".toUpperCase()],
};
console.log("🚀 ~ student:", student);

console.log(student.name);
console.log(student["name"]);

console.log("수강과목", student.sujects); //student.sujects : 배열
console.log("전체 수업은 :",student.sujects[0],student.sujects[1],student.sujects[2] );
console.log("오늘 수업은 :",student.sujects[2] );