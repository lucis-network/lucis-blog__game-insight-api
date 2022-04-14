import { Chain } from '@lib/prisma/@generated/prisma-nestjs-graphql/chain/chain.model';
import { Currency } from '@lib/prisma/@generated/prisma-nestjs-graphql/currency/currency.model';
import { Game } from '@lib/prisma/@generated/prisma-nestjs-graphql/game/game.model';
import { Field, ObjectType, OmitType } from '@nestjs/graphql';

@ObjectType()
export class GUpComingGame extends OmitType(Game, [
  'desc',
  'desc_team',
  'website',
  'whitepaper',
  'pitchdeck',
  'trailer_video',
  'facebook',
  'twitter',
  'telegram',
  'youtube',
  'discord',
  'road_map',
  'game_team',
  'game_charts',
  'game_ranking',
  'game_insight',
] as const) {
  @Field(() => [GCurrencies], { nullable: true })
  currencies: Array<Currency>;
}

@ObjectType()
export class GCurrencies extends OmitType(Currency, [
  'uid',
  'name',
  'address',
  'owner',
  'chain',
  'game_statistic',
]) {}
