import fs from 'fs';

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createRandomObject(index) {
    return {
        name: "Performance test " + index,
        no: "mssv" + index,
        mobile: `035${getRandomInt(10000000000, 99999999999)}`,
        newPassword: "Zaq12wsxcde3",
        deptName: "Quản lý chung",
        userType: "2",
        email: `performance-test${index}@gmail.com`,
    };
}

const objects = [];
var count = 0;
for (let i = 1001; i <= 10000; i++) {
    count++;
    objects.push(createRandomObject(i));
}

fs.writeFileSync('userData.json', JSON.stringify(objects, null, 4));

console.log('Đã tạo thành công ' + count + ' đối tượng và lưu vào file "userData.json"');
