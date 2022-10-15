import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const userAdmin = this.usersRepository.findById(user_id);

    if (!userAdmin || !userAdmin.admin) {
      throw new Error("Unauthorized");
    }

    const user = this.usersRepository.list();

    if (user.length < 1) {
      throw new Error("User not found");
    }

    return user;
  }
}

export { ListAllUsersUseCase };
