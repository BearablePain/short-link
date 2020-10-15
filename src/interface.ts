export interface interfaceUrlObject {
  _id?: string;
  longLink?: string;
  shortUrl?: string;
  urlCode?: string;
  date?: Date;
  count?: number;
  __v?: number;
}

export interface interfaceListUrl {
  dataUrl: interfaceUrlObject[]
}
export interface interfaceStore {
  url?: interfaceUrlObject;
  dataUrl?: interfaceUrlObject[];
}
