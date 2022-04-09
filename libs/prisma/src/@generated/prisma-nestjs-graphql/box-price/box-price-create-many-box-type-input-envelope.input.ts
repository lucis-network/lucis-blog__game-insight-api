import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxPriceCreateManyBoxTypeInput } from './box-price-create-many-box-type.input';

@InputType()
export class BoxPriceCreateManyBoxTypeInputEnvelope {

    @Field(() => [BoxPriceCreateManyBoxTypeInput], {nullable:false})
    data!: Array<BoxPriceCreateManyBoxTypeInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
