// Lấy đối tượng chứa ảnh từ CSS
var imageDiv = document.querySelector('.download-image');

// Lấy nút download
var downloadBtn = document.getElementById('downloadBtn');

// Hàm khi bấm nút download
downloadBtn.addEventListener('click', function() {
    // Tạo một canvas để vẽ ảnh từ CSS
    var canvas = document.createElement('canvas');
    canvas.width = imageDiv.clientWidth;
    canvas.height = imageDiv.clientHeight;
    var ctx = canvas.getContext('2d');

    // Vẽ ảnh từ CSS lên canvas
    var img = new Image();
    img.src = 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="' + canvas.width + '" height="' + canvas.height + '"></svg>');
    img.onload = function() {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        // Tạo một liên kết tải xuống cho ảnh
        var downloadLink = document.createElement('a');
        downloadLink.href = canvas.toDataURL('image/png');
        downloadLink.download = 'downloaded-image.png';

        // Thêm liên kết vào trang và tự động kích hoạt sự kiện click để tải xuống
        document.body.appendChild(downloadLink);
        downloadLink.click();

        // Xóa liên kết sau khi tải xuống hoàn tất
        document.body.removeChild(downloadLink);
    };
});