import { teacherList } from "../../../../shared/consts/lessons/teacherList"
import { Lesson, LessonsName } from "./Lesson"

export interface SchoolSchema {
    percent: number
    lessons: Record<LessonsName, Lesson>
    teachers: typeof teacherList
}
