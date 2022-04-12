import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { GameChartType } from '../prisma/game-chart-type.enum';

@ObjectType()
export class GameChartMinAggregate {

    @Field(() => String, {nullable:true})
    uid?: string;

    @Field(() => GameChartType, {nullable:true})
    type?: keyof typeof GameChartType;

    @Field(() => String, {nullable:true})
    game_uid?: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;
}
