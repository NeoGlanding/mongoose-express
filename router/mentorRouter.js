const express = require('express');
const mentorController = require('./../controller/mentorController');
const router = express.Router();

router.route('/').get(mentorController.getMentor).post(mentorController.postMentor);
router.route('/:id').get(mentorController.getSpecificMentor).patch(mentorController.updateMentor).delete(mentorController.deleteMentor);

module.exports = router;