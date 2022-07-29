import { extendType } from 'nexus';

export const UserQuery = extendType({
  type: 'Query',
  definition(t) {
	  t.field('user', {
		  type: 'User',
		  async resolve(_, __, {models}) {
			return await models.User.findOne({})
		  }
	  });
  }
});
