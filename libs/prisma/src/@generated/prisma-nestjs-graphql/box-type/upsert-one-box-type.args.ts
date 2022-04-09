import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BoxTypeWhereUniqueInput } from './box-type-where-unique.input';
import { BoxTypeCreateInput } from './box-type-create.input';
import { BoxTypeUpdateInput } from './box-type-update.input';

@ArgsType()
export class UpsertOneBoxTypeArgs {

    @Field(() => BoxTypeWhereUniqueInput, {nullable:false})
    where!: BoxTypeWhereUniqueInput;

    @Field(() => BoxTypeCreateInput, {nullable:false})
    create!: BoxTypeCreateInput;

    @Field(() => BoxTypeUpdateInput, {nullable:false})
    update!: BoxTypeUpdateInput;
}
