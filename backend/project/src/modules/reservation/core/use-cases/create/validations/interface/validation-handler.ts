export interface ValidationHandler<T> {
  handler(data: T): void;
}
