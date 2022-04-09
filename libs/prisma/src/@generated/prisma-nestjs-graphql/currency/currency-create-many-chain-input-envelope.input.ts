import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CurrencyCreateManyChainInput } from './currency-create-many-chain.input';

@InputType()
export class CurrencyCreateManyChainInputEnvelope {

    @Field(() => [CurrencyCreateManyChainInput], {nullable:false})
    data!: Array<CurrencyCreateManyChainInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
