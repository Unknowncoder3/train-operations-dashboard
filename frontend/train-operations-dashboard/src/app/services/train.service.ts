import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DashboardSummary, OperationalAlert, Train } from '../models/train.model';

@Injectable({ providedIn: 'root' })
export class TrainService {
  private readonly trains: Train[] = [
    { id: 1, number: '12951', name: 'Mumbai Rajdhani', route: 'MMCT → NZM', origin: 'Mumbai Central', destination: 'Hazrat Nizamuddin', platform: '4', status: 'On Time', delayMinutes: 0, departure: '17:00', arrival: '08:35', coaches: 18 },
    { id: 2, number: '12301', name: 'Howrah Rajdhani', route: 'HWH → NDLS', origin: 'Howrah', destination: 'New Delhi', platform: '9', status: 'Delayed', delayMinutes: 18, departure: '16:55', arrival: '10:00', coaches: 20 },
    { id: 3, number: '12002', name: 'Bhopal Shatabdi', route: 'NDLS → RKMP', origin: 'New Delhi', destination: 'Rani Kamlapati', platform: '2', status: 'Boarding', delayMinutes: 0, departure: '06:00', arrival: '14:45', coaches: 16 },
    { id: 4, number: '12259', name: 'Sealdah Duronto', route: 'SDAH → BCT', origin: 'Sealdah', destination: 'Mumbai Central', platform: '7', status: 'Delayed', delayMinutes: 42, departure: '05:50', arrival: '11:20', coaches: 18 },
    { id: 5, number: '12627', name: 'Karnataka Express', route: 'NDLS → SBC', origin: 'New Delhi', destination: 'KSR Bengaluru', platform: '11', status: 'On Time', delayMinutes: 0, departure: '21:15', arrival: '05:30', coaches: 22 },
    { id: 6, number: '12841', name: 'Coromandel Express', route: 'SHM → MAS', origin: 'Shalimar', destination: 'Chennai Central', platform: '5', status: 'Cancelled', delayMinutes: 0, departure: '14:55', arrival: '18:00', coaches: 21 },
    { id: 7, number: '12903', name: 'Golden Temple Mail', route: 'MMCT → ASR', origin: 'Mumbai Central', destination: 'Amritsar', platform: '3', status: 'On Time', delayMinutes: 0, departure: '18:45', arrival: '22:10', coaches: 20 },
    { id: 8, number: '12423', name: 'Dibrugarh Rajdhani', route: 'NDLS → DBRG', origin: 'New Delhi', destination: 'Dibrugarh', platform: '6', status: 'Delayed', delayMinutes: 11, departure: '16:10', arrival: '07:00', coaches: 18 }
  ];

  private readonly alerts: OperationalAlert[] = [
    { id: 1, severity: 'High', title: 'Route disruption', message: 'Track maintenance affecting trains on the HWH–NDLS corridor.', time: '8 min ago' },
    { id: 2, severity: 'Medium', title: 'Platform change', message: 'Train 12301 has moved from platform 7 to platform 9.', time: '14 min ago' },
    { id: 3, severity: 'Low', title: 'Coach inspection', message: 'Routine coach inspection scheduled at Mumbai Central.', time: '31 min ago' }
  ];

  getTrains(): Observable<Train[]> {
    return of(this.trains);
  }

  getSummary(): Observable<DashboardSummary> {
    const totalTrains = this.trains.length;
    const delayedTrains = this.trains.filter((train) => train.status === 'Delayed').length;
    const cancelledTrains = this.trains.filter((train) => train.status === 'Cancelled').length;
    return of({
      totalTrains: 1248,
      activeTrains: totalTrains - cancelledTrains,
      delayedTrains: 127,
      cancelledTrains: 14,
      onTimePercentage: 89.8
    });
  }

  getAlerts(): Observable<OperationalAlert[]> {
    return of(this.alerts);
  }
}
