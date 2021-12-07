import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm"
import { v4 as uuidV4 } from "uuid"

@Entity("users")
class User {
  constructor() {
    if (!this.id) {
      this.id = uuidV4()
    }
  }

  @PrimaryColumn()
  id: string

  @Column()
  name: string

  @Column()
  email: string

  @Column()
  password: string

  @Column()
  drive_license: string

  @Column()
  isAdmin: boolean

  @Column()
  avatar: string

  @CreateDateColumn()
  created_at: Date
}

export { User }