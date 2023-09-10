import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthenticationModule } from './modules/authentication/authentication.module';
import { TasksModule } from './modules/tasks/tasks.module';
import { ProductsModule } from './modules/products/products.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', // Change this to your database type (e.g., 'mysql', 'postgres', etc.)
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'marketspaceng',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // This is for development only, be cautious in production
    }),
    AuthenticationModule,
    TasksModule,
    ProductsModule,
  ],
})
export class AppModule {}
