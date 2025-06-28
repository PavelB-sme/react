import 'moment';

declare module 'moment' {
  interface Moment {
    genitive(): {
      month: string;
    };
  }
}