import { Request, Response, Router } from 'express';
import UsersController from '@controllers/users.controller';
import { CreateUserDto } from '@dtos/users.dto';
import { Routes } from '@interfaces/routes.interface';

class UsersRoute implements Routes {
  public path = '/users';
  public router = Router();
  public usersController = new UsersController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`/users`, this.usersController.getUsers);
    this.router.get(`/users/:id`, async (req: Request, res: Response) => {
      /*  #swagger.parameters['id'] = { description: 'User id' }
          #swagger.responses[200] = {
            description: 'User successfully obtained.',
            schema: { $ref: 'User.json' }
    } */
      this.usersController.getUserById;
    });
    this.router.post(`/users`, this.usersController.createUser);
    this.router.put(`/users/:id`, this.usersController.updateUser);
    this.router.delete(`/users/:id`, this.usersController.deleteUser);
  }
}

export default UsersRoute;
