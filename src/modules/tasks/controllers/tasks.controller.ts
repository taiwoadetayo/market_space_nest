import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { TasksService } from '../services/tasks.service';
import { TaskDto } from '../dtos/task.dto';
import { Tasks } from '../tasks.entity';

@Controller('api/tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  create(@Body() tasks: TaskDto): Promise<Tasks> {
    return this.tasksService.create(tasks);
  }

  @Get()
  findAll(): Promise<Tasks[]> {
    return this.tasksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Tasks | undefined> {
    return this.tasksService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() tasks: Tasks): Promise<Tasks | undefined> {
    return this.tasksService.update(+id, tasks);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.tasksService.remove(+id);
  }
}
