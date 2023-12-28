import { Button, Text, View, HStack, VStack } from "native-base";
import { Dispatch, SetStateAction, useState } from "react";
import { CasinoGameProps } from "../types";
import { randomIntFromInterval } from "../../../shared/lib/funcs/randomIntFromInterval";

function Square({ value, onSquareClick }: { value: string; onSquareClick: () => void }) {
  return (
    <Button
      width={"33%"}
      height="24"
      borderColor={"primary.600"}
      borderWidth={1}
      borderRadius={0}
      variant={"ghost"}
      onPress={onSquareClick}
    >
      <Text fontSize={45} textAlign={"center"} style={{ textAlignVertical: "center", flex: 1 }} color={"primary.600"}>
        {value}
      </Text>
    </Button>
  );
}

export function Board({
  xIsNext,
  squares,
  onPlay,
  setIsWin,
  setCurrentMove,
}: {
  xIsNext: boolean;
  squares: string[];
  onPlay: (nextSquares: string[]) => void;
  setIsWin: (result: "Win" | "Fail") => void;
  setCurrentMove: Dispatch<SetStateAction<number>>;
}) {
  const avaibleSteps = [false, false, false, false, false, false, false, false, false];

  function handleClick(i: number) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
    setIsWin(winner === "X" ? "Win" : "Fail");
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
    if (!xIsNext) {
      setCurrentMove((prev) => prev + 1);
      let ok = false;
      while (!ok) {
        const step = randomIntFromInterval(0, 8);
        if (!avaibleSteps[step]) {
          handleClick(step);
          avaibleSteps[step] = true;
          ok = true;
        }
      }
    }
  }

  return (
    <>
      <Text>{status}</Text>
      <VStack>
        <HStack>
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </HStack>
        <HStack>
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </HStack>
        <HStack>
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </HStack>
      </VStack>
    </>
  );
}

export function TicTacToe({ setIsWin }: Omit<CasinoGameProps, "level">) {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares: string[]) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  return <Board setIsWin={setIsWin} setCurrentMove={setCurrentMove} xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />;
}

function calculateWinner(squares: string[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
