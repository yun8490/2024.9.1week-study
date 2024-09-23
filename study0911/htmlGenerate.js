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
        var s = `<option>90</option>
                <option>95</option>
                <option>100</option>`;// 백틱기호 써서 option태그안 속성 변경
        $('.form-select').eq(1).html(s)
    }else{
        $('.sizeForm').removeClass('sizeForm-show')
    }
})

// ========================배열 반복문, 태그 동적으로 추가,변경================================
var a = '<p>안녕</p>';
document.querySelector('#test').insertAdjacentHTML('beforeend', a);//하단에 추가
$('#test').append(a);//하단에 추가하는거임, html()쓰면 바꿈


var pants = [28, 30, 32];
$('.form-select').eq(0).on('input',function(){
    if($('.form-select').eq(0).val() == '바지'){
        $('.sizeForm').addClass('sizeForm-show')
        $('.form-select').eq(1).html('');
        pants.forEach(function(a, i){//pants에 있는 배열 a넣고 반복하겠다~,  i는 0부터 1씩 증가하는 변수
            $('.form-select').eq(1).append(`<option>${a}</option>`)//form-select(1)부분 option a로 추가해라
        })//array배열에만 쓸수있는 반복문
        //pants.forEach((a)=>{}); => 이렇게 써도됨 단 함수안에 this안에 뜻이 달라짐
    }
})

var obj = {name: 'kim', age: 20}
for (var key in obj){//object 배열일때 쓰는 반복문 for in
    console.log(key);//key값 출력
    console.log(obj[key]);//속성,값 모두 출력
}

//==============================================================