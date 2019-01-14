import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  tr_type = ['BUY', 'SELL'];
  tick = ['GOOGL', 'APPL'];
  br_code = ['BIC', 'YUI', 'RTI'];
  itype = ['BAS', 'WSD', 'WRF'];
  ac_id = ['1008','1009','1010','1111'];
  dt = new Date;
  data = [];
  constructor(private http: HttpClient) {

  }

  getData(): Observable<any> {
    return this.http.get('../assets/data.json');
  }

  getDynData() {
    for (let n = 15; n > 0; n--)
      this.getDataFor(-n+1);
    return this.data;
  }

  getDataFor(n) {
    let d = [];

    let _dt = new Date(this.dt.getTime() + n * 24 * 60 * 60 * 1000).toLocaleString().split(",")[0];
    for (let m = 0; m < 4; m++) {
      this.data.push({
        tr_date: _dt,
        stl_date: _dt,
        tr_type: this.tr_type[parseInt((Math.random() * 2).toString(), 10)],
        tick: this.tick[parseInt((Math.random() * 2).toString(), 10)],
        trade_id: 10000 + parseInt((Math.random() * 2).toString(), 10),
        br_code: this.br_code[parseInt((Math.random() * 3).toString(), 10)],
        itype: this.itype[parseInt((Math.random() * 3).toString(), 10)],
        ac_id: this.ac_id[parseInt((Math.random() * 4).toString(), 10)],
        amount: 10000 + parseInt((Math.random() * 1000).toString(), 10),
        qty: 50 + parseInt((Math.random() * 100).toString(), 10),
        asset_class: 'EQ'
      })
    }
    console.log(this.data);
  }
}
