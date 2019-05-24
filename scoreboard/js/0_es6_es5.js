// 명령행 스타일
var arr = [1,2,3,4,5];
var arr2 = [];
for (var i = 0; i < arr.length; i++) {
    arr2[i] = arr[i] * 2;
}
console.log(arr2);

// 선언형 스타일
var arr3 = arr.map(item => item * 2);
console.log(arr3);

//  상태 갱신 => 뷰 자동 렌더링
// 이벤트: onClick={function}