import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class BoxContractCount {

    @Field(() => Int, {nullable:false})
    boxPrices!: number;
}
