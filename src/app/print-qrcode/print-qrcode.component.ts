import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-print-qrcode',
  templateUrl: './print-qrcode.component.html',
  styleUrls: ['./print-qrcode.component.css']
})
export class PrintQrcodeComponent implements OnInit {
  printqrvalue: any = 12;
  constructor() { }

  ngOnInit(): void {
    console.log(this.printqrvalue)
  }

  @ViewChild('htmlData') htmlData!: ElementRef;

  openPDF(): void {
    debugger;
    let DATA: any = document.getElementById('htmlData');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('trolleyQrCode.pdf');
    });
  }

}
