import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BoxPriceWhereInput } from './box-price-where.input';

@ArgsType()
export class DeleteManyBoxPriceArgs {

    @Field(() => BoxPriceWhereInput, {nullable:true})
    where?: BoxPriceWhereInput;
}
