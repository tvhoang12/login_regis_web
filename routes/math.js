// file: math.js
const PI = 3.14159;

function cong(a, b) {
    return a + b;
}

function tru(a, b) {
    return a - b;
}

// Đây là phần quan trọng nhất: Đóng gói những gì muốn "public"
// Tương tự từ khóa 'public' trong Java class
module.exports = {
    PI,
    cong,
    // Hàm 'tru' không được export -> Nó là private, file khác không gọi được
};