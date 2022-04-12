import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class GameMaxAggregate {

    @Field(() => String, {nullable:true})
    uid?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    desc?: string;

    @Field(() => String, {nullable:true})
    desc_team?: string;

    @Field(() => String, {nullable:true})
    logo?: string;

    @Field(() => String, {nullable:true})
    website?: string;

    @Field(() => String, {nullable:true})
    whitepaper?: string;

    @Field(() => String, {nullable:true})
    pitchdeck?: string;

    @Field(() => String, {nullable:true})
    trailer_video?: string;

    @Field(() => String, {nullable:true})
    facebook?: string;

    @Field(() => String, {nullable:true})
    twitter?: string;

    @Field(() => String, {nullable:true})
    telegram?: string;

    @Field(() => String, {nullable:true})
    youtube?: string;

    @Field(() => String, {nullable:true})
    discord?: string;

    @Field(() => String, {nullable:true})
    road_map?: string;

    @Field(() => String, {nullable:true})
    game_team?: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;
}
