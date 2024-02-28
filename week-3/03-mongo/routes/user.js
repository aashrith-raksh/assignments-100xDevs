const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {User}= require("../db")
// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const {username, password} = req.headers;
    User.create({
        username,
        password
    })

    res.json({
        msg: "User Created Successfully"
    })


});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const {username} = req.headers;
    const {courseId} = req.params;

    await User.updateOne({
        username,
    },{
        "$push":{
            purchasedCourses: courseId
        }
    })

    res.json(
        {
            msg: "Course purchased!"
        }
    )
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

module.exports = router