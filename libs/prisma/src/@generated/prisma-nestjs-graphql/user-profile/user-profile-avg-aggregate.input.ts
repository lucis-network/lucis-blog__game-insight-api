import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UserProfileAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    user_id?: true;
}
