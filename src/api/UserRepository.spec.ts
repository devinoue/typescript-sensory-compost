import UserRepository from '~/api/UserRepository.ts'
import IUser from '~/domain/IUser'
import User from '~/domain/User'

const testArray: IUser[] = [{ name: 'yamada', age: 24 }]

jest.mock('userRepository', () => ({
  get: async (): Promise<User[]> => {
    return new Promise(resolve => {
      resolve(testArray.map((obj: IUser): User => new User(obj)))
    })
  },
}))

describe('', () => {
  test('should ', () => {
    // const expectedResult: string = 'result'
    const userRepository = new UserRepository()

    expect(userRepository.get()).toBe(testArray)
  })
})
