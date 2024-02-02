const studentForm = document.getElementById('studentForm');
const studentList = document.getElementById('studentList');

function addStudent() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;

    if (name && age) {
        const studentItem = document.createElement('div');
        studentItem.className = 'student-item';
        studentItem.innerHTML = `<strong>${name}</strong> - ${age} tuổi`;
        studentList.appendChild(studentItem);

        // Clear form
        studentForm.reset();
    } else {
        alert('Vui lòng nhập đầy đủ thông tin sinh viên.');
    }
}

let students = [];

function addStudent() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;

    if (name && age) {
        const student = { name, age };
        students.push(student);
        displayStudents();
        studentForm.reset();
    } else {
        alert('Vui lòng nhập đầy đủ thông tin sinh viên.');
    }
}

function displayStudents() {
    const studentListDiv = document.getElementById('studentList');
    studentListDiv.innerHTML = '';

    students.forEach((student, index) => {
        const studentItem = document.createElement('div');
        studentItem.className = 'student-item';
        studentItem.innerHTML = `<strong>${student.name}</strong> - ${student.age} tuổi
                                <button onclick="editStudent(${index})">Sửa</button>
                                <button onclick="deleteStudent(${index})">Xóa</button>`;
        studentListDiv.appendChild(studentItem);
    });
}

function editStudent(index) {
    const student = students[index];
    document.getElementById('name').value = student.name;
    document.getElementById('age').value = student.age;

    // Ẩn nút thêm, hiển thị nút cập nhật
    document.getElementById('addButton').style.display = 'none';
    document.getElementById('updateButton').style.display = 'inline';

    // Lưu index của sinh viên cần sửa
    document.getElementById('updateButton').dataset.index = index;
}

function updateStudent() {
    const index = document.getElementById('updateButton').dataset.index;
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;

    if (name && age) {
        students[index] = { name, age };
        displayStudents();
        studentForm.reset();

        // Hiển thị nút thêm, ẩn nút cập nhật
        document.getElementById('addButton').style.display = 'inline';
        document.getElementById('updateButton').style.display = 'none';
    } else {
        alert('Vui lòng nhập đầy đủ thông tin sinh viên.');
    }
}

function deleteStudent(index) {
    students.splice(index, 1);
    displayStudents();
}

function deleteAllStudents() {
    students = [];
    displayStudents();
}

function showEditForm() {
    // Hiển thị nút thêm, ẩn nút cập nhật
    document.getElementById('addButton').style.display = 'inline';
    document.getElementById('updateButton').style.display = 'none';
}

function searchStudents() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredStudents = students.filter(student => student.name.toLowerCase().includes(searchInput));
    displayFilteredStudents(filteredStudents);
}

function displayFilteredStudents(filteredStudents) {
    const studentListDiv = document.getElementById('studentList');
    studentListDiv.innerHTML = '';

    filteredStudents.forEach((student, index) => {
        const studentItem = document.createElement('div');
        studentItem.className = 'student-item';
        studentItem.innerHTML = `<strong>${student.name}</strong> - ${student.age} tuổi
                                <button onclick="editStudent(${index})">Sửa</button>
                                <button onclick="deleteStudent(${index})">Xóa</button>`;
        studentListDiv.appendChild(studentItem);
    });
}
