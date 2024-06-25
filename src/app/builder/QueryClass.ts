import { FilterQuery, Query } from "mongoose";

class QueryClass<T> {
  public modelQuery: Query<T[], T>;
  public query: Record<string, unknown>;

  constructor(modelQuery: Query<T[], T>, query: Record<string, unknown>) {
    this.modelQuery = modelQuery;
    this.query = query;
  }

  search() {
    const id = this.query?.roomId;
    if (id) {
      this.modelQuery = this.modelQuery.find({ _id: id });
    }
    return this;
  }

  filter(exCludeFields: string[]) {
    const queryObj = { ...this.query };
    exCludeFields.forEach((field) => delete queryObj[field]);
    this.modelQuery = this.modelQuery.find(queryObj as FilterQuery<T>);
    return this;
  }
  sort() {
    const sort = (this.query?.sort as string) || "-createdAt";
    this.modelQuery = this.modelQuery.sort(sort);
    return this;
  }
  field() {
    const field =
      (this.query?.field as string)?.split(",")?.join(" ") || "-__V";
    this.modelQuery = this.modelQuery.select(field);

    return this;
  }
}

export default QueryClass;
