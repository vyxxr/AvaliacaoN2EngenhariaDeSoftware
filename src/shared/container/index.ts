import { container } from "tsyringe"
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository"
import { ICategoriesRepository } from "@modules/cars/repositories/ICategoriesRepository"
import { CategoriesRepository } from "@modules/cars/infra/typeorm/repositories/CategoriesRepository"
import { ISpecificatiosRepository } from "@modules/cars/repositories/ISpecificatiosRepository"
import { UserRepository } from "@modules/accounts/infra/typeorm/repositories/UsersRepository"
import { SpecificationRepository } from "@modules/cars/infra/typeorm/repositories/SpecificationsRepository"


container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
)

container.registerSingleton<ISpecificatiosRepository>(
  "SpecificationRepository",
  SpecificationRepository
)

container.registerSingleton<IUsersRepository>(
  "UserRepository",
  UserRepository
)
