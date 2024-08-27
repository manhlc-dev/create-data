import fs from 'fs';

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createRandomObject(index) {
    return {
        id: index,
        studentInfoList:[
            "0505200528"
        ]
    };
}

const objects = [];
var count = 0;
for (let i = 1074; i <= 2074; i++) {
    count++;
    objects.push(createRandomObject(i));
}

fs.writeFileSync('deleteStudent.json', JSON.stringify(objects, null, 4));

console.log('Đã tạo thành công ' + count + ' đối tượng và lưu vào file "deleteStudent.json"');
