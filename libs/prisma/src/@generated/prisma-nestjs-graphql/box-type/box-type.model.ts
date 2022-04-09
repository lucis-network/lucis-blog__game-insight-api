import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { BoxPrice } from '../box-price/box-price.model';
import { BoxCampaign } from '../box-campaign/box-campaign.model';
import { BoxTypeCount } from './box-type-count.output';

@ObjectType()
export class BoxType {

    @Field(() => ID, {nullable:false})
    uid!: string;

    @Field(() => String, {nullable:false})
    box_campaign_uid!: string;

    @Field(() => String, {nullable:true})
    name!: string | null;

    @Field(() => String, {nullable:true})
    desc!: string | null;

    @Field(() => Int, {nullable:false})
    total_amount!: number;

    @Field(() => Int, {nullable:false,defaultValue:0})
    sold_amount!: number;

    @Field(() => String, {nullable:true})
    thumb_img!: string | null;

    @Field(() => String, {nullable:true})
    series_content!: string | null;

    @Field(() => Int, {nullable:true})
    limit_per_user!: number | null;

    @Field(() => [BoxPrice], {nullable:true})
    prices?: Array<BoxPrice>;

    @Field(() => BoxCampaign, {nullable:false})
    campaign?: BoxCampaign;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => BoxTypeCount, {nullable:false})
    _count?: BoxTypeCount;
}
