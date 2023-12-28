import { View } from "native-base";
import { ImageBackground, ImageSourcePropType, TouchableWithoutFeedback } from "react-native";

const cardValues = {
  "Ace of Hearts": 1,
  "2 of Hearts": 2,
  "3 of Hearts": 3,
  "4 of Hearts": 4,
  "5 of Hearts": 5,
  "6 of Hearts": 6,
  "7 of Hearts": 7,
  "8 of Hearts": 8,
  "9 of Hearts": 9,
  "10 of Hearts": 10,
  "Jack of Hearts": 11,
  "Queen of Hearts": 12,
  "King of Hearts": 13,
  "Ace of Diamonds": 1,
  "2 of Diamonds": 2,
  "3 of Diamonds": 3,
  "4 of Diamonds": 4,
  "5 of Diamonds": 5,
  "6 of Diamonds": 6,
  "7 of Diamonds": 7,
  "8 of Diamonds": 8,
  "9 of Diamonds": 9,
  "10 of Diamonds": 10,
  "Jack of Diamonds": 11,
  "Queen of Diamonds": 12,
  "King of Diamonds": 13,
  "Ace of Clubs": 1,
  "2 of Clubs": 2,
  "3 of Clubs": 3,
  "4 of Clubs": 4,
  "5 of Clubs": 5,
  "6 of Clubs": 6,
  "7 of Clubs": 7,
  "8 of Clubs": 8,
  "9 of Clubs": 9,
  "10 of Clubs": 10,
  "Jack of Clubs": 11,
  "Queen of Clubs": 12,
  "King of Clubs": 13,
  "Ace of Spades": 1,
  "2 of Spades": 2,
  "3 of Spades": 3,
  "4 of Spades": 4,
  "5 of Spades": 5,
  "6 of Spades": 6,
  "7 of Spades": 7,
  "8 of Spades": 8,
  "9 of Spades": 9,
  "10 of Spades": 10,
  "Jack of Spades": 11,
  "Queen of Spades": 12,
  "King of Spades": 13,
};
const suits = [0, 13, 26, 39]; // Hearts, Diamonds, Clubs, Spades
interface Props {
  value: number | keyof typeof cardValues;
  suit: number;
  ratioScale?: number;
  onPress?: () => void;
}
const cardSkins: ImageSourcePropType[] = [
  require(`../../../../assets/deck/cards/0_0.png`),
  require(`../../../../assets/deck/cards/1_0.png`),
  require(`../../../../assets/deck/cards/2_0.png`),
  require(`../../../../assets/deck/cards/3_0.png`),
  require(`../../../../assets/deck/cards/4_0.png`),
  require(`../../../../assets/deck/cards/5_0.png`),
  require(`../../../../assets/deck/cards/6_0.png`),
  require(`../../../../assets/deck/cards/7_0.png`),
  require(`../../../../assets/deck/cards/8_0.png`),
  require(`../../../../assets/deck/cards/9_0.png`),
  require(`../../../../assets/deck/cards/10_0.png`),
  require(`../../../../assets/deck/cards/11_0.png`),
  require(`../../../../assets/deck/cards/12_0.png`),
  require(`../../../../assets/deck/cards/13_0.png`),
  require(`../../../../assets/deck/cards/14_0.png`),
  require(`../../../../assets/deck/cards/15_0.png`),
  require(`../../../../assets/deck/cards/16_0.png`),
  require(`../../../../assets/deck/cards/17_0.png`),
  require(`../../../../assets/deck/cards/18_0.png`),
  require(`../../../../assets/deck/cards/19_0.png`),
  require(`../../../../assets/deck/cards/20_0.png`),
  require(`../../../../assets/deck/cards/21_0.png`),
  require(`../../../../assets/deck/cards/22_0.png`),
  require(`../../../../assets/deck/cards/23_0.png`),
  require(`../../../../assets/deck/cards/24_0.png`),
  require(`../../../../assets/deck/cards/25_0.png`),
  require(`../../../../assets/deck/cards/26_0.png`),
  require(`../../../../assets/deck/cards/27_0.png`),
  require(`../../../../assets/deck/cards/28_0.png`),
  require(`../../../../assets/deck/cards/29_0.png`),
  require(`../../../../assets/deck/cards/30_0.png`),
  require(`../../../../assets/deck/cards/31_0.png`),
  require(`../../../../assets/deck/cards/32_0.png`),
  require(`../../../../assets/deck/cards/33_0.png`),
  require(`../../../../assets/deck/cards/34_0.png`),
  require(`../../../../assets/deck/cards/35_0.png`),
  require(`../../../../assets/deck/cards/36_0.png`),
  require(`../../../../assets/deck/cards/37_0.png`),
  require(`../../../../assets/deck/cards/38_0.png`),
  require(`../../../../assets/deck/cards/39_0.png`),
  require(`../../../../assets/deck/cards/40_0.png`),
  require(`../../../../assets/deck/cards/41_0.png`),
  require(`../../../../assets/deck/cards/42_0.png`),
  require(`../../../../assets/deck/cards/43_0.png`),
  require(`../../../../assets/deck/cards/44_0.png`),
  require(`../../../../assets/deck/cards/45_0.png`),
  require(`../../../../assets/deck/cards/46_0.png`),
  require(`../../../../assets/deck/cards/47_0.png`),
  require(`../../../../assets/deck/cards/48_0.png`),
  require(`../../../../assets/deck/cards/49_0.png`),
  require(`../../../../assets/deck/cards/50_0.png`),
  require(`../../../../assets/deck/cards/51_0.png`),
  require(`../../../../assets/deck/cards/52_0.png`),
];

export function Card({ suit, value, ratioScale = 1, onPress }: Props) {
  const position = suits[suit] + (typeof value === "number" ? value : cardValues[value]);

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={{
          height: 210 * ratioScale,
          width: 150 * ratioScale,
          overflow: "hidden",
          borderRadius: 12 * ratioScale,
        }}
      >
        <ImageBackground
          resizeMode="cover"
          alt={"card"}
          source={cardSkins[position]}
          style={{
            width: 150 * ratioScale,
            height: 210 * ratioScale,
          }}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}
