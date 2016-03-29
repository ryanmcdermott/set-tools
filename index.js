(function () {
  if (!Set) {
    throw new Error('Set type not available in this JavaScript execution environment!');
  }
  else {
    setup();
  }

  function createSetHash(s) {
    var hash = {};
    for (var i of s) {
      hash[i] = true;
    }

    return hash;
  }

  function setup() {
    Set.prototype.intersection = function(comparisonSet) {
      var values = [];
      var comparisonHash = createSetHash(comparisonSet);

      for (var j of this) {
        if (comparisonHash[j]) {
          values.push(j);
        }
      }

      return new Set(values);
    };

    Set.prototype.union = function(comparisonSet) {
      var values = [];
      for (var i of comparisonSet) {
        values.push(i);
      }

      for (var j of this) {
        values.push(j);
      }

      return new Set(values);
    };

    Set.prototype.difference = function(comparisonSet) {
      var values = [];
      var comparisonHash = createSetHash(comparisonSet);

      for (var i of this) {
        if (!comparisonHash[i]) {
          values.push(i);
        }
      }
      return new Set(values);
    };

    Set.prototype.issubset = function(comparisonSet) {
      var values = [];
      var comparisonHash = createSetHash(comparisonSet);

      for (var i of this) {
        if (!comparisonHash[i]) {
          return false;
        }
      }

      return true;
    };

    Set.prototype.issuperset = function(comparisonSet) {
      var values = [];
      var comparisonHash = createSetHash(this);

      for (var i of comparisonSet) {
        if (!comparisonHash[i]) {
          return false;
        }
      }

      return true;
    };

    Set.prototype.toArray = function () {
      var values = [];
      for (var i of this) {
        values.push(i);
      }

      return values;
    };
  }
})();
