const users = [
  { id: 1, name: "Hoang Bui", age: 19, gender: "male", money: 1000 },
  { id: 2, name: "Tran Duong", age: 14, gender: "female", money: 2000 },
  { id: 3, name: "Dinh Huan", age: 25, gender: "female", money: 1050 },
  { id: 4, name: "Minh Hoang", age: 15, gender: "male", money: 500 },
];

b = { id: 5, name: "Hoang Bui", age: 19, gender: "male", money: 1000 }; // thêm người dùng
users.push(b);
a = 2; // nhập id muốn xóa
function delete_person(a) {
  a -= 1;
  users.splice(a, 1);
  console.log(users);
}

users.push(b); // thêm 2 phần tử khi làm ý sau !
users.push(b);
function thongke() {
  var x = 0,
    y = 0;
  for (i = 0; i < users.length; i++) {
    if (users[i].gender == "male") {
      // kiểm tra điều kiện là gender == male
      x++;
    }
    if (users[i].age > 15) {
      // kiểm tra tuổi > 15
      y++;
    }
  }
  console.log("nam : ", x, " </br> tuổi > 15 ", y);
}

function sum_money() {
  var tong = 0;
  for (i = 0; i < users.length; i++) {
    if (users[i].id % 2 == 0) {
      // kiểm tra điều kiện id chẵn
      tong += users[i].money;
    }
  }
  console.log("tổng số tiền người có id chẵn là : ", tong);
}

function Rickid() {
  var rick = (a = 0);
  for (i = 0; i < users.length; i++) {
    if (users[i].money > rick) {
      rick = users[i].money;
      a = i;
    }
  }
  console.log(users[a].name, " giàu nhất với tài sản : ", rick, "k");
}

function change() {
  for (i = 0; i < users.length; i++) {
    if (users[i].gender == "male") {
      users[i].gender = "female";
    }
  }
  console.log(users);
}
delete_person(a);
thongke();
sum_money();
Rickid();
change();
