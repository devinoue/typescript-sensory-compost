import TodoRepository from '~/api/TodoRepository'

describe('TodoRepository', () => {
  describe('execute()', () => {
    const todoRepository: TodoRepository = new TodoRepository()
    test('execute', () => {
      expect(todoRepository.execute()).toBe(1)
    })
  })
})
