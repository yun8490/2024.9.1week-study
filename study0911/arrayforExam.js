//**1번**
// var 출석부 = ['흥민', '영희', '철수', '재석'];
// function 이름찾기(name){
//     출석부.forEach(function(a){
//         //값들을 반복해서 찾은다음 배열안에 있는값들과 하나하나 비교.
//         if(name == a){
//             console.log('있어요');
//         }
//     })
// }
// 이름찾기('반복')

//**2번**
// for(i=2; i<10; i++){
//     for(j=1; j<10; j++){
//         console.log(`${i} * ${j} = ${i * j}`);
//     }

// }


//**3번**
function 성적(s, a){
    var sum=0;
    for(i=0; i<s.length; i++){
        sum += s[i];
        avg = sum/s.length;
    }
    console.log(avg)
    if(avg < a){
        console.log('평균보다 ' + (a-avg) + '점이 올랐네요');
    }else if(avg > a){
        console.log('평균보다 ' + (avg-a) + '점이 떨어졌네요. 재수추천');
    }else{
        console.log('분발하셈');
    }
}
성적([10, 20, 30, 40, 50], 50)