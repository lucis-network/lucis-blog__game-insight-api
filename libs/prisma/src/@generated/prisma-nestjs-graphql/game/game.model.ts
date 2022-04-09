import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { BoxCampaign } from '../box-campaign/box-campaign.model';
import { GameCount } from './game-count.output';

@ObjectType()
export class Game {

    @Field(() => ID, {nullable:false})
    uid!: string;

    @Field(() => String, {nullable:true})
    name!: string | null;

    @Field(() => String, {nullable:true})
    desc!: string | null;

    @Field(() => String, {nullable:true})
    desc_team!: string | null;

    @Field(() => String, {nullable:true})
    logo!: string | null;

    @Field(() => String, {nullable:true})
    website!: string | null;

    @Field(() => String, {nullable:true})
    whitepaper!: string | null;

    @Field(() => String, {nullable:true})
    pitchdeck!: string | null;

    @Field(() => String, {nullable:true})
    trailer_video!: string | null;

    @Field(() => String, {nullable:true})
    facebook!: string | null;

    @Field(() => String, {nullable:true})
    twitter!: string | null;

    @Field(() => String, {nullable:true})
    telegram!: string | null;

    @Field(() => String, {nullable:true})
    youtube!: string | null;

    @Field(() => String, {nullable:true})
    discord!: string | null;

    @Field(() => [BoxCampaign], {nullable:true})
    boxCampaigns?: Array<BoxCampaign>;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => GameCount, {nullable:false})
    _count?: GameCount;
}
