import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxTypeWhereInput } from './box-type-where.input';

@InputType()
export class BoxTypeListRelationFilter {

    @Field(() => BoxTypeWhereInput, {nullable:true})
    every?: BoxTypeWhereInput;

    @Field(() => BoxTypeWhereInput, {nullable:true})
    some?: BoxTypeWhereInput;

    @Field(() => BoxTypeWhereInput, {nullable:true})
    none?: BoxTypeWhereInput;
}
