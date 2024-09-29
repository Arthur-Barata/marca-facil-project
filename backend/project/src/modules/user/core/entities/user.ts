export class User {
  constructor(
    public readonly enrollment: string,
    public readonly role: string,
    public readonly password: string,
    public readonly name: string,
  ) {}
}
