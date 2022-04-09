import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxTypeWhereInput } from './box-type-where.input';

@InputType()
export class BoxTypeRelationFilter {

    @Field(() => BoxTypeWhereInput, {nullable:true})
    is?: BoxTypeWhereInput;

    @Field(() => BoxTypeWhereInput, {nullable:true})
    isNot?: BoxTypeWhereInput;
}
