const x1 = "tranduong";
const x2 = "hitclubhiuhiu";
const x3 = "aabb";
var dem = 0;
function find_letter(x) {
  for (i = 0; i < x.length; i++) {
    y = x[i];
    if (i == x.indexOf(y) && i == x.lastIndexOf(y)) {
      //tìm vị trí từ đầu mảng và vị trí từ đầu mảng nếu thỏa mãn 2 điều kiện = vị trí đó thì đó là chữ đầu tiên không lặp
      console.log(i);
      return 0; // retrun và kết thúc hàm
    }
  }
  return -1; //khi không có giá trị nào không lặp có nghĩa là tất cả các ký tự đều lặp lại ít nhất 1 lần => in ra -1
}
find_letter(x1); // gọi lại hàm cho x1
find_letter(x2); //- - - - - - - - - 2
find_letter(x3); //- - - - - - - - - 3
