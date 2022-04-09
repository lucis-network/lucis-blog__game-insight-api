import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class BoxContractMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    uid?: true;

    @Field(() => Boolean, {nullable:true})
    address?: true;

    @Field(() => Boolean, {nullable:true})
    owner?: true;

    @Field(() => Boolean, {nullable:true})
    chain_symbol?: true;

    @Field(() => Boolean, {nullable:true})
    currency_symbol?: true;

    @Field(() => Boolean, {nullable:true})
    admin_address?: true;

    @Field(() => Boolean, {nullable:true})
    admin_prv_key?: true;

    @Field(() => Boolean, {nullable:true})
    is_transfered?: true;

    @Field(() => Boolean, {nullable:true})
    created_at?: true;

    @Field(() => Boolean, {nullable:true})
    updated_at?: true;
}
