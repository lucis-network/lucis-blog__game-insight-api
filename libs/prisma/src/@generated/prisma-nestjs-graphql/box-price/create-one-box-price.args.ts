import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BoxPriceCreateInput } from './box-price-create.input';

@ArgsType()
export class CreateOneBoxPriceArgs {

    @Field(() => BoxPriceCreateInput, {nullable:false})
    data!: BoxPriceCreateInput;
}
