import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class BoxCampaignCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    uid?: true;

    @Field(() => Boolean, {nullable:true})
    game_uid?: true;

    @Field(() => Boolean, {nullable:true})
    name?: true;

    @Field(() => Boolean, {nullable:true})
    desc?: true;

    @Field(() => Boolean, {nullable:true})
    rules?: true;

    @Field(() => Boolean, {nullable:true})
    cover_img?: true;

    @Field(() => Boolean, {nullable:true})
    banner_img?: true;

    @Field(() => Boolean, {nullable:true})
    rounds?: true;

    @Field(() => Boolean, {nullable:true})
    status?: true;

    @Field(() => Boolean, {nullable:true})
    publish_status?: true;

    @Field(() => Boolean, {nullable:true})
    opening_at?: true;

    @Field(() => Boolean, {nullable:true})
    start?: true;

    @Field(() => Boolean, {nullable:true})
    end?: true;

    @Field(() => Boolean, {nullable:true})
    highlight?: true;

    @Field(() => Boolean, {nullable:true})
    spotlight_position?: true;

    @Field(() => Boolean, {nullable:true})
    created_at?: true;

    @Field(() => Boolean, {nullable:true})
    updated_at?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
