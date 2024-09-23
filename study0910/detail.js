// eq(0) => 여러개 같은 클래스명에서 첫번째 클래스명
var 탭버튼 = $('.tab-button');
var 탭내용 = $('.tab-content');
function 삭제(){
    탭버튼.removeClass('orange');
    탭내용.removeClass('show');
}
// 반복문 안에 변수는 let을 선언하면 좋음
// for (let i = 0; i < 3; i++){
//     탭버튼.eq(i).on('click',function(){
//         삭제();
//         탭버튼.eq(i).addClass('orange');
//         탭내용.eq(i).addClass('show');
//     });
// }

//변수있으면 파라미터로 바꿔서 함수축약해서 사용 가능
function 탭열기(구멍){
    $('.tab-button').removeClass('orange');
    $('.tab-button').eq(구멍).addClass('orange');
    $('.tab-content').removeClass('show');
    $('.tab-content').eq(구멍).addClass('show');
}

$('.list').click(function(e){
    // if(e.target == $('.tab-button')[0]){
    //     탭열기(0)
    // }
    // if (e.target == document.querySelectorAll('.tab-button')[1] ){
    //     탭열기(1)
    // }
    // if (e.target == document.querySelectorAll('.tab-button')[2] ){
    //     탭열기(2)
    // }
    //html에 몰래 data심어놓고 dataid불러와서 사용 가능
    //dataset 잡기술 알면 이벤트리스너 적게 사용할 때 내가 뭐 눌렀는지 쉽게 파악할 수도 있음 
    탭열기(e.target.dataset.id)//지금누른버튼에 숨어있던 data-id를 알려주는 코드
})

var car = ['소나타', 50000, 'white'];// array 자료형, 순서 존재
var car2 = {name: '소나타', price: [50000,3000,4000]} //object 자료형, 이름 붙일수 있음, 순서개념없음
$('#carName').html(car2.name)
$('#carPrice').html(car2.price[1])

// ========================================================
$('.form-select').eq(0).on('input',function(){
    if($('.form-select').eq(0).val() == '셔츠'){
        $('.sizeForm').addClass('sizeForm-show')
    }else{
        $('.sizeForm').removeClass('sizeForm-show')
    }
})