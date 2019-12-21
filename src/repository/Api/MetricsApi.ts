import BaseApi from '~/repository/Api/BaseApi'
import IMetrics from '~/domain/IMetrics'
import Metrics from '~/domain/Metrics'

const resource = 'metrics/'

export default class MetricsApi {
  /**
   * データを受け取ったらMetrics配列に入れる
   */
  async get(): Promise<Metrics[] | any> {
    const res: any = await BaseApi.get(`${resource}`)
    return res.data.map((obj: IMetrics): Metrics => new Metrics(obj))
  }
}
