import fs from 'fs';

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createRandomObject(index) {
    return {
        id: "",
        termId: "123456",
        courseName: `Performance Test - ${index}`,
        classCredit: `MGT2902_49K01.2-E ${index}`,
        semesterId: "343",
        synopsis: "MGT2902_49K01.2-E 1",
        courseTypeList: [
            "841"
        ],
        teacherIds: [
            "1234444222",
            "252112054513"
        ],
        studentInfoList: [
            "25211205455",
            "25211205457",
            "1234444225",
            "25211205459",
            "25211205456"
        ],
        deptName: "Test Performance",
        hideFlag: "0"
    };
}

const objects = [];
var count = 0;
for (let i = 10011; i <= 11010; i++) {
    count++;
    objects.push(createRandomObject(i));
}

fs.writeFileSync('courseData.json', JSON.stringify(objects, null, 4));

console.log('Đã tạo thành công ' + count + ' đối tượng và lưu vào file "courseData.json"');
