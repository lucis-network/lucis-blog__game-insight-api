import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GameChartType } from '../prisma/game-chart-type.enum';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class GameChartCreateManyGameInput {

    @Field(() => String, {nullable:true})
    uid?: string;

    @Field(() => GameChartType, {nullable:false})
    type!: keyof typeof GameChartType;

    @Field(() => GraphQLJSON, {nullable:true})
    series?: any;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;
}
