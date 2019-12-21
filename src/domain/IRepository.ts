import Metrics from './Metrics'

export default interface IRepository {
  get(): Promise<Metrics[]>
}
