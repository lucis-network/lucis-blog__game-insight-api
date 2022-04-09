import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxPriceCreateWithoutBoxTypeInput } from './box-price-create-without-box-type.input';
import { BoxPriceCreateOrConnectWithoutBoxTypeInput } from './box-price-create-or-connect-without-box-type.input';
import { BoxPriceCreateManyBoxTypeInputEnvelope } from './box-price-create-many-box-type-input-envelope.input';
import { BoxPriceWhereUniqueInput } from './box-price-where-unique.input';

@InputType()
export class BoxPriceUncheckedCreateNestedManyWithoutBoxTypeInput {

    @Field(() => [BoxPriceCreateWithoutBoxTypeInput], {nullable:true})
    create?: Array<BoxPriceCreateWithoutBoxTypeInput>;

    @Field(() => [BoxPriceCreateOrConnectWithoutBoxTypeInput], {nullable:true})
    connectOrCreate?: Array<BoxPriceCreateOrConnectWithoutBoxTypeInput>;

    @Field(() => BoxPriceCreateManyBoxTypeInputEnvelope, {nullable:true})
    createMany?: BoxPriceCreateManyBoxTypeInputEnvelope;

    @Field(() => [BoxPriceWhereUniqueInput], {nullable:true})
    connect?: Array<BoxPriceWhereUniqueInput>;
}
