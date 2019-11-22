// ORIGINAL OBJECT
var accessor = {
  sortable: {
    get: function() {
      return typeof this.getAttribute("name") != undefined;
    }
  },
  draggable: {
    get: function() {
      return typeof this.getAttribute("id") != undefined;
    }
  }
};

// CAN BE CONVERTED INTO
var getAttributeCB = function(attr) {
  return function() {
    return typeof this.getAttribute(attr) != undefined;
  };
};

var accessor = {
  sortable: {
    get: getAttributeCB("name");
  },
  draggable: {
    get: getAttributeCB("id")
  }
};
