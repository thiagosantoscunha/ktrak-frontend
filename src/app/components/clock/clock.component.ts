import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-hunger-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit, OnDestroy {

  hours: string;
  minutes: string;
  seconds: string;
  date: Date;
  private timerId = null;

  ngOnInit() {
    this.setCurrentTime();
    this.timerId = this.updateTime();
    this.date = new Date();
  }

  ngOnDestroy() {
    clearInterval(this.timerId);
  }

  private setCurrentTime() {
    const time = new Date(Date.now());
    this.hours = this.leftPadZero(time.getHours());
    this.minutes = this.leftPadZero(time.getMinutes());
    this.seconds = this.leftPadZero(time.getSeconds());
  }

  private updateTime() {
    setInterval(() => {
      this.setCurrentTime();
    }, 1000);
  }

  private leftPadZero(value: number) {
    return value < 10 ? `0${value}` : value.toString();
  }

}
