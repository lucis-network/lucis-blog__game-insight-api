import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class GameChartWhereUniqueInput {

    @Field(() => String, {nullable:true})
    uid?: string;
}
