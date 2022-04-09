import { registerEnumType } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    id = "id",
    role = "role",
    email = "email",
    code = "code",
    address = "address",
    name = "name",
    password = "password",
    ref_code = "ref_code",
    status = "status",
    created_at = "created_at",
    updated_at = "updated_at"
}


registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })
