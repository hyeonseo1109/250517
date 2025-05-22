

document.getElementById("확인버튼").addEventListener("click", function () {
  const name = document.getElementById("NameInput").value;
  const greetingArea = document.getElementById("인사");

  if (name.trim() === "") {
    greetingArea.textContent = "이름이 뭐에요!";
  } else {
    greetingArea.textContent = `안녕하세요, ${name}님!`;
  }
});



