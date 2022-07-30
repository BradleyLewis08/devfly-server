import { extendType, stringArg, nonNull } from 'nexus';

export const UserQuery = extendType({
  type: 'Query',
  definition(t) {
	  t.field('user', {
		  type: 'User',
		  args: {
			  userId: nonNull(stringArg())
		  },
		  resolve: async (_, { userId }, {models}) => {
			return await models.User.findOne({
				userId: userId
			})
		  }
	  });
  }
});




