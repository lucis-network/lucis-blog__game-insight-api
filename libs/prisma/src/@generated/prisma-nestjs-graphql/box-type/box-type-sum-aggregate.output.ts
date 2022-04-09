import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class BoxTypeSumAggregate {

    @Field(() => Int, {nullable:true})
    total_amount?: number;

    @Field(() => Int, {nullable:true})
    sold_amount?: number;

    @Field(() => Int, {nullable:true})
    limit_per_user?: number;
}
