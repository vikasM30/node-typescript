import 'reflect-metadata';
import express, { NextFunction, Request, Response, Router } from 'express';
import Container from 'typedi';
import { UserController } from '../controllers/user.controller';
/**
 * Express router for managing leads.
 */
class UserRouter {
	public router: Router;

	private readonly userController = Container.get(UserController);

	/**
	 * Initializes a new instance of the LeadRouter class.
	 */
	constructor() {
		this.router = express.Router();
		this.routes();

	}


	public async getUsers(
		req: Request,
		res: Response,
		next: NextFunction,
	): Promise<any> {
		try {
		const a: any = await this.userController.getUser();
		return res.json(a);
		} catch (err) {
			throw new Error(`${err}`);
			
		}
	}

	/**
	 * Defines the routes for the router.
	 */
	public routes() {
		this.router.get('/', this.getUsers.bind(this));
	}
}

export default UserRouter;
