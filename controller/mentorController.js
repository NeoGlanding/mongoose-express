const Mentor = require('./../model/mentorModel');


exports.getMentor = async (req, res) => {
    try {
        const queryObj = {...req.query};
        const exclusive = ['sort', 'fields', 'page', 'limit']

        exclusive.forEach(el => delete queryObj[el]);
        
        const query = Mentor.find(queryObj);

        const mentors = await query;
        res.status(200).json({
            status: 'success',
            data: mentors
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }
}

exports.getSpecificMentor = async (req, res) => {
    try {
        const mentor = await Mentor.findById(req.params.id)
        res.status(200).json({
            status: 'success',
            data: mentor
        });
    } catch(err) {
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }
}

exports.postMentor = async (req, res) => {
    try {
        const newMentor = await Mentor.create(req.body);

        res.status(201).json({
            status: 'success',
            data: newMentor
        });        
    } catch(error) {
        res.status(400).json({
            status: 'fail',
            error
        })
    }

}

exports.updateMentor = async (req, res) => {
    try {
        const mentor = await Mentor.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidator: true
        });
        res.status(201).json({
            status:'success',
            data: mentor
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            error
        })
    }

}

exports.deleteMentor = async (req, res) => {
    try {
        const Data = await Mentor.findByIdAndDelete(req.params.id)
        res.status(204).json({
            status:'success',
            data: 'deleted'
        });
    } catch(err) {
        res.status(404).json({
            status: 'failed',
            error: err
        })
    }
}