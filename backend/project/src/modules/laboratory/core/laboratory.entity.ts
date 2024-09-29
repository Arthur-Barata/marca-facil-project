export class Laboratory {
  constructor(
    private capacity: number,
    private unit: number,
    private number: number,
    private machines: number,
    private isAvailable: boolean,
    private floor: number,
  ) {}
}
