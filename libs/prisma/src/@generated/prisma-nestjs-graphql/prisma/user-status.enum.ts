import { registerEnumType } from '@nestjs/graphql';

export enum UserStatus {
    ACTIVE = "ACTIVE",
    BANNED = "BANNED"
}


registerEnumType(UserStatus, { name: 'UserStatus', description: undefined })
