import { extendType, stringArg, nonNull } from "nexus";

export const Signup = extendType({
	type: "Mutation",
	definition(t) {
		t.nonNull.field("signup", {
			type: "User",
			args: {
				name: nonNull(stringArg()),
				email: nonNull(stringArg()),
				userId: nonNull(stringArg())
			},
			resolve: async (_, { name, email, userId }, { models }) => {
				const createdUser = await models.User.create({
					name,
					email,
					userId
				});
				return createdUser;
			}
		})
	}
})




