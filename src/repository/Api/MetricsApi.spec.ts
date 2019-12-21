import IMetrics from '~/domain/IMetrics'
import Metrics from '~/domain/Metrics'

import mockAxios from 'axios'
import MetricsApi from '~/repository/Api/MetricsApi'

const testArray: any = { data: [{ name: 'yamada', age: 24 }] }

// axiosのモック化
jest.mock('axios')
const mockedAxios = mockAxios as jest.Mocked<typeof mockAxios>

describe('MetricsApi', () => {
  afterEach(() => jest.resetAllMocks())
  test('戻ってくるMetricsオブジェクト配列が等しい', async () => {
    const metricsApi = new MetricsApi()

    // axios.getをモック化する
    mockedAxios.get.mockImplementationOnce(async () =>
      Promise.resolve(testArray),
    )

    await expect(metricsApi.get()).resolves.toEqual(
      testArray.data.map((obj: IMetrics): Metrics => new Metrics(obj)),
    )
  })
})
