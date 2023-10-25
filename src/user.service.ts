import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./create-user.dto";
import { ModifyUserAgeDto } from "./modify-userAge.dto";

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

  modifyUserAge(firstName: string, modifyUserAgeDto: ModifyUserAgeDto) {
    const result = this.users.filter(user => user.firstName === firstName);
    if(result){
      result[0].age ==  modifyUserAgeDto.age;
      return result;
    }else{
      throw new Error;
    }
  }

  deleteUserByName(firstName: string){
    const remuvableUser = this.users.filter(user => user.firstName === firstName);
    if(remuvableUser){
      return remuvableUser
    }else{
      throw new Error;
    }
  }
}
