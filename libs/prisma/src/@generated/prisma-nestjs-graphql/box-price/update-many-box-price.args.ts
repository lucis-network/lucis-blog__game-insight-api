import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BoxPriceUpdateManyMutationInput } from './box-price-update-many-mutation.input';
import { BoxPriceWhereInput } from './box-price-where.input';

@ArgsType()
export class UpdateManyBoxPriceArgs {

    @Field(() => BoxPriceUpdateManyMutationInput, {nullable:false})
    data!: BoxPriceUpdateManyMutationInput;

    @Field(() => BoxPriceWhereInput, {nullable:true})
    where?: BoxPriceWhereInput;
}
