import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ChainCount {

    @Field(() => Int, {nullable:false})
    currencies!: number;
}
