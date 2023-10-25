import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FileItem, FileUploader } from 'ng2-file-upload';

const FileSaver = require('file-saver');
const URL = 'http://localhost:4200/assets/images/';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})

export class EmployeeComponent implements OnInit {

  // @ViewChild('FileInput') myFileInputVariable: ElementRef;
  // @ViewChild('contentToConvert') public contentToConvert: ElementRef;

  @ViewChildren('ce') public ces:ElementRef;
  public uploader: FileUploader = new FileUploader({
    url: URL,
    queueLimit: 1,
    itemAlias: 'file'
  });

  // response:string;
  
  signature: any = {
    "region": '', "team": '', "employeeName": '', "employeeDesignation": '', "addressLine1": '', "addressLine2": '', "addressLine3": '', "phone": '', "faxLine": '', "mobile": '', "extLine": ''
  };

  regions = ['Middle East Headquarters', 'India'];
  teams = ['Business','Other'];
  emailType: string = '';
  error = false;

  // maxLength = 0;
  // lineLength1;
  // lineLength2;
  // lineLength3;

  // lineLength = !string.IsNullOrEmpty(fc["AddressLine1"]) ? fc["AddressLine1"].Length : 0;
  // maxLength = lineLength;
  // lineLength = !string.IsNullOrEmpty(fc["AddressLine2"]) ? fc["AddressLine2"].Length : 0;
  // maxLength = lineLength > maxLength ? lineLength : maxLength;
  // lineLength = !string.IsNullOrEmpty(fc["AddressLine3"]) ? fc["AddressLine3"].Length : 0;
  // maxLength = lineLength > maxLength ? lineLength : maxLength;
  // // 500 / 80 = 6.25 px
  // //double emLength = Math.Round((double) (maxLength * 12) , 0);
  // pxLength = (int) (maxLength * 7);
  // //int pxLength = 510; 
  // pxTable = pxLength + 260;
  // teamColor = !string.IsNullOrEmpty(fc["Team"]) ? fc["Team"] : "#322e2f";
  // borderWidth = !string.IsNullOrEmpty(fc["Team"]) ? "8px" : "1px";

  constructor(private elRef:ElementRef) { 

    // this.uploader = new FileUploader({
    //   url: 'http://uasdevapp.centralus.cloudapp.azure.com/api',
    //   disableMultipart: true, // 'DisableMultipart' must be 'true' for formatDataFunction to be called.
    //   formatDataFunctionIsAsync: true,
    //   formatDataFunction: async (item: any) => {
    //     return new Promise( (resolve, reject) => {
    //       resolve({
    //         name: item._file.name,
    //         length: item._file.size,
    //         contentType: item._file.type,
    //         date: new Date()
    //       });
    //     });
    //   }
    // });

    // this.response = '';
 
    // this.uploader.response.subscribe( res => this.response = res );

  }

  ngOnInit(): void {

    this.uploader.onCompleteItem = (item: any, status: any) => {
      console.log('Uploaded File Details:', item);
      alert('File successfully uploaded!');
    };

  }

  ngAfterViewInit(): void {
    if (this.ces) {
      this.ces.nativeElement;
    }
  }

  create() {
    this.validityState();
    if(this.error) return;
    console.log("Create");
    this.emailType = this.signature.team;

    this.downloadHTML();
  }

  onFileSelected(event: any) {
    const file: File = event[0];
    // this.uploader.uploadItem(file);
    let formParams = new FormData();
    formParams.append('file', file)
    console.log("File: ", file, formParams, this.uploader)
    // for (let i = 0; i < this.filesList.length; i++) {
    //   if (this.filesList[i].name === file.name) {
    //     this.toastr.warning('File already exists', 'Warning');
    //     return;
    //   }
    // }    
    // this.isChanged = true;
    // this.filesList.push(file);
  }
  onFileChange(e:any) {
    // this.myFileInputVariable.nativeElement.value = '';
  }

  fileOverBase(e: any): void {
    // this.hasBaseDropZoneOver = e;
  }

  downloadHTML() {
    const data : HTMLElement = this.elRef.nativeElement.getElementsByClassName('contentToConvert');

    const fileData: any = data;
    const name = this.signature.employeeName.replace(/ /g,"_")+'.html';
    // const data = this.elRef.nativeElement.querySelector('#contentToConvert')
    console.log(this.ces, this.ces.nativeElement);
    console.log("data: ", data, fileData, name);


    
    // const fileName = 'personEmailSignature.html';
    // const url = 'http://localhost:4200/assets/downloads/';
    
    
    // FileSaver.saveAs(url, name);  

    var blob = new Blob(fileData, {type: "text/plain;charset=utf-8"});
    FileSaver.saveAs(blob, name);
    
    // window.open(url, '_blank');
  }
  validityState() {
    if(this.signature) {
      this.error = false;
      const keys = Object.keys(this.signature);
      console.log("Empty: ", keys);
      keys.forEach( (e: any) => {
        if(this.signature[e] == "") {
          this.error = true;
        }
      });
    }
  }

  changeView() {
    this.emailType = '';
  }
}
