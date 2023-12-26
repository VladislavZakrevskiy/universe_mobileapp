import { FoodSchema } from '../../../entities/Food'
import { HeroSchema } from '../../../entities/Hero'
import { HobbySchema } from '../../../entities/Hobby'
import { MentalSchema } from '../../../entities/Mental'
import { PoliticsSchema } from '../../../entities/Politics'
import { SchoolSchema } from '../../../entities/School'
import { SleepSchema } from '../../../entities/Sleep'
import { FastLinkState } from '../../../widgets/FastLinks'
import { Routes } from '../router'

export interface StateSchema {
    // misc
    fastLinks: FastLinkState
    hero: HeroSchema

    // modules
    [Routes.FOOD]: FoodSchema
    [Routes.MENTAL]: MentalSchema
    [Routes.SCHOOL]: SchoolSchema
    [Routes.HOBBY]: HobbySchema
    [Routes.POLITICS]: PoliticsSchema
    [Routes.SLEEP]: SleepSchema
}

export type StateSchemaKey = keyof StateSchema

export interface ThunkExtraArg {
    nav?: (to: Routes) => void
}

export interface ThunkConfig<T = string> {
    rejectValue: T
    extra: ThunkExtraArg
    state: StateSchema
}