const { Schema, model } = require('mongoose');

const projectSchema = new Schema({
    name: {
        type: String,
        minlength: 8,
        maxlength: 280,
        trim: true,
    },
    features: [
        {
            name: {
                type: String,
                required: true,
            }
        }
    ]
})

const Project = model('Project', projectSchema);

module.exports = Project