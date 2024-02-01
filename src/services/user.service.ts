import { Service } from 'typedi';

@Service()
export class UserService {
	constructor(
	) {}

	public getUsers(): number[] {
		return [1,2,3];
	}

}
