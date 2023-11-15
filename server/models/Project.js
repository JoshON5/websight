const { Schema, model } = require('mongoose');

const remarkSchema = new Schema({
  remarkText: {
    type: String,
    minlength: 28,
    maxlength: 280,
  },
  remarkAuthor: {
    type: String,
  },
});

const projectSchema = new Schema({
    name: {
        type: String,
        minlength: 8,
        maxlength: 280,
        trim: true,
    },
    description: {
        type: String,
        minlength: 10,
        maxlength: 280,
        trim: true
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
        type: [remarkSchema],
        default: []
      },
    accepted: {
        type: Boolean,
        default: false
    }
})

const Project = model('Project', projectSchema);

module.exports = Project