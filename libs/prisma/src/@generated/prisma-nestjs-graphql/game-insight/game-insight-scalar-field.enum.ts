import { registerEnumType } from '@nestjs/graphql';

export enum GameInsightScalarFieldEnum {
    game_uid = "game_uid",
    team_members = "team_members",
    event_imfomation = "event_imfomation",
    weigtht = "weigtht",
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
    roi_per_account = "roi_per_account",
    point = "point",
    parent = "parent",
    created_at = "created_at",
    updated_at = "updated_at"
}


registerEnumType(GameInsightScalarFieldEnum, { name: 'GameInsightScalarFieldEnum', description: undefined })
