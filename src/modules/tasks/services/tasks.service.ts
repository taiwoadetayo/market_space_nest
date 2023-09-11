import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOneOptions } from 'typeorm';
import { Tasks } from '../tasks.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Tasks)
    private tasksRepository: Repository<Tasks>,
  ) {}

  async create(tasks: Tasks): Promise<Tasks> {
    return this.tasksRepository.save(tasks);
  }

  async findAll(): Promise<Tasks[]> {
    return this.tasksRepository.find();
  }

  async findOne(id: number): Promise<Tasks | undefined> {
    // Create a FindOneOptions object with the where condition
    const options: FindOneOptions<Tasks> = {
      where: { id }, // Assuming "id" is the primary key of the Task entity
    };

    return this.tasksRepository.findOne(options);
  }

  async update(id: number, tasks: Tasks): Promise<Tasks | undefined> {
    await this.tasksRepository.update(id, tasks);

    const options: FindOneOptions<Tasks> = {
      where: { id }, // Assuming "id" is the primary key of the Task entity
    };

    return this.tasksRepository.findOne(options);
  }

  async remove(id: number): Promise<void> {
    await this.tasksRepository.delete(id);
  }
}
