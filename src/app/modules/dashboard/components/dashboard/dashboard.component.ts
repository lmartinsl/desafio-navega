import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  data: any;
  options: any;
  legendData!: any[];

  constructor() {}

  ngOnInit(): void {
    this.initializeChartData();
    this.initializeChartOptions();
    this.initializeLegendData();
  }

  private initializeChartData(): void {
    this.data = {
      labels: this.getChartLabels(),
      datasets: [this.getChartDataset()],
    };
  }

  private initializeChartOptions(): void {
    this.options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
    };
  }

  private initializeLegendData(): void {
    this.legendData = [
      this.createLegendEntry(
        'Contribuição mensal',
        this.formatReal(500),
        '#594CBE'
      ),
      this.createLegendEntry(
        'Contribuição voluntária',
        this.formatReal(500),
        '#E22E6F'
      ),
    ];
  }

  private getChartLabels(): string[] {
    return ['Contribuição mensal', 'Contribuição voluntária'];
  }

  private getChartDataset(): any {
    return {
      data: [500, 500],
      backgroundColor: ['#594CBE', '#E22E6F'],
      hoverBackgroundColor: ['#594CBE', '#E22E6F'],
    };
  }

  private createLegendEntry(
    label: string,
    data: string = 'R$ 0,00',
    backgroundColor: string
  ): any {
    return { label, data, backgroundColor };
  }

  private formatReal(value: number) {
    try {
      return value.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL',
      });
    } catch (e) {
      return;
    }
  }
}
