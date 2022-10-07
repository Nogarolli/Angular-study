import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private storage: Storage;

  constructor() {
    this.storage = window.localStorage;
  }

  setStorage(key: string, value: any) {
    this.storage.setItem(key, JSON.stringify(value));
  }

  getStorage(key: any) {
    if (this.storage) {
      return JSON.parse(this.storage.getItem(key)!);
    }
    return null;
  }
}
