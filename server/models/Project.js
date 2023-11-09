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
    ],
    remark: {
        remarkText: {
            type: String,
            required: true,
            minlength: 28,
            maxlength: 280,
        },
        remarkAuthor: {
            type: String,
            required: true
        }
    },
    accepted: {
        type: Boolean,
        default: false
    }
})

const Project = model('Project', projectSchema);

module.exports = Project