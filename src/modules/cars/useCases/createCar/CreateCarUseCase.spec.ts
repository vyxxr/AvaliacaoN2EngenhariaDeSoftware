import { CreateCarUseCase } from "./CreateCarUseCase"


let createCarUseCase: CreateCarUseCase
describe("Create Car", () => {
  beforeEach(() => {
    createCarUseCase = new CreateCarUseCase()
  })

  it("should be able to create a new car", async () => {
    await createCarUseCase.execute({
      brand: "Brand",
      category_id: "Category",
      daily_rate: 100,
      description: "Description Car",
      fine_amount: 60,
      license_plate: "ABC-19-21",
      name: "Name Car"
    })
  })
})