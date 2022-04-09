import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxTypeCreateWithoutPricesInput } from './box-type-create-without-prices.input';
import { BoxTypeCreateOrConnectWithoutPricesInput } from './box-type-create-or-connect-without-prices.input';
import { BoxTypeUpsertWithoutPricesInput } from './box-type-upsert-without-prices.input';
import { BoxTypeWhereUniqueInput } from './box-type-where-unique.input';
import { BoxTypeUpdateWithoutPricesInput } from './box-type-update-without-prices.input';

@InputType()
export class BoxTypeUpdateOneRequiredWithoutPricesInput {

    @Field(() => BoxTypeCreateWithoutPricesInput, {nullable:true})
    create?: BoxTypeCreateWithoutPricesInput;

    @Field(() => BoxTypeCreateOrConnectWithoutPricesInput, {nullable:true})
    connectOrCreate?: BoxTypeCreateOrConnectWithoutPricesInput;

    @Field(() => BoxTypeUpsertWithoutPricesInput, {nullable:true})
    upsert?: BoxTypeUpsertWithoutPricesInput;

    @Field(() => BoxTypeWhereUniqueInput, {nullable:true})
    connect?: BoxTypeWhereUniqueInput;

    @Field(() => BoxTypeUpdateWithoutPricesInput, {nullable:true})
    update?: BoxTypeUpdateWithoutPricesInput;
}
