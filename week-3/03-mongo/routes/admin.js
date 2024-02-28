const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require("../db/index.js");

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    // const username = req.body.username;
    // const password = req.body.password;

    const {username, password} = req.body;
    await Admin.create({
        username,
        password
    })

    res.json(
        {
            msg: "Admin created successfully!"
        }
    )
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const {title, description, price, imageLink} = req.body;
    const course = await Course.create({
        title,
        description,
        price,
        imageLink
    })

    console.log(course);

    res.json(
        {
            msg: "Couse created successfully",
            courseId: course._id
        }
    )
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const allCourses = await Course.findOne({});

    res.json({
        courses: allCourses
    });

});

module.exports = router;