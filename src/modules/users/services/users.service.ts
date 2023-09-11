/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOneOptions } from 'typeorm';
import { Users } from '../users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private userRepository: Repository<Users>,
  ) {}

  async create(user: Users): Promise<Users> {
    return this.userRepository.save(user);
  }

  async findAll(): Promise<Users[]> {
    return this.userRepository.find();
  }

  async findOne(id: number): Promise<Users | undefined> {
    // Create a FindOneOptions object with the where condition
    const options: FindOneOptions<Users> = {
      where: { id }, // Assuming "id" is the primary key of the Task entity
    };

    return this.userRepository.findOne(options);
  }

  async update(id: number, user: Users): Promise<Users | undefined> {
    await this.userRepository.update(id, user);

    const options: FindOneOptions<Users> = {
      where: { id }, // Assuming "id" is the primary key of the Task entity
    };

    return this.userRepository.findOne(options);
  }

  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
