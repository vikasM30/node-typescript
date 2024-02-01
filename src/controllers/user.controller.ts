import { Get, Route, Tags } from 'tsoa';
import 'reflect-metadata';
import { Service } from 'typedi';
import { UserService } from '../services/user.service';

@Route('api/user')
@Tags('User Services')
@Service()
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Get('/')
	public async getUser(): Promise<any> {
		return this.userService.getUsers();
	}
}
