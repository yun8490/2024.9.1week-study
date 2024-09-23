var products = [
    { id : 0, price : 70000, title : 'Blossom Dress' },
    { id : 1, price : 50000, title : 'Springfield Shirt' },
    { id : 2, price : 60000, title : 'Black Monastery' }
];

for(let i =0; i<3; i++){
    $('h5').eq(i).html(products[i].title)
    $('p').eq(i).html('가격: ' + products[i].price)
}
// console.log(`문자${a}문자`); => 백틱기호 ` 문자 중간에 엔터키 가능, 중간에 ${ 변수명 } 문법을 이용가능함