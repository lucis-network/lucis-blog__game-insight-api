import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ChainAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    chain_id?: true;
}
