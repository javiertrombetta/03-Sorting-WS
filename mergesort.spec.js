describe("Split Array function", function () {
  it("es capaz de dividir el arreglo en dos partes", function () {
    expect(split([3, 5, 2, 4, 8])).toEqual([[3, 5, 2],[4, 8],]);
  });
});

describe("Merge", function () {
  it("es capaz de combinar dos Arreglos ordenados en uno solo ordenado", function () {
    expect(merge([1, 2, 3, 4, 5], [30, 32, 56])).toEqual([1, 2, 3, 4, 5, 30, 32, 56]);
  });
});

describe("MergeSort", function () {
  it("es capaz de combinar dos Arreglos ordenados en uno solo ordenado", function () {
    expect(mergeSort([2, 2, 2, 1, 3, 4, 8])).toEqual([1, 2, 2, 2, 3, 4, 8]);
  });
});