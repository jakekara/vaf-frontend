export default interface Document {
  id: string;
  title: string;
  url?: string;
  [key: string]: any;
}
