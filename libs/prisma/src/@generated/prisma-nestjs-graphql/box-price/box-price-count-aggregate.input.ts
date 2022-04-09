import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class BoxPriceCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    uid?: true;

    @Field(() => Boolean, {nullable:true})
    box_type_uid?: true;

    @Field(() => Boolean, {nullable:true})
    currency_uid?: true;

    @Field(() => Boolean, {nullable:true})
    price?: true;

    @Field(() => Boolean, {nullable:true})
    contract_address?: true;

    @Field(() => Boolean, {nullable:true})
    created_at?: true;

    @Field(() => Boolean, {nullable:true})
    updated_at?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
