import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute(data: IRequest): User {
    const user = this.usersRepository.findByEmail(data.email);

    if (user) {
      throw new Error("User already exists");
    }

    return this.usersRepository.create(data);
  }
}

export { CreateUserUseCase };
