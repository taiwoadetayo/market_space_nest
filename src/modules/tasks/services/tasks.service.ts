import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOneOptions } from 'typeorm';
import { Task } from '../task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private tasksRepository: Repository<Task>,
  ) {}

  async create(task: Task): Promise<Task> {
    return this.tasksRepository.save(task);
  }

  async findAll(): Promise<Task[]> {
    return this.tasksRepository.find();
  }

  async findOne(id: number): Promise<Task | undefined> {
    // Create a FindOneOptions object with the where condition
    const options: FindOneOptions<Task> = {
      where: { id }, // Assuming "id" is the primary key of the Task entity
    };

    return this.tasksRepository.findOne(options);
  }

  async update(id: number, task: Task): Promise<Task | undefined> {
    await this.tasksRepository.update(id, task);

    const options: FindOneOptions<Task> = {
      where: { id }, // Assuming "id" is the primary key of the Task entity
    };

    return this.tasksRepository.findOne(options);
  }

  async remove(id: number): Promise<void> {
    await this.tasksRepository.delete(id);
  }
}
