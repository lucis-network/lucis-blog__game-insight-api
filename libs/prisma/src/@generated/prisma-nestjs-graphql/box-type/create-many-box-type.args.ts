import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BoxTypeCreateManyInput } from './box-type-create-many.input';

@ArgsType()
export class CreateManyBoxTypeArgs {

    @Field(() => [BoxTypeCreateManyInput], {nullable:false})
    data!: Array<BoxTypeCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
