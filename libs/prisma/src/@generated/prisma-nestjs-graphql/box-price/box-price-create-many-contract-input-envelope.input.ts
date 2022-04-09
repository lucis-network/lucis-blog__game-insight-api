import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxPriceCreateManyContractInput } from './box-price-create-many-contract.input';

@InputType()
export class BoxPriceCreateManyContractInputEnvelope {

    @Field(() => [BoxPriceCreateManyContractInput], {nullable:false})
    data!: Array<BoxPriceCreateManyContractInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
