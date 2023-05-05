import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{
  constructor(private divs: ServicesService) {}
  data:any
  displayedColumns: any = ['empId', 'empName', 'empDepartment', 'isDeleted','Action'];
  dataSource=new MatTableDataSource<string>();
  ngOnInit(): void {
    this.getdata();
  }


  getdata() {
    this.divs.getData().subscribe((result) => {
      this.data=result;
      this.dataSource=this.data;
    })
  }
 
}
