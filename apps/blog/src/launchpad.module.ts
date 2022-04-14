import { CacheModule, Module } from '@nestjs/common';
import { LaunchpadController } from './launchpad.controller';
import { LaunchpadService } from './launchpad.service';
import { ApolloDriver } from '@nestjs/apollo';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ScheduleModule } from '@nestjs/schedule';
import { ThrottlerModule } from '@nestjs/throttler';
import { UserModule } from './user/user.module';
import { RedisModule } from './redis/redis.module';
import { PrismaModule } from '@lib/prisma';
import { GameModule } from './game/game.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),

    // NOTE: PROXY Careful to setup some more your app behind a PROXY,
    // https://docs.nestjs.com/security/rate-limiting#proxies
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 20,
    }),
    GraphQLModule.forRootAsync({
      driver: ApolloDriver,
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return {
          debug: configService.get('NODE_ENV') !== 'production',
          playground: configService.get('NODE_ENV') !== 'production',
          autoSchemaFile: process.cwd() + '/apps/blog/src/schema.gql',
          subscriptions: {
            'graphql-ws': true,
            'subscriptions-transport-ws': false,
          },
        };
      },
    }),
    CacheModule.register({ isGlobal: true, ttl: 5 * 60 }),
    ScheduleModule.forRoot(),
    PrismaModule,
    UserModule,
    RedisModule,
    GameModule,
    // TaskModule,
  ],
  controllers: [LaunchpadController],
  providers: [LaunchpadService],
})
export class LaunchpadModule {}
