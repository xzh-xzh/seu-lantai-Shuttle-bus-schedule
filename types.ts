
export type ScheduleType = 'weekday' | 'holiday';

export interface DepartureInfo {
  time: string;
  routeDetail: string;
}

export interface LoopingInfo {
  startTime: string;
  endTime: string;
  routeDetail: string;
}

export interface Route {
  name:string;
  departures: DepartureInfo[];
  loopingServices?: LoopingInfo[];
}

export interface Schedule {
  weekday: Route[];
  holiday: Route[];
}

export interface UpcomingDeparture {
  time: string;
  minutesUntil: number;
  isTomorrow: boolean;
  routeDetail: string;
  isLooping?: boolean;
}
