var should = require('chai').should(),
    assert = require('chai').assert
    setTools = require('../index');

describe('intersection', function() {
  it('shows set intersections', function() {
    var s = new Set([1, 3, 5, 7, 9]);
    var cmp = new Set([2, 3, 8, 9]);

    var results = s.intersection(cmp).toArray().toString();
    results.should.equal('3,9');
  });
});

describe('union', function() {
  it('shows set union', function() {
    var s = new Set([1, 3, 5, 7, 9]);
    var cmp = new Set([2, 3, 8, 9]);

    var results = s.union(cmp).toArray().toString();
    results.should.equal('2,3,8,9,1,5,7');
  });
});

describe('difference', function() {
  it('shows set differences', function() {
    var s = new Set([1, 3, 5, 7, 9]);
    var cmp = new Set([2, 3, 8, 9]);

    var results = s.difference(cmp).toArray().toString();
    results.should.equal('1,5,7');
  });
});

describe('issuperset', function() {
  it('tests if every element of comparison set is in caller set', function() {
    var s = new Set([1, 3, 5, 7, 9]);
    var cmp = new Set([3, 5]);

    var results = s.issuperset(cmp);
    assert.isTrue(results, 'strictly true');

    s = new Set([1, 3, 5, 7, 9]);
    cmp = new Set([3, 8]);
    var results = s.issuperset(cmp);
    assert.isFalse(results, 'strictly false');
  });
});

describe('issubset', function() {
  it('tests if every element of caller set in comparison set', function() {
    var s = new Set([11, 15, 18, 20]);
    var cmp = new Set([11, 15, 18, 20, 25, 89, 100]);

    var results = s.issubset(cmp);
    assert.isTrue(results, 'strictly true');

    s = new Set([11, 15, 18, 57, 62]);
    cmp = new Set([11, 15, 18, 20, 25, 89, 100]);
    var results = s.issubset(cmp);
    assert.isFalse(results, 'strictly false');
  });
});
