import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthenticationService } from './services/authentication.service';
import { AuthenticationController } from './controllers/authentication.controller';
import { Users } from '../../modules/users/users.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Users])],
  providers: [AuthenticationService],
  controllers: [AuthenticationController],
  // ... other module configurations
})
export class AuthenticationModule {}
