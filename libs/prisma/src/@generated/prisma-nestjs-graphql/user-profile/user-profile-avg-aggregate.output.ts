import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class UserProfileAvgAggregate {

    @Field(() => Float, {nullable:true})
    user_id?: number;
}
