const { User, Project } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return await User.find().populate('projects')
    },
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
    addProject: async (parent, { userId, name, features }, ) => {
      try {
        const project = await Project.create({ name, features });
        const user = await User.findById({ _id: userId });
        if (!user) {
          throw new Error('User not found');
        }
        user.projects.push(project);
        await user.save();
        return project;
      } catch (error) {
        throw new Error(error);
      }
    },
  },
};

module.exports = resolvers;