// tipagem da tabela users
export interface UserDB {
  id: string,
  name: string,
  email: string,
  password: string,
  created_at: string
}

// tipagem da tabela users_addresses
export interface UserAddressDB {
  user_id: string,
  address: string
}

// tipagem da entidade no formato que o front-end irá receber/enviar para nossa API
export interface UserModel {
  id: string,
  name: string,
  email: string,
  password: string,
  createdAt: string,
  addresses: string[]
}

export class User {
  constructor(
    private id: string,
    private name: string,
    private email: string,
    private password: string,
    private createdAt: string,
    private addresses: string[]
  ) {}

  public getId(): string {
    return this.id
  }

  public setId(value: string): void {
    this.id = value
  }

  public getName(): string {
    return this.name
  }

  public setName(value: string): void {
    this.name = value
  }

  public getEmail(): string {
    return this.email
  }

  public setEmail(value: string): void {
    this.email = value
  }

  public getPassword(): string {
    return this.password
  }

  public setPassword(value: string): void {
    this.password = value
  }

  public getCreatedAt(): string {
    return this.createdAt
  }

  public setCreatedAt(value: string): void {
    this.createdAt = value
  }

  public getAddresses(): string[] {
    return this.addresses
  }

  public setAddresses(value: string[]): void {
    this.addresses = value
  }
}
