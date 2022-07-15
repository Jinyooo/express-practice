const socket = io(); // io쓸 수 있는 근거는..


socket.on('connect', function () {
    const input = document.querySelector("#test");
    input.value = "접속되었습니다";
    
});

// 메세지 전송 함수
function send() {
    const message = document.querySelector("#test").value;
    document.querySelector('#test').value = "";

    // 소켓을 통해서 send 이벤트를 만들어준다
    socket.emit('send', { msg : message });
    // send 이벤트는 연결되어있는 www 파일에 들어가보면 send 로 받아주는 이벤트가 존재
    // 그 send에서 받아온 data를 콘솔에 출력할 수 있게 됨

}

// 소켓을 통해 값 전달하기
socket.on('send', function (data) {
    console.log(data.msg);
    const chatting = document.querySelector("#chatting");
    const item = document.createElement('li');
    
    item.textContent = data.msg; // data로부터 받아온 메세지 ul에 작성
    chatting.appendChild(item); // 리스트에 출력
})
