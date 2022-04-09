import { registerEnumType } from '@nestjs/graphql';

export enum UserOrderByRelevanceFieldEnum {
    email = "email",
    code = "code",
    address = "address",
    name = "name",
    password = "password",
    ref_code = "ref_code"
}


registerEnumType(UserOrderByRelevanceFieldEnum, { name: 'UserOrderByRelevanceFieldEnum', description: undefined })
