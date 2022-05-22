import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  assetsFolderPath = '../../../assets';
  constructor() { }
}
