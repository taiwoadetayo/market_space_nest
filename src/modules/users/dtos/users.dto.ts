/* eslint-disable prettier/prettier */
import {
  IsString,
  MinLength,
  MaxLength,
  IsNotEmpty,
  Matches,
  IsEmail,
  IsBoolean,
  IsDate,
  IsDecimal,
} from 'class-validator';

export class UsersDto {
  @IsNotEmpty()
  id: number;

  @IsEmail({}, { message: 'Invalid email format' })
  @IsNotEmpty()
  email: string;

  @IsString()
  @MinLength(8)
  @MaxLength(15)
  @IsNotEmpty()
  phone: string;

  @IsDate()
  @IsNotEmpty()
  email_verified_at: Date;

  @IsString()
  @MinLength(8)
  @MaxLength(30)
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/, {
    message: 'Password too weak',
  })
  @IsNotEmpty()
  password: string;

  @IsString()
  @MaxLength(255)
  @IsNotEmpty()
  remember_token: string;

  @IsDate()
  @IsNotEmpty()
  created_at: Date;

  @IsDate()
  @IsNotEmpty()
  updated_at: Date;

  @IsString()
  @MinLength(3)
  @MaxLength(40)
  @IsNotEmpty()
  first_name: string;

  @MinLength(3)
  @MaxLength(40)
  @IsNotEmpty()
  last_name: string;

  @IsString()
  @MaxLength(255)
  @IsNotEmpty()
  photo: string;

  @IsDecimal()
  @IsNotEmpty()
  wallet_balance: number;

  @IsBoolean()
  @IsNotEmpty()
  is_verified: boolean;

  @IsDate()
  @IsNotEmpty()
  is_verified_date: Date;

  @IsString()
  @MinLength(3)
  @MaxLength(255)
  @IsNotEmpty()
  business_name: string;

  @IsDate()
  @IsNotEmpty()
  last_seen: Date;

  @IsBoolean()
  @IsNotEmpty()
  is_active: boolean;


  // Define the allowed keys as a static property
  static allowedKeys: string[] = [
    'password',
    'email',
    'first_name',
    'last_name',
  ];
}
