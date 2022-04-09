import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BoxTypeUpdateInput } from './box-type-update.input';
import { BoxTypeWhereUniqueInput } from './box-type-where-unique.input';

@ArgsType()
export class UpdateOneBoxTypeArgs {

    @Field(() => BoxTypeUpdateInput, {nullable:false})
    data!: BoxTypeUpdateInput;

    @Field(() => BoxTypeWhereUniqueInput, {nullable:false})
    where!: BoxTypeWhereUniqueInput;
}
