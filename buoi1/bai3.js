const case1 = "    hOang Bui   ";
// -> Hoang Bui
const case2 = " hOANG      BUI   hOang     ";

const case3 = "23traN    dUOng23     ";
function check(case3) {
  let y = case3.replace(/\d/g, ""); // chọn các phần tử không phải là số trong chuỗi !
  arr = y.split(" "); // chuyển chuỗi thành mảng theo khoảng trắng
  var x = /^[0-9]$/g;
  var i,
    case_kq = "",
    temp;
  for (
    i = 0;
    i < arr.length;
    i++ // duyệt các phần tử trong mảng
  ) {
    if (x.test(arr[i]) != true) {
      temp = arr[i].trim().toLowerCase(); // xóa khoảng trắng và chuyển về chữ thường
      if (temp != "") {
        temp = temp.substr(0, 1).toUpperCase() + temp.substr(1); //viết hoa ký tự đầu từ
        case_kq += temp + " ";
      }
    }
  }
  console.log(case_kq);
}
check(case1);
check(case2);
check(case3);
