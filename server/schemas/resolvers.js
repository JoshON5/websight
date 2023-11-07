const { User, Project } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    projects: async (parent, args, context) => {
      if (context.user && context.user.role === 'ADMIN') {
        return await Project.find();
      } else if (context.user && context.user.role === 'CUSTOMER') {
        return await Project.find({ _id: context.user._id });
      } else {
        throw new AuthenticationError('User not authorized');
      }
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    addProject: async (parent, { name }, context) => {
      if (context.user) {
        const project = new Project({ name });
        await User.findByIdAndUpdate(context.user._id, { $push: { projects: project } });
        return project;
      } else {
        throw new AuthenticationError('User not authorized');
      }
    },
  },
};

module.exports = resolvers;