import DataUsecase from '~/usecase/DataUsecase'

const testArray: IMetrics[] = [{ name: 'yamada', age: 24 }]

describe('Name of the group', () => {
  test('should ', () => {
    const dataUsecase: DataUsecase = new DataUsecase()
    expect(dataUsecase.execute()).toBeNull()
  })
})
