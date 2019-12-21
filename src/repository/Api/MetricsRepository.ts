import BaseRepository from '~/repository/Api/BaseRepository'
import IMetrics from '~/domain/IMetrics'
import Metrics from '~/domain/Metrics'

const resource = 'metrics/'

export default class MetricsRepository {
  async get(): Promise<Metrics[] | any> {
    const res: any = await BaseRepository.get(`${resource}`)
    return res.data.map((obj: IMetrics): Metrics => new Metrics(obj))
  }
}
