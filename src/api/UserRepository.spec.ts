import IMetrics from '~/domain/IMetrics'

import Metrics from '~/domain/Metrics'

import UserRepository from '~/api/UserRepository'

const testArray: IMetrics[] = [{ name: 'yamada', age: 24 }]

describe('', () => {
  test('戻ってくるMetricsオブジェクトが等しい', async () => {
    const userRepository = new UserRepository()

    userRepository.get = jest
      .fn()
      .mockResolvedValue(
        testArray.map((obj: IMetrics): Metrics => new Metrics(obj)),
      )

    expect(await userRepository.get()).toEqual(
      testArray.map((obj: IMetrics): Metrics => new Metrics(obj)),
    )
  })
})
