import { registerEnumType } from '@nestjs/graphql';

export enum GameInsightOrderByRelevanceFieldEnum {
    game_uid = "game_uid",
    event_imfomation = "event_imfomation",
    deployment_team = "deployment_team",
    advisor_team = "advisor_team",
    tech_team = "tech_team",
    role = "role",
    innovation = "innovation",
    how_to_play = "how_to_play",
    sword_mechanism = "sword_mechanism",
    conbustion_mechanism = "conbustion_mechanism",
    roadmap_detail = "roadmap_detail",
    phase_detail = "phase_detail",
    technology_used = "technology_used",
    compare_other_game = "compare_other_game",
    is_invest = "is_invest",
    roi_per_account = "roi_per_account"
}


registerEnumType(GameInsightOrderByRelevanceFieldEnum, { name: 'GameInsightOrderByRelevanceFieldEnum', description: undefined })
