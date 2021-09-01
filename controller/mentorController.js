const Mentor = require('./../model/mentorModel');


exports.getMentor = (req, res) => {
    res.status(200).json({
        status: 'success',
        data: 'mentor getted'
    });
}

exports.getSpecificMentor = (req, res) => {
    res.status(200).json({
        status: 'success',
        data: 'specific mentor getted'
    });
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

exports.updateMentor = (req, res) => {
    console.log(req.body)
    res.status(201).json({
        status:'success',
        data: req.body
    });
}

exports.deleteMentor = (req, res) => {
    res.status(201).json({
        status:'success',
        data: 'deleted'
    });
}