// /이벤트 버블링 발생, white-bg눌러도 닫힘 / 로그인 제목 누르면 총3번 누른거임
//function안에 event리스너 넣으면서 누른거만 동작하는 코드 짤수있음
$('.black-bg').on('click',function(e){
    // event.target;//유저가 실제로 누른거
    // event.preventDefault();//기본동작막음
    if(e.target == $('.black-bg')[0]){ //첫번째 dom 요소와 비교,jQuery는 다른 값 찾음 바꿔줘야됨
        $('.black-bg').removeClass('showModal');
    };
});