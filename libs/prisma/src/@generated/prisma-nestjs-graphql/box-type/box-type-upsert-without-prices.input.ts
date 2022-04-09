import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxTypeUpdateWithoutPricesInput } from './box-type-update-without-prices.input';
import { BoxTypeCreateWithoutPricesInput } from './box-type-create-without-prices.input';

@InputType()
export class BoxTypeUpsertWithoutPricesInput {

    @Field(() => BoxTypeUpdateWithoutPricesInput, {nullable:false})
    update!: BoxTypeUpdateWithoutPricesInput;

    @Field(() => BoxTypeCreateWithoutPricesInput, {nullable:false})
    create!: BoxTypeCreateWithoutPricesInput;
}
