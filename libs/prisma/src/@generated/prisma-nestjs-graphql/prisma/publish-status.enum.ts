import { registerEnumType } from '@nestjs/graphql';

export enum PublishStatus {
    PUBLISH = "PUBLISH",
    DRAFT = "DRAFT",
    PENDING = "PENDING",
    HIDDEN = "HIDDEN"
}


registerEnumType(PublishStatus, { name: 'PublishStatus', description: undefined })
