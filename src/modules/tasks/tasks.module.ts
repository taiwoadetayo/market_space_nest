import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksController } from './controllers/tasks.controller';
import { TasksService } from './services/tasks.service';
import { Tasks } from './tasks.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Tasks]), // Include the Task entity here
  ],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
