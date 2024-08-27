import fs from 'fs';

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createRandomObject(index) {
    return {
        name: `Hiệp test ${index.toString().padStart(2, '0')}`,
        parentName: "Hiệp test"
    };
}

const objects = [];
var count = 0;
for (let i = 1001; i <= 10000; i++) {
    count++;
    objects.push(createRandomObject(i));
}

fs.writeFileSync('deptData.json', JSON.stringify(objects, null, 4));

console.log('Đã tạo thành công ' + count + ' đối tượng và lưu vào file "deptData.json"');
