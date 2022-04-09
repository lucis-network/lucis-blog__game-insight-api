import { registerEnumType } from '@nestjs/graphql';

export enum BoxCampaignBuyHistoriesStatus {
    PENDING = "PENDING",
    PROCESSING = "PROCESSING",
    CONFIRMING = "CONFIRMING",
    SUCCEED = "SUCCEED",
    FAILED = "FAILED"
}


registerEnumType(BoxCampaignBuyHistoriesStatus, { name: 'BoxCampaignBuyHistoriesStatus', description: undefined })
