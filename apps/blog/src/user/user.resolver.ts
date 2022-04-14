import {
  AppAuthUser,
  CurrentUser,
} from '@lib/helper/decorator/current_user.decorator';
import { AppError } from '@lib/helper/errors/base.error';
import { UserGraphql } from '@lib/prisma/type/user.type';
import { UseGuards } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import { GqlAuthGuard } from '../../../../libs/helper/src/guards/auth.guard';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {
  constructor(private userService: UserService) {}

  @UseGuards(GqlAuthGuard)
  @Query(() => UserGraphql, { nullable: true })
  async me(@CurrentUser() user: AppAuthUser): Promise<any> {
    if (!user.id) {
      throw new AppError('Bad request');
    }
    return this.userService.user({ id: user.id });
  }

  // Mutation
}
