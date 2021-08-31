exports.checkId = (req, res, next, val) => {
    if (val > 10) {
        return res.status(404).json({
            status: 'failed',
            message: 'not found'
        })
    }
    next();
}

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

exports.postMentor = (req, res) => {
    res.status(201).json({
        status: 'success',
        data: req.body
    });
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