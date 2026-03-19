function addNumbers() {
    firstNum = 4;
    secondNum = 8;
    result = firstNum + secondNum;
    return result;
}

result = 0;

/// hàm alert vừa thêm
alert("Trước khi gọi hàm: " + result);

result = addNumbers();

/// hàm alert vừa thêm
alert("Sau khi gọi hàm: " + result);