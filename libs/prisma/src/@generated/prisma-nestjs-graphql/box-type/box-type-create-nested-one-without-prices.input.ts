import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxTypeCreateWithoutPricesInput } from './box-type-create-without-prices.input';
import { BoxTypeCreateOrConnectWithoutPricesInput } from './box-type-create-or-connect-without-prices.input';
import { BoxTypeWhereUniqueInput } from './box-type-where-unique.input';

@InputType()
export class BoxTypeCreateNestedOneWithoutPricesInput {

    @Field(() => BoxTypeCreateWithoutPricesInput, {nullable:true})
    create?: BoxTypeCreateWithoutPricesInput;

    @Field(() => BoxTypeCreateOrConnectWithoutPricesInput, {nullable:true})
    connectOrCreate?: BoxTypeCreateOrConnectWithoutPricesInput;

    @Field(() => BoxTypeWhereUniqueInput, {nullable:true})
    connect?: BoxTypeWhereUniqueInput;
}
