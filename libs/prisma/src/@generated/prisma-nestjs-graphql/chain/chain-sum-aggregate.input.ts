import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ChainSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    chain_id?: true;
}
