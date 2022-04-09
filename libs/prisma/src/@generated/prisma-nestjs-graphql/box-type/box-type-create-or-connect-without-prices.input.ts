import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxTypeWhereUniqueInput } from './box-type-where-unique.input';
import { BoxTypeCreateWithoutPricesInput } from './box-type-create-without-prices.input';

@InputType()
export class BoxTypeCreateOrConnectWithoutPricesInput {

    @Field(() => BoxTypeWhereUniqueInput, {nullable:false})
    where!: BoxTypeWhereUniqueInput;

    @Field(() => BoxTypeCreateWithoutPricesInput, {nullable:false})
    create!: BoxTypeCreateWithoutPricesInput;
}
