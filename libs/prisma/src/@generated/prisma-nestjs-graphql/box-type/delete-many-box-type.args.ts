import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BoxTypeWhereInput } from './box-type-where.input';

@ArgsType()
export class DeleteManyBoxTypeArgs {

    @Field(() => BoxTypeWhereInput, {nullable:true})
    where?: BoxTypeWhereInput;
}
