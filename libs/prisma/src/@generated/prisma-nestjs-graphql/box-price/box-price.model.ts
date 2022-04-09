import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { BoxContract } from '../box-contract/box-contract.model';
import { BoxType } from '../box-type/box-type.model';
import { Currency } from '../currency/currency.model';

@ObjectType()
export class BoxPrice {

    @Field(() => ID, {nullable:false})
    uid!: string;

    @Field(() => String, {nullable:false})
    box_type_uid!: string;

    @Field(() => String, {nullable:false})
    currency_uid!: string;

    @Field(() => GraphQLDecimal, {nullable:true})
    price!: any | null;

    @Field(() => String, {nullable:true})
    contract_address!: string | null;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => BoxContract, {nullable:true})
    contract?: BoxContract | null;

    @Field(() => BoxType, {nullable:false})
    boxType?: BoxType;

    @Field(() => Currency, {nullable:false})
    currency?: Currency;
}
