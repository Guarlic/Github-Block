let pswd = prompt('비밀번호를 입력해봐 ㅋㅋ');

// 이 변수를 수정하여 비밀번호 변경
const correct = '3432';

if (pswd === correct) {
	alert('올ㅋㅋ');
}

else {
	alert('틀림 ㅅㄱㅂ ㅋㅋ');
	window.history.back();
}
