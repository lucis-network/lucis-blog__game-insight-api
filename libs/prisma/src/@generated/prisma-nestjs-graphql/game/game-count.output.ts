import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class GameCount {

    @Field(() => Int, {nullable:false})
    game_charts!: number;

    @Field(() => Int, {nullable:false})
    game_currencies!: number;
}
