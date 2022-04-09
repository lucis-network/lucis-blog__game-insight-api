import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class BoxPriceMinAggregate {

    @Field(() => String, {nullable:true})
    uid?: string;

    @Field(() => String, {nullable:true})
    box_type_uid?: string;

    @Field(() => String, {nullable:true})
    currency_uid?: string;

    @Field(() => GraphQLDecimal, {nullable:true})
    price?: any;

    @Field(() => String, {nullable:true})
    contract_address?: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;
}
