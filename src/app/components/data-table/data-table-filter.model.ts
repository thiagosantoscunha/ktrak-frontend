export class DataTableFilter {
  public limit: number;
  public offset: number;
  public searchString: string;
  public orderBy: string;
  public orderDir: string;
  public stringParams: {};

  constructor(searchString: string = null, limit: number = 10, offset: number = 0) {
  }
}
