import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BoxTypeCreateInput } from './box-type-create.input';

@ArgsType()
export class CreateOneBoxTypeArgs {

    @Field(() => BoxTypeCreateInput, {nullable:false})
    data!: BoxTypeCreateInput;
}
