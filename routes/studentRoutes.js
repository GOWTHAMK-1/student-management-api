const express = require("express");

const router = express.Router();


let students = [
    {
        id: 1,
        name: "Gowtham",
        age: 21,
        course: "MERN Stack"
    },
    {
        id: 2,
        name: "Arun",
        age: 22,
        course: "Java Full Stack"
    }
];


router.get("/", (req, res) => {
    res.status(200).json({
        message: "All Students Fetched Successfully",
        students: students
    });
});


router.post("/", (req, res) => {

    const newStudent = {
        id: students.length + 1,
        name: req.body.name,
        age: req.body.age,
        course: req.body.course
    };

    students.push(newStudent);

    res.status(201).json({
        message: "Student Added Successfully",
        student: newStudent
    });
});


router.put("/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({
            message: "Student Not Found"
        });
    }

    student.name = req.body.name || student.name;
    student.age = req.body.age || student.age;
    student.course = req.body.course || student.course;

    res.status(200).json({
        message: "Student Updated Successfully",
        student: student
    });
});


router.delete("/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const studentIndex = students.findIndex(s => s.id === id);

    if (studentIndex === -1) {
        return res.status(404).json({
            message: "Student Not Found"
        });
    }

    const deletedStudent = students.splice(studentIndex, 1);

    res.status(200).json({
        message: "Student Deleted Successfully",
        deletedStudent: deletedStudent
    });
});


module.exports = router;