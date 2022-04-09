import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@InputType()
export class BoxPriceUncheckedCreateWithoutBoxTypeInput {

    @Field(() => String, {nullable:true})
    uid?: string;

    @Field(() => String, {nullable:false})
    currency_uid!: string;

    @Field(() => GraphQLDecimal, {nullable:true})
    price?: any;

    @Field(() => String, {nullable:true})
    contract_address?: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;
}
