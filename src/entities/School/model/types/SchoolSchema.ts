import { Lesson, LessonsName } from "./Lesson"

export interface SchoolSchema {
    percent: number
    lessons: Record<LessonsName, Lesson>
}
