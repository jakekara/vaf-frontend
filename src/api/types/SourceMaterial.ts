export default interface SourceMaterial {
  id: string;

  attributes?: {
    [key: string]: any;
  }

  title: string;
  url?: string;
  [key: string]: any;
}
