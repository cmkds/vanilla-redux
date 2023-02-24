// 2. 해당 아이디 값으로 요소를 찾아 변수에 넣어주고
const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

let count = 5;
number.innerText = count;

// 4. 해당 함수가 실행 된다.
const handleAdd = () => {
  console.log("add");
  count += 1;
};

const handleMinus = () => {
  console.log("minus");
  count -= 1;
};

// 3. 해당 요소가 00 됐을 때 동작작할 이벤트 함수 설정
add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
