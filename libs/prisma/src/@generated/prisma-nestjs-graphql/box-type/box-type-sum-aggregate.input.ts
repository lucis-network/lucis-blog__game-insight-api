import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class BoxTypeSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    total_amount?: true;

    @Field(() => Boolean, {nullable:true})
    sold_amount?: true;

    @Field(() => Boolean, {nullable:true})
    limit_per_user?: true;
}
