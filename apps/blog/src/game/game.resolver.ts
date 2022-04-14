import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Game } from '@prisma/client';
import { GameService } from './game.service';
import { GCurrencies, GUpComingGame } from './game.type';

@Resolver()
export class GameResolver {
  constructor(private gameService: GameService) {}

  @Query(() => [GUpComingGame], { nullable: true })
  async getUpComingGame(): Promise<Game[]> {
    return await this.gameService.getAllUpComingGame();
  }
}
