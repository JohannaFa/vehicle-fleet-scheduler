export enum DateIntervallType {
  DAY = 'day',
  WEEK = 'week',
  MONTH = 'month'
}

export interface DateIntervall {
  type: DateIntervallType;
  startDate: Date;
  endDate: Date;
}