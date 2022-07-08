import { Component } from '@angular/core';
import * as XLSX from 'xlsx';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';
  fileName= 'ExcelSheet.xlsx';
  userList=[
    {
      "name": "prince",
      "id": 1,
      "username":"bhavya@321",
      "email": "Eliseo@gardner.biz",
    },
    {
      "name": "Pradeep",
      "id": 2,
      "username":"ashu@123",
      "email": "Eliseo@gardner.biz",
    },
    {
      "name": "priya",
      "id": 3,
      "username":"shiva@123",
      "email": "Eliseo@gardner.biz",
    },
    {
      "name": "prateek",
      "id": 4,
      "username":"tdsf2123",
      "email": "Eliseo@gardner.biz",
    }
]
  exportexcel(): void
  {
    /* pass here the table id */
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */  
    XLSX.writeFile(wb, this.fileName);
 
  }
}