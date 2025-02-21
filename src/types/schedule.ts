import { Dayjs } from "dayjs";

export interface ITermInformation {
  beginDate: Dayjs; // 开学日期
  curDate: Dayjs; // 当前日期
  overallWeek: number; // 总计周
  isOddWeek: boolean; // 是否为单周
}

export enum InWeekEnum {
  Monday = 1,
  Tuesday = 2,
  Wednesday = 3,
  Thursday = 4,
  Friday = 5,
  Saturday = 6,
  Sunday = 7,
}
// export type TInWeek = 1 | 2 | 3 | 4 | 5 | 6 | 7;
// export type TOddEvenWeek = "normal" | "odd" | "even";
export enum OddEvenWeekEnum {
  Normal = "normal",
  Odd = "odd",
  Even = "even",
}
export interface ICourseArrangementInfo {
  inWeek: InWeekEnum;
  startWeek: number;
  endWeek?: number;
  oddEven: OddEvenWeekEnum;
  startTime: string;
  nodes: number;
}
export interface ICourse {
  id: string;
  name: string;
  location: string;
  courseArrangementList: ICourseArrangementInfo[];
}
export interface ICourseScheduleRow {
  1?: ICourse[];
  2?: ICourse[];
  3?: ICourse[];
  4?: ICourse[];
  5?: ICourse[];
  6?: ICourse[];
  7?: ICourse[];
  time: string;
}
