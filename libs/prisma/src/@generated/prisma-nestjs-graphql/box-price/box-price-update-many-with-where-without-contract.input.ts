import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxPriceScalarWhereInput } from './box-price-scalar-where.input';
import { BoxPriceUpdateManyMutationInput } from './box-price-update-many-mutation.input';

@InputType()
export class BoxPriceUpdateManyWithWhereWithoutContractInput {

    @Field(() => BoxPriceScalarWhereInput, {nullable:false})
    where!: BoxPriceScalarWhereInput;

    @Field(() => BoxPriceUpdateManyMutationInput, {nullable:false})
    data!: BoxPriceUpdateManyMutationInput;
}
