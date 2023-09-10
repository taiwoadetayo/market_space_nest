import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dtos/CreateUser.dto';

@Injectable()
export class AuthenticationService {
  async createAccount(formData): Promise<any> { 
    const createuserDto = new CreateUserDto();
    Object.assign(createuserDto, formData);



    return createuserDto;

  }
}
