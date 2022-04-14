import { PrismaService } from '@lib/prisma';
import { Currency } from '@lib/prisma/@generated/prisma-nestjs-graphql/currency/currency.model';
import { Game } from '@lib/prisma/@generated/prisma-nestjs-graphql/game/game.model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GameService {
  constructor(private prisma: PrismaService) {}

  async getAllUpComingGame(): Promise<Game[]> {
    const games = await this.prisma.game.findMany({
      include: {
        game_statistics: {
          include: {
            currency: true,
          },
        },
      },
    });
    let game1: (Game & Currency[])[];

    const now = new Date().getTime();
    const game = games
      .filter((item) => item.game_statistics && item.game_statistics.length > 0)
      .flatMap((item) => item.game_statistics)
      .flatMap((item) => item.currency);
    console.log(game);
    return games;
  }

  async getCurrency(uid: string[]): Promise<Currency[]> {
    return await this.prisma.currency.findMany({
      where: {
        uid: {
          in: uid,
        },
      },
    });
  }
}
