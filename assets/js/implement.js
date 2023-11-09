// Danh sách sinh viên
var sinhVienList = [];

// Hàm thêm sinh viên
function themSinhVien() {
    var studentName = document.getElementById("studentName").value;
    if (studentName) {
        sinhVienList.push(studentName);
        document.getElementById("studentList").innerHTML = "";
        sinhVienList.forEach(function(student) {
            var listItem = document.createElement("li");
            listItem.textContent = student;
            document.getElementById("studentList").appendChild(listItem);
        });
        document.getElementById("studentName").value = "";
    } else {
        alert("Vui lòng nhập tên sinh viên.");
    }
}