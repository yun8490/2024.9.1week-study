var products = [
    { id : 0, price : 70000, title : 'Blossom Dress' },
    { id : 1, price : 50000, title : 'Springfield Shirt' },
    { id : 2, price : 60000, title : 'Black Monastery' }
];
$('#card1').html('');

var arrayPrice = [];
function 카드만들기(dataname) {   
    dataname.forEach(function(a, i){
        arrayPrice[i] = products[i].price
        var card = `<div class="col-sm-4">
        <img src="https://via.placeholder.com/600" class="w-100">
        <h5>${dataname[i].title}</h5>
        <p>가격: ${dataname[i].price}</p>
        </div>` 
        $('#card1').append(card);
        console.log(arrayPrice);
    })
}
카드만들기(products);

let clickCount = 0;
$('.btn-danger').on('click',function(){
    clickCount++;
    if(clickCount == 1){
        $.get('https://codingapple1.github.io/js/more1.json').done(function(data){//.done => 성공했을때
            console.log(data);
            카드만들기(data);
        })
    }else if(clickCount == 2){
        $.get('https://codingapple1.github.io/js/more2.json').done(function(data){//.done => 성공했을때
            console.log(data);
            카드만들기(data);
        })
    }else{
        alert('더이상 상품이 없습니다.')
    }
})

// ====================================arrray===============================
var arrrayexam = [7,3,5,2,30];
var arrrayexam2 = ['a', 'c', 'd', 'b']
arrrayexam.sort(function(a,b){//문자정렬은 .sort만
    return a - b//숫자정렬 return 오른쪽이 양수면 a를 오른쪽으로 정렬 return 오른쪽이 음수면 b를 오른쪽으로 정렬
});
arrrayexam2.sort(function(a,b){
    return b > a
})
console.log(arrrayexam);

// ========================================================================
// $.get('https://codingapple1.github.io/hello.txt').done(function(data){//이 경로 get요청
//     console.log(data);
// }).fail(function(){
//     console.log('실패함')//경로 이상할때 실패했다는 알림
// })

// // array,object이런거는 데이터 못주고받음, 근데 이런거 무리없이 받을려면 object를 JSON형태로 바꾸면 됨
// // fetch() 로 가져온 결과를 array/object로 바꾸고 싶으면 res.json() 이런 코드 한 줄 추가
// // jQuery의 $.get() 이런건 JSON으로 자료가 도착하면 알아서 array/object 자료로 바꿔줍니다.
// $.get('https://codingapple1.github.io/price.json').done(function(data){
//     console.log(data.price);
// }).fail(function(){
//     console.log('실패함')//경로 이상할때 실패했다는 알림
// })