import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GameStatisticsCreateManyCurrencyInput } from './game-statistics-create-many-currency.input';

@InputType()
export class GameStatisticsCreateManyCurrencyInputEnvelope {

    @Field(() => [GameStatisticsCreateManyCurrencyInput], {nullable:false})
    data!: Array<GameStatisticsCreateManyCurrencyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
