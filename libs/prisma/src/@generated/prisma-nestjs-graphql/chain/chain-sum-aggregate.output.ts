import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ChainSumAggregate {

    @Field(() => Int, {nullable:true})
    chain_id?: number;
}
