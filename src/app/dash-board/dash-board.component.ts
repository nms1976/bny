import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ChartComponent } from '../../../node_modules/angular2-highcharts';
import { element } from '../../../node_modules/@angular/core/src/render3';
import { DatePipe } from '../date.pipe';

@Component({
  selector: 'dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  data;
  groupby_ar = [];
  cnt = 0; key = '';
  keyar = [];
  gb = false;
  head = "Today's Trade";
  today = '';
  //today = new Date(new Date().getTime() +0 * 24 * 60 * 60 * 1000).toLocaleString().split(",")[0];
  options;
  mock = true;
  dtype = 'Mock';
  constructor(private ds: DataService) {
    this.options = {
      title : { text : 'Business Trend' },
      series: [{
        data: [],
      }]
    };
   }

  ngOnInit() {
    this.mock = true;
    this.getMockData();
  }

  getMockData(){
    this.mock = true;this.today = '10/08/18';
    this.options.series[0].data = [];
    this.ds.getData().subscribe(res => {
      this.data = res;
      res.forEach(element=>{
        console.log(element.amount);
        this.options.series[0].data.push(Number(element.amount));
      });
      console.log(this.options.series[0].data);
    })
  }

  getTodayData(){
    if(this.mock) this.today = '10/08/18';
    else this.today = new Date(new Date().getTime() +0 * 24 * 60 * 60 * 1000).toLocaleString().split(",")[0];
  }

  getDynData(){
    console.log(143)
    this.mock = false;
    this.data = [];
    this.key = '';this.cnt = -1;
    this.groupby_ar = [];
    this.keyar = [];
    this.today = new Date(new Date().getTime() +0 * 24 * 60 * 60 * 1000).toLocaleString().split(",")[0];
    this.data = this.ds.getDynData();
    this.options.series[0].data = [];
    this.data.forEach(element=>{
      console.log(element.amount);
      this.options.series[0].data.push(Number(element.amount));
    });
    console.log(this.data);
  }

  groupBy(str){

    this.key = str;this.cnt = -1;
    this.groupby_ar = [];
    this.keyar = [];
        for (let n = 0; n < this.data.length; n++) {
          let tr = this.data[n][this.key].trim();
          if(this.keyar.indexOf(tr)!=-1) continue;
          else {
            this.cnt++;
            this.groupby_ar[this.cnt] = [];
            this.keyar.push(tr);console.log(tr)
            this.data.forEach(element => {
              if (tr == element[this.key].trim()) this.groupby_ar[this.cnt].push(element);
            })
            
          }
        }
  }
  // groupBy(str) {

  //   this.ar.forEach(element => {

  //     if (str!=element.key) this[str] = false;
  //     //console.log(str, element, str === element)
  //   });
  //   console.log(this[str])
  // }
} 
