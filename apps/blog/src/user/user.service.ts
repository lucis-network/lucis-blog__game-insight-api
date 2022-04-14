import { PrismaService } from '@lib/prisma';
import { UserWhereInput } from '@lib/prisma/@generated/prisma-nestjs-graphql/user/user-where.input';
import { Injectable, Logger } from '@nestjs/common';
import { Prisma } from '@prisma/client';

@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name);

  constructor(private prisma: PrismaService) {}

  async user(where: Prisma.UserWhereInput) {
    const userInfo = await this.prisma.user.findFirst({
      where: where,
    });
  }
}
