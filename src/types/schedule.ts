import { Dayjs } from 'dayjs';

export interface ISchedule {
    termBeginDate: Dayjs; // 开学日期
    curDate: Dayjs;  // 当前日期
    termWeek: number; // 学期第几周
}