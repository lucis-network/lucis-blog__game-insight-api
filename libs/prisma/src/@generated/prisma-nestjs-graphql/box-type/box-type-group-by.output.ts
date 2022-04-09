import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { BoxTypeCountAggregate } from './box-type-count-aggregate.output';
import { BoxTypeAvgAggregate } from './box-type-avg-aggregate.output';
import { BoxTypeSumAggregate } from './box-type-sum-aggregate.output';
import { BoxTypeMinAggregate } from './box-type-min-aggregate.output';
import { BoxTypeMaxAggregate } from './box-type-max-aggregate.output';

@ObjectType()
export class BoxTypeGroupBy {

    @Field(() => String, {nullable:false})
    uid!: string;

    @Field(() => String, {nullable:false})
    box_campaign_uid!: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    desc?: string;

    @Field(() => Int, {nullable:false})
    total_amount!: number;

    @Field(() => Int, {nullable:false})
    sold_amount!: number;

    @Field(() => String, {nullable:true})
    thumb_img?: string;

    @Field(() => String, {nullable:true})
    series_content?: string;

    @Field(() => Int, {nullable:true})
    limit_per_user?: number;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => Date, {nullable:false})
    updated_at!: Date | string;

    @Field(() => BoxTypeCountAggregate, {nullable:true})
    _count?: BoxTypeCountAggregate;

    @Field(() => BoxTypeAvgAggregate, {nullable:true})
    _avg?: BoxTypeAvgAggregate;

    @Field(() => BoxTypeSumAggregate, {nullable:true})
    _sum?: BoxTypeSumAggregate;

    @Field(() => BoxTypeMinAggregate, {nullable:true})
    _min?: BoxTypeMinAggregate;

    @Field(() => BoxTypeMaxAggregate, {nullable:true})
    _max?: BoxTypeMaxAggregate;
}
