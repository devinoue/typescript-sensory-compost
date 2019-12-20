import BaseRepository from '~/api/BaseRepository'
import IMetrics from '~/domain/IMetrics'
import Metrics from '~/domain/Metrics'

const resource = 'users/'

export default class UserRepository {
  public async get(): Promise<Metrics[]> {
    const res = await BaseRepository.get(`${resource}`)
    return res.data.map((obj: IMetrics): Metrics => new Metrics(obj))
  }
}
