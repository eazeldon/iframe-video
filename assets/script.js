/*play*/
$('#play').click(function () {
   $('#player1')[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
});


$('#play').click(function () {
   $('#player2')[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
});

/*Pause*/
$('#pause').click(function () {
   $('#player1')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
});

$('#pause').click(function () {
   $('#player2')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
});

/*stop refresh*/
$('#stop').click(function () {
   $('#player1')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
});

$('#stop').click(function () {
   $('#player2')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
});