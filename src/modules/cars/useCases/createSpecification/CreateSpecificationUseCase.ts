import { inject, injectable } from "tsyringe"
import { AppError } from "@shared/errors/AppError"
import { ISpecificatiosRepository } from "@modules/cars/repositories/ISpecificatiosRepository"

interface IRequest {
  name: string
  description: string
}
@injectable()
class CreateSpecificationUseCase {

  constructor(
    @inject("SpecificationRepository")
    private specificationsRepository: ISpecificatiosRepository
  ) { }

  async execute({ name, description }: IRequest): Promise<void> {
    const specificationAlreadyExist = await this.specificationsRepository.findByName(name)

    if (specificationAlreadyExist) {
      throw new AppError("Specification Already Exist!")
    }
    await this.specificationsRepository.create({ name, description })
  }
}

export { CreateSpecificationUseCase }