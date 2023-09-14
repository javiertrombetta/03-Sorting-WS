describe("Bubble Sort", function () {
  beforeAll(function () {
    spyOn(window, "swap").and.callThrough();
  });
  it("handles an empty array", function () {
    swap.calls.reset();
    expect(bubbleSort([])).toEqual([]);
    expect(swap.calls.count()).toEqual(0);
  });
  it("arreglo desordenado que termina ordenado", function () {
    swap.calls.reset();
    expect(bubbleSort([1, 9, 7, 32, 8])).toEqual([1, 7, 8, 9, 32]);
    expect(swap.calls.count()).toEqual(3);
  });
  it("arreglo ordenado que debe mantenerse ordenado", function () {
    swap.calls.reset();
    expect(bubbleSort([1, 7, 8, 9, 32])).toEqual([1, 7, 8, 9, 32]);
    expect(swap.calls.count()).toEqual(0);
  });
  it("arreglo a la inversa que termina ordenado", function () {
    swap.calls.reset();
    expect(bubbleSort([32, 9, 8, 7, 1])).toEqual([1, 7, 8, 9, 32]);
    expect(swap.calls.count()).toEqual(10);
  });
});
