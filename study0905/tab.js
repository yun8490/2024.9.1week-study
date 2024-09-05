// eq(0) => 여러개 같은 클래스명에서 첫번째 클래스명
var 탭버튼 = $('.tab-button');
var 탭내용 = $('.tab-content');
function 삭제(){
    탭버튼.removeClass('orange');
    탭내용.removeClass('show');
}
// 반복문 안에 변수는 let을 선언하면 좋음
for (let i = 0; i < 3; i++){
    탭버튼.eq(i).on('click',function(){
        삭제();
        탭버튼.eq(i).addClass('orange');
        탭내용.eq(i).addClass('show');
    });
}