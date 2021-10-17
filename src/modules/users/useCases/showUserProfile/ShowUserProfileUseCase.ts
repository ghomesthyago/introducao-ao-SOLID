import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    try {
      const user = this.usersRepository.findById(user_id);

      if (!user) {
        throw new Error("User not Found!");
      }
      return user;
    } catch (err) {
      throw new Error(err.message);
    }
  }
}

export { ShowUserProfileUseCase };
