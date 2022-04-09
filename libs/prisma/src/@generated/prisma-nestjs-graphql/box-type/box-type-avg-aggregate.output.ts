import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class BoxTypeAvgAggregate {

    @Field(() => Float, {nullable:true})
    total_amount?: number;

    @Field(() => Float, {nullable:true})
    sold_amount?: number;

    @Field(() => Float, {nullable:true})
    limit_per_user?: number;
}
