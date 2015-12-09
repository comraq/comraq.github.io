$(document).ready(function() {
  $("#title").mouseenter(function() {
    $("#title").fadeTo('slow', 1);
  });

  $("#title").mouseleave(function() {
    $("#title").fadeTo('slow', 0.3);
  }); 

  $("button").click(function() {
    $(".wip-description").show();
  }); 

  $(".wip").mouseleave(function() {
    $(".wip-description").hide();
  });

  $("#algorithm").click(function() {
    stockProfit();
  });  
});

function stockProfit() {
  var array = [2, 1, -4, -7, 9, 3, 10, -7, -3, 4, 7, 2, 5, -1, -3, 8]; 
  var arrayDiff = [0];
  for (var i = 1; i < array.length; ++i) {
    arrayDiff.push(array[i] - array[i-1]);
  }  
  confirm("Original array: [" + array + "]\n" +
           subArrayMaxSum(arrayDiff));
};

function subArrayMaxSum(array) {
  var max = 0;
  var sum = 0;
  var start = 0;
  var tempStart = start;
  var end = start;

  for (var i = 0; i < array.length; ++i) {
    if (array[i] < 0) {
      if (sum > max) {
        max = sum;
        end = i - 1;
        start = tempStart;
      }
    }
    sum += array[i];
    if (max + sum < 0) {
      sum = 0;
      tempStart = i + 1;
    }
  };

  if (sum > max) {
    max = sum;
    end = i - 1;
  }

  return("Diff array: [" + array + "]\n\n" +
         "SubArrayMaxSum: " + max + "\n" + 
         "StartIndex: " + start + " EndIndex: " + end);
};
