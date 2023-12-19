import { FreqUsedThumbImg } from "assets";

interface IFreqUsed {
  title: string;
  srcImg: string;
}

const FreqUseds: IFreqUsed[] = [
  { title: "7일 이용권", srcImg: FreqUsedThumbImg },
  { title: "5일 이용권", srcImg: FreqUsedThumbImg },
  { title: "3일 이용권", srcImg: FreqUsedThumbImg },
];

export { FreqUseds };
export type { IFreqUsed };
