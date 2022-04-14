import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class GameInsightSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    team_members?: true;

    @Field(() => Boolean, {nullable:true})
    weigtht?: true;

    @Field(() => Boolean, {nullable:true})
    point?: true;
}
