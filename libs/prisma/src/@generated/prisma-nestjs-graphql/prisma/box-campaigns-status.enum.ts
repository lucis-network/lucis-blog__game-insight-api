import { registerEnumType } from '@nestjs/graphql';

export enum BoxCampaignsStatus {
    UPCOMING = "UPCOMING",
    OPENING = "OPENING",
    CLOSED = "CLOSED"
}


registerEnumType(BoxCampaignsStatus, { name: 'BoxCampaignsStatus', description: undefined })
