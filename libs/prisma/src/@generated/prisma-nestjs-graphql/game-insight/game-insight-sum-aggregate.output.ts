import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class GameInsightSumAggregate {

    @Field(() => Int, {nullable:true})
    team_members?: number;

    @Field(() => Float, {nullable:true})
    weigtht?: number;

    @Field(() => Int, {nullable:true})
    point?: number;
}
