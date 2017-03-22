export interface BlogModel {
  id: string;
  author: string;
  body?: string;
  date: number;
  title: string;
  lastEdit?: number;
}
