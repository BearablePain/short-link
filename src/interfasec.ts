export interface interfaceUrlObject {
  _id?: number;
  longLink: string;
  shortUrl: string;
  urlCode: string;
  date: Date;
  count: number;
  __v?: number;
}

export interface interfaceListUrl {
  dataUrl: interfaceUrlObject[]
}
