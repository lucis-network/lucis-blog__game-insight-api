import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { BoxCampaignsStatus } from '../prisma/box-campaigns-status.enum';
import { PublishStatus } from '../prisma/publish-status.enum';
import { Int } from '@nestjs/graphql';
import { Game } from '../game/game.model';
import { BoxCampaignSubscribes } from '../box-campaign-subscribes/box-campaign-subscribes.model';
import { BoxType } from '../box-type/box-type.model';
import { BoxCampaignWhitelist } from '../box-campaign-whitelist/box-campaign-whitelist.model';
import { BoxCampaignBuyHistory } from '../box-campaign-buy-history/box-campaign-buy-history.model';
import { BoxCampaignCount } from './box-campaign-count.output';

@ObjectType()
export class BoxCampaign {

    @Field(() => ID, {nullable:false})
    uid!: string;

    @Field(() => String, {nullable:false})
    game_uid!: string;

    @Field(() => String, {nullable:true})
    name!: string | null;

    @Field(() => String, {nullable:true})
    desc!: string | null;

    @Field(() => String, {nullable:true})
    rules!: string | null;

    @Field(() => String, {nullable:true})
    cover_img!: string | null;

    @Field(() => String, {nullable:true})
    banner_img!: string | null;

    @Field(() => GraphQLJSON, {nullable:true})
    rounds!: any | null;

    @Field(() => BoxCampaignsStatus, {nullable:true})
    status!: keyof typeof BoxCampaignsStatus | null;

    @Field(() => PublishStatus, {nullable:true,defaultValue:'PUBLISH'})
    publish_status!: keyof typeof PublishStatus | null;

    @Field(() => Date, {nullable:false})
    opening_at!: Date;

    @Field(() => Date, {nullable:false})
    start!: Date;

    @Field(() => Date, {nullable:false})
    end!: Date;

    @Field(() => String, {nullable:true})
    highlight!: string | null;

    @Field(() => Int, {nullable:true})
    spotlight_position!: number | null;

    @Field(() => Game, {nullable:false})
    game?: Game;

    @Field(() => [BoxCampaignSubscribes], {nullable:true})
    subscribeCampaign?: Array<BoxCampaignSubscribes>;

    @Field(() => [BoxType], {nullable:true})
    boxTypes?: Array<BoxType>;

    @Field(() => [BoxCampaignWhitelist], {nullable:true})
    whitelists?: Array<BoxCampaignWhitelist>;

    @Field(() => [BoxCampaignBuyHistory], {nullable:true})
    buyHistory?: Array<BoxCampaignBuyHistory>;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => BoxCampaignCount, {nullable:false})
    _count?: BoxCampaignCount;
}
