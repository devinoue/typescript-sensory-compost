import BaseRepository from '~/api/BaseRepository'
import IUser from '~/domain/IUser'
import User from '~/domain/User'

const resource = 'users/'

export default class UserRepository {
  public async get(): Promise<User[]> {
    const res = await BaseRepository.get(`${resource}`)
    return res.data.map((obj: IUser): User => new User(obj))
  }
}
