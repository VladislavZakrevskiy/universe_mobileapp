import { Dispatch, SetStateAction } from "react"

export interface CasinoGameProps {
    level: 'EASY' | 'MEDIUM' | 'HARD'
    setIsWin: Dispatch<SetStateAction<"Win" | "Fail" | undefined>>
}