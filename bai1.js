const arr1 = [1, 3, 5, 7, 1, 2, 3, 4, 5, 6];
const arr2 = [1, 1, 1, 10, 23, 2, 26, 26];
const arr3 = [1000, 2000, 1000, 10000, 22222];
function check(arr1) {
  var x = new Set(); // tạo một set với set là bộ tập hợp giá trị duy nhất
  for (i = 0; i < arr1.length; i++) {
    x.add(arr1[i]); // thêm các phần tử của mảng arr vào set
  }
  let y = Array.from(x); //chuyển một set thành một mảng
  for (var i = 0; i < y.length; i++) {
    // duyệt phần tử trong mảng vừa chuyển đổi
    var dem = 0;
    for (var j = 0; j < arr1.length; j++) {
      // duyệt phần tử trong mảng ban đầu
      if (y[i] == arr1[j]) {
        // điều kiện đếm số lần xuất hiện số chữ số trong mảng ban đầu
        dem++;
      }
    }
    console.log("số ", y[i], " xuất hiện ", dem, " lần ");
  }
}
check(arr3);
