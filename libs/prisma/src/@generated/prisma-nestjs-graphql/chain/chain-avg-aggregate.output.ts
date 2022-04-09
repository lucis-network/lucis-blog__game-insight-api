import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class ChainAvgAggregate {

    @Field(() => Float, {nullable:true})
    chain_id?: number;
}
