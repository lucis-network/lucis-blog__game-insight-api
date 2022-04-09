import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BoxPriceCreateManyInput } from './box-price-create-many.input';

@ArgsType()
export class CreateManyBoxPriceArgs {

    @Field(() => [BoxPriceCreateManyInput], {nullable:false})
    data!: Array<BoxPriceCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
