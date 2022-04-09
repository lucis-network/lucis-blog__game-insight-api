import { PrismaService } from '@lib/prisma';
import { Module } from '@nestjs/common';
import { TaskService } from './task.service';

@Module({
  providers: [TaskService, PrismaService],
  exports: [TaskService],
})
export class TaskModule {}
