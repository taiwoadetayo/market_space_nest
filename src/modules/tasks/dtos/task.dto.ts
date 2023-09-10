import {
  IsString,
  MinLength,
  MaxLength,
  IsNotEmpty,
  Matches,
  IsEmail,
  IsBoolean,
} from 'class-validator';

export class TaskDto {

  @IsNotEmpty()
  id: number;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsBoolean()
  @IsNotEmpty()
  completed: boolean;

  // Define the allowed keys as a static property
  static allowedKeys: string[] = [
    'title',
    'completed',
  ];
}
