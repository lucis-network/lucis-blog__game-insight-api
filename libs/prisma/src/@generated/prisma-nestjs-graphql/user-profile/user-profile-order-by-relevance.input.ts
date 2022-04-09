import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserProfileOrderByRelevanceFieldEnum } from './user-profile-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class UserProfileOrderByRelevanceInput {

    @Field(() => [UserProfileOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<keyof typeof UserProfileOrderByRelevanceFieldEnum>;

    @Field(() => SortOrder, {nullable:false})
    sort!: keyof typeof SortOrder;

    @Field(() => String, {nullable:false})
    search!: string;
}
