describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('handles an array of one element', function(){
    expect( bubbleSort([1])).toEqual([1]);
  });

  it('handles an array of two elements', function(){
    expect( bubbleSort([2, 1])).toEqual([1, 2]);
  });

  it('handles an array of multiple elements with one unsorted elements', function(){
    expect( bubbleSort([1, 2, 4, 3, 5, 6, 7])).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  it('handles an array of multiple elements with multiple unsorted elements', function(){
    var array = [2, 1, 5, 4, 7, 6];
    bubbleSort(array)
    expect(array).toEqual([1,2,4,5,6,7])
  });

});
