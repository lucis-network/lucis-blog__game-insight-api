import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { BoxCampaignsStatus } from '../prisma/box-campaigns-status.enum';
import { PublishStatus } from '../prisma/publish-status.enum';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class BoxCampaignMaxAggregate {

    @Field(() => String, {nullable:true})
    uid?: string;

    @Field(() => String, {nullable:true})
    game_uid?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    desc?: string;

    @Field(() => String, {nullable:true})
    rules?: string;

    @Field(() => String, {nullable:true})
    cover_img?: string;

    @Field(() => String, {nullable:true})
    banner_img?: string;

    @Field(() => BoxCampaignsStatus, {nullable:true})
    status?: keyof typeof BoxCampaignsStatus;

    @Field(() => PublishStatus, {nullable:true})
    publish_status?: keyof typeof PublishStatus;

    @Field(() => Date, {nullable:true})
    opening_at?: Date | string;

    @Field(() => Date, {nullable:true})
    start?: Date | string;

    @Field(() => Date, {nullable:true})
    end?: Date | string;

    @Field(() => String, {nullable:true})
    highlight?: string;

    @Field(() => Int, {nullable:true})
    spotlight_position?: number;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;
}
