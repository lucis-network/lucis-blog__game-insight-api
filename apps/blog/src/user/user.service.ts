import { PrismaService } from '@lib/prisma';
import { Injectable, Logger } from '@nestjs/common';
import { ProfileUpdateInput } from './user.type';

@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name);

  constructor(private prisma: PrismaService) {}

  async updateProfile(userId: number, data: ProfileUpdateInput) {
    return {};
  }
}
