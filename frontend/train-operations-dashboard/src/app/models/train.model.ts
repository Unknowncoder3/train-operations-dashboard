export type TrainStatus = 'On Time' | 'Delayed' | 'Cancelled' | 'Boarding';

export interface Train {
  id: number;
  number: string;
  name: string;
  route: string;
  origin: string;
  destination: string;
  platform: string;
  status: TrainStatus;
  delayMinutes: number;
  departure: string;
  arrival: string;
  coaches: number;
}

export interface DashboardSummary {
  totalTrains: number;
  activeTrains: number;
  delayedTrains: number;
  cancelledTrains: number;
  onTimePercentage: number;
}

export interface OperationalAlert {
  id: number;
  severity: 'High' | 'Medium' | 'Low';
  title: string;
  message: string;
  time: string;
}
