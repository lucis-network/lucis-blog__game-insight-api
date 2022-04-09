import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxPriceCreateManyCurrencyInput } from './box-price-create-many-currency.input';

@InputType()
export class BoxPriceCreateManyCurrencyInputEnvelope {

    @Field(() => [BoxPriceCreateManyCurrencyInput], {nullable:false})
    data!: Array<BoxPriceCreateManyCurrencyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
