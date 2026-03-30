export interface Document {
  id: number;
  title: string;
  content: string;
}

export interface Data {
  matched_docs: Document[];
}


export interface Response<T> {
  data: {
    matched_docs: T[];
    summary: string;
  }
  message: string;
  success: boolean;
  statusCode: number;
}

