import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarChartComponent } from 'src/app/stats-charts/bar-chart/bar-chart.component';
import { DoughnutChartComponent } from 'src/app/stats-charts/doughnut-chart/doughnut-chart.component';
import { LineChartComponent } from 'src/app/stats-charts/line-chart/line-chart.component';
import { RadarChartComponent } from 'src/app/stats-charts/radar-chart/radar-chart.component';
import { StatsComponent } from 'src/app/statistics/panel/stats.component';
import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BubbleChartComponent } from '../stats-charts/bubble-chart/bubble-chart.component';



@NgModule({
  declarations: [StatsComponent,
    BarChartComponent,
    DoughnutChartComponent,
    LineChartComponent,
    RadarChartComponent,
    BubbleChartComponent ],
  imports: [
    CommonModule,
    ChartsModule,
    AppRoutingModule,
  ]
})
export class StatisticsModule { }
