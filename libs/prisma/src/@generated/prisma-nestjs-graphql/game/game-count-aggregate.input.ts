import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class GameCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    uid?: true;

    @Field(() => Boolean, {nullable:true})
    name?: true;

    @Field(() => Boolean, {nullable:true})
    desc?: true;

    @Field(() => Boolean, {nullable:true})
    desc_team?: true;

    @Field(() => Boolean, {nullable:true})
    logo?: true;

    @Field(() => Boolean, {nullable:true})
    website?: true;

    @Field(() => Boolean, {nullable:true})
    whitepaper?: true;

    @Field(() => Boolean, {nullable:true})
    pitchdeck?: true;

    @Field(() => Boolean, {nullable:true})
    trailer_video?: true;

    @Field(() => Boolean, {nullable:true})
    facebook?: true;

    @Field(() => Boolean, {nullable:true})
    twitter?: true;

    @Field(() => Boolean, {nullable:true})
    telegram?: true;

    @Field(() => Boolean, {nullable:true})
    youtube?: true;

    @Field(() => Boolean, {nullable:true})
    discord?: true;

    @Field(() => Boolean, {nullable:true})
    road_map?: true;

    @Field(() => Boolean, {nullable:true})
    game_team?: true;

    @Field(() => Boolean, {nullable:true})
    created_at?: true;

    @Field(() => Boolean, {nullable:true})
    updated_at?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
