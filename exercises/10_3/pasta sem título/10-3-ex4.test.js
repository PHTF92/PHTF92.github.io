const remover = require('./10-3-ex4.js')

test('myremove', () => {
    // Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
    expect(remover([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
    // Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
    expect(remover([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
    // Verifique que o array passado por parâmetro não sofreu alterações
    const arr = [1, 2, 3, 4];
    remover(arr, 3)
    expect(arr).toEqual([1, 2, 3, 4])
    // Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
    expect(remover([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
})