import { PrismaService } from '@lib/prisma';
import { CACHE_MANAGER, Inject, Injectable, Logger } from '@nestjs/common';
import { BoxCampaignBuyHistory } from '@prisma/client';
import { Cache } from 'cache-manager';

interface UpdateData {
  subject: BoxCampaignBuyHistory;
  tx_hash?: string;
  reason?: string; // if error
}
const EVERY_2_MINUTES = '0 */2 * * * *';

@Injectable()
export class TaskService {
  private readonly logger = new Logger(TaskService.name);

  constructor(
    private prisma: PrismaService,
    @Inject(CACHE_MANAGER) private cache: Cache,
  ) {}

  // @Cron(CronExpression.EVERY_30_SECONDS)
  // async handle() {}
}
