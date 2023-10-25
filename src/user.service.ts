import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./create-user.dto";

@Injectable()
export class UserService {

  private users = [
    {
      firstName: 'rossi',
      age: 23
    },
    {
      firstName: 'bianchi',
      age: 28
    }
  ]

  sayHello(): string {
    return 'Hello World!';
  }

  userByName(firstName: string) {
    const userFoud = this.users.filter(user => user.firstName === firstName);
    return userFoud;
  }

  createUser(createUserDto: CreateUserDto) {
    const user = {
      ...createUserDto
    }
    return user;
  }
}
