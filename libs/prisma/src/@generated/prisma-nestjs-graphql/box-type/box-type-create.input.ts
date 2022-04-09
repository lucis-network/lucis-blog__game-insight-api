import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { BoxPriceCreateNestedManyWithoutBoxTypeInput } from '../box-price/box-price-create-nested-many-without-box-type.input';
import { BoxCampaignCreateNestedOneWithoutBoxTypesInput } from '../box-campaign/box-campaign-create-nested-one-without-box-types.input';

@InputType()
export class BoxTypeCreateInput {

    @Field(() => String, {nullable:true})
    uid?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    desc?: string;

    @Field(() => Int, {nullable:false})
    total_amount!: number;

    @Field(() => Int, {nullable:true})
    sold_amount?: number;

    @Field(() => String, {nullable:true})
    thumb_img?: string;

    @Field(() => String, {nullable:true})
    series_content?: string;

    @Field(() => Int, {nullable:true})
    limit_per_user?: number;

    @Field(() => BoxPriceCreateNestedManyWithoutBoxTypeInput, {nullable:true})
    prices?: BoxPriceCreateNestedManyWithoutBoxTypeInput;

    @Field(() => BoxCampaignCreateNestedOneWithoutBoxTypesInput, {nullable:false})
    campaign!: BoxCampaignCreateNestedOneWithoutBoxTypesInput;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;
}
