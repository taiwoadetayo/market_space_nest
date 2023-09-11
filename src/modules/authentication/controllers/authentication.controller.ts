import { Controller, Req, Post, BadRequestException } from '@nestjs/common';
import { Request } from 'express';
import { validateSync } from 'class-validator';
import { CreateUserDto } from '../dtos/CreateUser.dto';
import { AuthenticationService } from '../services/authentication.service';

@Controller('api/authentication')
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {}

  // private method for checking for dto integrity
  private checkForm(requestData: Record<string, any>, objectDto: any) {
    const requestKeys = Object.keys(requestData);
    const allowedKeys = objectDto.allowedKeys;

    const unknownKey = requestKeys.filter(
      (key: string) => !allowedKeys.includes(key),
    );
    const missingKey = allowedKeys.filter(
      (key: string) => !requestKeys.includes(key),
    );

    let errorMessage = '';
    let errorStatus: boolean = false;

    const createDto = new objectDto();
    Object.assign(createDto, requestData);
    const validationErrors = validateSync(createDto);
    const formData = createDto;

    if (
      unknownKey.length > 0 ||
      missingKey.length > 0 ||
      validationErrors.length > 0
    ) {
      errorStatus = true;
      if (unknownKey.length > 0) {
        errorMessage += `Invalid fields found: ${unknownKey.join(', ')}. `;
      }
      if (missingKey.length > 0) {
        errorMessage += `Missing required fields: ${missingKey.join(', ')}. `;
      }
      if (validationErrors.length > 0) {
        const constraintMessages = validationErrors.map(
          (error: any) => error.constraints,
        );
        constraintMessages.forEach((error: any) => {
          Object.keys(error).forEach((key) => {
            if (typeof error[key] === 'string') {
              errorMessage += `${error[key]}, `;
            }
          });
        });
      }
    }

    return { errorStatus, errorMessage, formData };
  }

  // account-signup
  @Post('account-signup')
  async AccountSignUp(@Req() req: Request) {
    const { errorStatus, errorMessage, formData } = this.checkForm(
      req.body,
      CreateUserDto,
    );

    if (errorStatus === true) throw new BadRequestException(errorMessage);
    if (formData.password !== formData.password_confirmation)
      throw new BadRequestException(
        'Password and confirm password did not match',
      );

    return await this.authenticationService.create(formData);
  }
}
