import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { getRepository, Repository } from "typeorm";
import { User } from "../entities/User";

class UserRepository implements IUsersRepository {

  private repository: Repository<User>

  constructor() {
    this.repository = getRepository(User)
  }

  async create({ name, email, drive_license, password, avatar, id }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      email,
      name,
      drive_license,
      password,
      avatar,
      id
    })

    await this.repository.save(user)
  }

  async findByEmail(email: string): Promise<User> {

    const user = await this.repository.findOne({ email })
    return user
  }

  async findById(user_id: string): Promise<User> {

    const user = await this.repository.findOne({ id: user_id })
    return user
  }
}

export { UserRepository }