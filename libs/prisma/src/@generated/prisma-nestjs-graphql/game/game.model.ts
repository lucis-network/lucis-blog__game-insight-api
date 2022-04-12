import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { GameChart } from '../game-chart/game-chart.model';
import { GameRanking } from '../game-ranking/game-ranking.model';
import { GameInsight } from '../game-insight/game-insight.model';
import { GameStatistics } from '../game-statistics/game-statistics.model';
import { GameCount } from './game-count.output';

@ObjectType()
export class Game {

    @Field(() => ID, {nullable:false})
    uid!: string;

    @Field(() => String, {nullable:true})
    name!: string | null;

    @Field(() => String, {nullable:true})
    desc!: string | null;

    @Field(() => String, {nullable:true})
    desc_team!: string | null;

    @Field(() => String, {nullable:true})
    logo!: string | null;

    @Field(() => String, {nullable:true})
    website!: string | null;

    @Field(() => String, {nullable:true})
    whitepaper!: string | null;

    @Field(() => String, {nullable:true})
    pitchdeck!: string | null;

    @Field(() => String, {nullable:true})
    trailer_video!: string | null;

    @Field(() => String, {nullable:true})
    facebook!: string | null;

    @Field(() => String, {nullable:true})
    twitter!: string | null;

    @Field(() => String, {nullable:true})
    telegram!: string | null;

    @Field(() => String, {nullable:true})
    youtube!: string | null;

    @Field(() => String, {nullable:true})
    discord!: string | null;

    @Field(() => String, {nullable:true})
    road_map!: string | null;

    @Field(() => String, {nullable:true})
    game_team!: string | null;

    @Field(() => [GameChart], {nullable:true})
    game_charts?: Array<GameChart>;

    @Field(() => GameRanking, {nullable:true})
    game_ranking?: GameRanking | null;

    @Field(() => GameInsight, {nullable:true})
    game_insight?: GameInsight | null;

    @Field(() => [GameStatistics], {nullable:true})
    game_currencies?: Array<GameStatistics>;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => GameCount, {nullable:false})
    _count?: GameCount;
}
