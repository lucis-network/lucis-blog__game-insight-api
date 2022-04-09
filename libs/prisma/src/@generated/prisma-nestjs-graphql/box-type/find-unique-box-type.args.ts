import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BoxTypeWhereUniqueInput } from './box-type-where-unique.input';

@ArgsType()
export class FindUniqueBoxTypeArgs {

    @Field(() => BoxTypeWhereUniqueInput, {nullable:false})
    where!: BoxTypeWhereUniqueInput;
}
