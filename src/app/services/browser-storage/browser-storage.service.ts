import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { BrowserStorage } from './browser-storage.enum';

@Injectable({
  providedIn: 'root'
})
export class BrowserStorageService {
  private localStorage: Storage
  private sessionStorage: Storage
  private storage: Storage

  constructor(
    @Inject(DOCUMENT) private document: Document,
  ) {
    this.localStorage = this.document.defaultView![BrowserStorage.LOCAL_STORAGE]
    this.sessionStorage = this.document.defaultView![BrowserStorage.SESSION_STORAGE]
    this.storage = this.localStorage
  }

  public defineStorage(storageName: string): void {
    this.storage = this[storageName];
  }

  public get(key: string): any {
    return this.storage?.getItem(key);
  }

  public set(key: string, value: string): void {
    this.storage?.setItem(key, value);
  }

  public remove(key: string): void {
    this.storage?.removeItem(key);
  }

  public clear(): void {
    this.storage?.clear();
  }
}
