import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { environment } from './../../environments/environment';

@Component({
  selector: 'app-shared-email-signature',
  templateUrl: './shared-email-signature.component.html',
  styles: [
    `body{margin:0;padding:0;}img{border:0;line-height:100%;outline:none;text-decoration:none;}table{border-collapse:collapse!important;}body,#lego-body-table,#lego-body-td{height:100%!important;width:100%!important;min-width:100%!important;margin:0;padding:0;}body,#lego-body-background-color{background-color:#ffffff;}.section-wrapper{width:100%;min-width:100%;}.section-background{width:630px;min-width:630px;}.section-background.full-width{width:100%;min-width:100%;}.section-content{width:100%;min-width:630px;}.section-border{table-layout:fixed;width:630px;min-width:630px;}.section-background.full-width .section-border{width:100%;min-width:100%;}.column .section-content{width:100%;min-width:100%;}.column-gutter{width:18px;min-width:18px;line-height:0px;font-size:0px;}.column.half{width:315px;min-width:315px;}.column.half.with-gutter{width:306px;min-width:306px;}.column.third{width:210px;min-width:210px;}.column.third.with-gutter{width:201px;min-width:201px;}.column.third.with-gutter.two-gutters{width:198px;min-width:198px;}.column.two-third{width:100%;min-width:600px;}.column.two-third.with-gutter{width:100%;min-width:600;}.mobile-only{display:none;}.desktop-only{display:table;}@media only screen and (max-width:480px){.section-background{max-width:630px!important;width:100%!important;min-width:100%!important;}.section-content,.section-border{max-width:630px!important;width:100%!important;min-width:100%!important;}.column{display:block!important;}.column-flow-bottom{display:table-footer-group!important;}.column-flow-top{display:table-header-group!important;}.column.half,.column.half.with-gutter,.column.third,.column.third.with-gutter,.column.two-third,.column.two-third.with-gutter{width:100%!important;min-width:100%!important;}.column-gutter{display:none!important;width:0!important;min-width:0!important;}.column.column-flow-normal.with-gutter.not-last-column > table,.column.column-flow-top > table{margin-bottom:18px!important;}.mobile-only{display:table!important;}.desktop-only{display:none!important;}}.dm-image-block img{max-width:100%;height:auto;display:block;}.dm-image-block{table-layout:fixed;}.dm-share-block-icon-label a{text-decoration:none;}blockquote{font-family:Arial-ItalicMT,Arial,Helvetica,sans-serif;font-size:18.0px;font-weight:normal;font-style:italic;color:#434244;line-height:1.4;letter-spacing:normal;margin-top:18px;margin-bottom:18px;}h2{font-family:Arial-BoldMT,Arial,Helvetica,sans-serif;font-size:24.0px;font-weight:bold;font-style:normal;color:#434244;line-height:1.4;letter-spacing:normal;margin-top:16px;margin-bottom:16px;text-align: left;background-color: transparent;}p{font-family:ArialMT,Arial,Helvetica,sans-serif;font-size:16.0px;font-weight:normal;font-style:normal;color:#434244;line-height:1.6;letter-spacing:normal;margin-top:16px;margin-bottom:16px;}td.dm-share-block-label{font-family:ArialMT,Arial,Helvetica,sans-serif;font-size:12.0px;font-weight:normal;font-style:normal;color:#434244;line-height:1.4;letter-spacing:normal;}p.dm-header-footer{font-family:ArialMT,Arial,Helvetica,sans-serif;font-size:12.0px;font-weight:normal;font-style:normal;color:#434244;line-height:1.4;letter-spacing:normal;margin-top:5px;margin-bottom:5px;}h3{font-family:Arial-BoldMT,Arial,Helvetica,sans-serif;font-size:20.0px;font-weight:bold;font-style:normal;color:#434244;line-height:1.4;letter-spacing:normal;margin-top:8px;margin-bottom:8px;}li{font-family:ArialMT,Arial,Helvetica,sans-serif;font-size:16.0px;font-weight:normal;font-style:normal;color:#434244;line-height:1.6;letter-spacing:normal;}h1{font-family:Arial-BoldMT,Arial,Helvetica,sans-serif;font-size:29.0px;font-weight:bold;font-style:normal;color:#434244;line-height:1.4;letter-spacing:normal;margin-top:21px;margin-bottom:21px;}p.dm-caption{font-family:Arial-BoldItalicMT,Arial,Helvetica,sans-serif;font-size:12.0px;font-weight:bold;font-style:italic;color:#434244;line-height:1.4;letter-spacing:normal;margin-top:9px;margin-bottom:9px;}td.dm-follow-block-label{font-family:ArialMT,Arial,Helvetica,sans-serif;font-size:12.0px;font-weight:normal;font-style:normal;color:#434244;line-height:1.4;letter-spacing:normal;}blockquote{margin-left:18px;margin-right:18px;}.dm-text-block.no-paragraph-spacing h1,.dm-text-block.no-paragraph-spacing h2,.dm-text-block.no-paragraph-spacing h3,.dm-text-block.no-paragraph-spacing p,.dm-text-block.no-paragraph-spacing blockquote{margin-top:0px;margin-bottom:0px;}a{color:#0089cd;}`
  ]
})
export class SharedEmailSignatureComponent implements OnInit {

  @Input() signature: any;
  nativeElement: HTMLElement;

  apiRoute = `${environment.apiBaseURL}/`;

  constructor(element: ElementRef) {
    this.nativeElement = element.nativeElement;
  }

  ngOnInit(): void {
  }

}
