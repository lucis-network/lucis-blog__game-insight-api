import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class GameInsightAvgAggregate {

    @Field(() => Float, {nullable:true})
    team_members?: number;

    @Field(() => Float, {nullable:true})
    weigtht?: number;

    @Field(() => Float, {nullable:true})
    point?: number;
}
