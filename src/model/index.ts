import UserModel from './user.model';

const models = {
	UserModel,
};
export default models;
export type MyModels = typeof models;

Object.entries(models).map(([, model]) => {
	return model;
});
