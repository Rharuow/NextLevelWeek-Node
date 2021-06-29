import {Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";
import { v4 as uuid } from "uuid"

@Entity("users")
class User {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  admin: boolean;

  @CreateDateColumn()
  create_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if(!this.id /* if a new user */ ) {
      this.id = uuid()
    }
  }
}

export { User }

// Entidade  < - > ORM < - > BD (users)