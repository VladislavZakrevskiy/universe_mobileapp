import { Dispatch, SetStateAction } from "react"

export interface CasinoGameProps {
    level: 'EASY' | 'MEDIUM' | 'HARD'
    setIsWin: (result: "Win" | "Fail") => void
}