const Student=require('../models/student');
const Attendance=require('../models/attendance');
exports.submitOrGetAttendance=(req, res, next) => {
    const {date, name, status } = req.body;
    console.log("body"+date,name,status)
    Student.findAll({
        where:{
            name : name
        }
    })
    .then(students=>{
        students[0].createAttendance({
            date : date,
            status: status
        })
        .then(result=>{
            console.log("attendance added successfully!")
        })
        .catch(err=>console.log(err));
    })
    .catch(err=>console.log(err));
}

exports.getReport=(req, res, next) => {
    const date = req.params.date;
    Attendance.findAll({
      where: { date },
      include: [{ model: Student, attributes: ['name'] }],
    }).then(result=>{
        res.json({ success: true, result });
    }).catch(err=>console.log(err));
}

exports.getStudents=(req, res, next) => {
    Student.findAll().then(result=>{
        res.json({ success: true, result })
    }
    ).catch(err=>console.log(err))
}