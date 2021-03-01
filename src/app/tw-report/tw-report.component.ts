import { Component, OnInit } from '@angular/core';

import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

import {DataService} from '../data.service';
import {DocumentEvent} from '../document-event';

(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-tw-report',
  templateUrl: './tw-report.component.html',
  styleUrls: ['./tw-report.component.css']
})
export class TwReportComponent implements OnInit {

  pdfUrl: string;

  constructor(private dataService: DataService) {
    this.pdfUrl = 'about:blank';
  }

  ngOnInit() {
    this.dataService.currentEvent.subscribe(event => this.onDocumentFormChange(event));
  }

  onDocumentFormChange(event: DocumentEvent) {
    this.updatePdfDocument(event);
  }

  updatePdfDocument(event: DocumentEvent) {
    // event.includeBorders = true;
    const mmToPtRatio = 2.83466667;
    // const mmToPtRatio = 2.8346456692913384;
    const marginSize = 9 * mmToPtRatio;

    const columns = 12;
    const rows = 28;
    const cells = columns * rows;

    const pageWidth = 595.276;
    const pageHeight = 841.89;
    const borderWidth = 0.567;

    // 70.866 , 116.22
    // 45,315

    const contentWidth = pageWidth - 2 * marginSize;
    // const columnWidth = 16 * mmToPtRatio - 0.5 - 0.5 / columns;
    const columnWidth = 45.3543333333;

    const columnHeight = 28.3464642857;

    // const topRowHeight = 3 * mmToPtRatio;
    // const bottomRowHeight = 7 * mmToPtRatio;

    const topRowHeight = 0.3 * columnHeight;
    const bottomRowHeight = 0.7 * columnHeight;

    let tableBuilder;

    const columnWidths = [];

    for (let i = 0; i < columns; i++) {
      columnWidths.push(columnWidth - (event.includeBorders ? borderWidth : 0));
    }

    const docDefinition = {
      pageSize: {width: pageWidth, height: pageHeight},
      // pageMargins: [25.551, 24.094, 25.513, 24.094],
      pageMargins: [24.094, 24.094, 24.094, 24.094],
      defaultStyle: {
        margin: 0
      }
    };


    (<any>pdfMake).createPdf(docDefinition).getDataUrl((outDoc: string) => {
      this.pdfUrl = outDoc;
    });
  }

}
