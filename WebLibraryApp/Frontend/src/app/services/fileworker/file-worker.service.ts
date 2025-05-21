import { Injectable } from '@angular/core';
import mime from 'mime';

@Injectable({
  providedIn: 'root'
})
export class FileWorkerService {
  constructor() { }

  getFileExt(fileName: string): string{
    return fileName.split('.').slice(-1)[0];
  }

  getFileMimeType(fileName: string): string | null{
    const fileExt: string = this.getFileExt(fileName);
    const mimeType = mime.getType(fileExt);
    return mimeType;
  }
}
