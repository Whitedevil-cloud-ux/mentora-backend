exports.onlyParent = (req, res, next) => {
    if(req.user.role !== "parent"){
        return res.status(403).json({
            message: "Access denied. Parent only."
        });
    }

    next();
};

exports.onlyMentor = (req, res, next) => {
    if(req.user.role !== "mentor"){
        return res.status(403).json({
            message: "Access denied. Mentor only."
        });
    }

    next();
};