import {
  IsString,
  MinLength,
  MaxLength,
  IsNotEmpty,
  Matches,
  IsEmail,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MinLength(8)
  @MaxLength(30)
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/, {
    message: 'Password too weak',
  })
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  password_confirmation: string;

  @IsEmail({}, { message: 'Invalid email format' })
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  first_name: string;

  @IsString()
  @IsNotEmpty()
  last_name: string;

  // Define the allowed keys as a static property
  static allowedKeys: string[] = [
    'password',
    'password_confirmation',
    'email',
    'first_name',
    'last_name',
  ];
}
