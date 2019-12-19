import IUser from '~/domain/IUser'

export default class User {
  private readonly _name: string
  private readonly _age: number

  constructor(obj: IUser) {
    this._name = obj.name
    this._age = obj.age
  }
}
