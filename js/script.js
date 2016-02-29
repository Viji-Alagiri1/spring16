var myNumber = 1;
var bandNames = [
'East River',
'Flushing River',
'Harlem River',
'Hudson River',
];
var bandImages = [
'http://www.citylandnyc.org/wp-content/uploads/sites/14/2011/03/EastRiver-regular.jpg',
'http://c2.staticflickr.com/2/1378/5107251279_797621253a_b.jpg',
'http://www.kiewit.com/files/cache/bc2788f9c1ef41b31e3029a254871da1_f1278.JPG',
'http://media-2.web.britannica.com/eb-media/12/132112-004-F18EB014.jpg',
];


// update function that will be called within click functions 
// (foward and back)
// carefule: indexing is zero-based like in Python!
function updateEverything(currentNumber) {
  $('#bandImage').attr('src',bandImages[currentNumber-1]);
  $('#bandName').text(bandNames[currentNumber-1]);
  $('#myNumber').text(currentNumber);
}

$('#forward').click( function() {
  if (myNumber < 4) {
    myNumber = myNumber + 1;
  } else {
    myNumber = 1;
  }
  updateEverything(myNumber)
});

$('#back').click( function() {
  if (myNumber > 1) {
    myNumber = myNumber - 1;
  } else {
    myNumber = 4;
  }
  $('#myNumber').text(myNumber);
    updateEverything(myNumber)
});
