import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
	name: String,
	email: String,
	userId: String
});

export const User = mongoose.model('User', userSchema);
