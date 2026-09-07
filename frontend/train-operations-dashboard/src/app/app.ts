import { CommonModule } from '@angular/common';
import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DashboardSummary, OperationalAlert, Train, TrainStatus } from './models/train.model';
import { TrainService } from './services/train.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  private readonly trainService = inject(TrainService);

  readonly trains = signal<Train[]>([]);
  readonly alerts = signal<OperationalAlert[]>([]);
  readonly summary = signal<DashboardSummary>({
    totalTrains: 0,
    activeTrains: 0,
    delayedTrains: 0,
    cancelledTrains: 0,
    onTimePercentage: 0
  });

  searchTerm = '';
  selectedStatus: 'All' | TrainStatus = 'All';
  activeNav = 'Dashboard';

  readonly filteredTrains = computed(() => {
    const term = this.searchTerm.trim().toLowerCase();
    return this.trains().filter((train) => {
      const matchesStatus = this.selectedStatus === 'All' || train.status === this.selectedStatus;
      const matchesSearch = !term || [train.number, train.name, train.origin, train.destination, train.route]
        .some((value) => value.toLowerCase().includes(term));
      return matchesStatus && matchesSearch;
    });
  });

  readonly delayedPercent = computed(() => {
    const total = this.summary().totalTrains;
    return total ? Math.round((this.summary().delayedTrains / total) * 100) : 0;
  });

  ngOnInit(): void {
    this.trainService.getTrains().subscribe((data) => this.trains.set(data));
    this.trainService.getSummary().subscribe((data) => this.summary.set(data));
    this.trainService.getAlerts().subscribe((data) => this.alerts.set(data));
  }

  setStatus(status: 'All' | TrainStatus): void {
    this.selectedStatus = status;
  }

  setNav(item: string): void {
    this.activeNav = item;
  }

  statusClass(status: TrainStatus): string {
    return status.toLowerCase().replace(' ', '-');
  }

  severityClass(severity: OperationalAlert['severity']): string {
    return severity.toLowerCase();
  }

  trackByTrain(_: number, train: Train): number {
    return train.id;
  }
}
