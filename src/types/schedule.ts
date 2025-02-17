import { Dayjs } from 'dayjs';

export interface ISchedule {
    termBeginDate: Dayjs; // 开学日期
    curDate: Dayjs;  // 当前日期
    termWeek: number; // 学期第几周
}
interface ICellItem {
    id: string;
    title: string;
    location: string;
    startWeek?: number;
    endWeek?: number;
}
export interface ISchedulItem {
    type: 'normal' | 'loop' | 'join',
    times: number[],
    indexMap: number[], // join时使用的快速索引
    normal?: ICellItem, // normal
    odd?: ICellItem,  // loop
    even?: ICellItem, // loop
    list?: ICellItem[], // join时使用
}