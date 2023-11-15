const { User, Project } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return await User.find().populate('projects')
    },
    user: async (parent, args, context ) =>{
      console.log(context.user.role)
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('projects')
      }
      throw AuthenticationError;
    },
    project: async (parent, { projectId }) => {
      return Project.findOne({ _id: projectId })
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
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError
      }

      const validatedPw = await user.isCorrectPassword(password)

      if (!validatedPw) {
        throw AuthenticationError
      }

      const token = signToken(user);

      return { token, user }
    },
    addProject: async (parent, { userId, name, features, description }, ) => {
      try {
        const project = await Project.create({ name, features, description });
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
    addRemark: async(parent, { projectId, remarkText }, context) => {
      if (context.user.role === 'ADMIN') {
        return Project.findOneAndUpdate(
          { _id: projectId },
          {
            $addToSet: {
              remark: { remarkText, remarkAuthor: context.user.name }
            },
          },
          {
            new: true,
            runValidators: true,
          }
        )
      }
      throw AuthenticationError;
    }
  },
};

module.exports = resolvers;
