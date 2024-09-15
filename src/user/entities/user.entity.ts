export class UserEntity {
  id: number;
  email: string;
  name: string;

  constructor(payload: {
    id: number;
    email: string;
    name: string;
  }) {
    this.id = payload.id;
    this.email = payload.email;
    this.name = payload.name;
  }
}
