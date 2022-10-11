import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-usdata',
  templateUrl: './usdata.component.html',
  styleUrls: ['./usdata.component.css']
})
export class UsdataComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
   }
   fetchData=()=>{
    this.myapi.viewUs().subscribe(
      (data)=>{
        this.usData=data
      }
    )
   }

  usData:any={}
  ngOnInit(): void {
  }

}
