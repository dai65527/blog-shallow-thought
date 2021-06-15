export type APIResponseList<ContentType> = {
  contents: ContentType[];
  totalCount: number;
  offset: 0;
  limit: 10;
};
