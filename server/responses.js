const responses = {
    success(payload){
        return this.status(200).json(payload);
    },

    created(payload){
        return this.status(201).json(payload);
    },

    badRequest(payload){
        return this.status(400).json({
            error: 'Bad Request',
            ...payload
        });
    }
};

module.exports = (req, res, next) => {
    Object.assign(res, responses);
    next();
};