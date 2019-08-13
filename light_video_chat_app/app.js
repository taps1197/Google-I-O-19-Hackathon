// replace these values with those generated in your TokBox Account
var apiKey = "46251422";
var sessionId = "2_MX40NjI1MTQyMn5-MTU2NTY5NTk0MjI0NH42ejBVdFR4S00zRzdRR3ZaL0M0YU9ObGl-UH4";
var token = "T1==cGFydG5lcl9pZD00NjI1MTQyMiZzaWc9NGQ3NzVlODFlN2U1YTJmMTZjZTU5MDliY2FlMWRhNzc3ZjQ2MTgzZDpzZXNzaW9uX2lkPTJfTVg0ME5qSTFNVFF5TW41LU1UVTJOVFk1TlRrME1qSTBOSDQyZWpCVmRGUjRTMDB6UnpkUlIzWmFMME0wWVU5T2JHbC1VSDQmY3JlYXRlX3RpbWU9MTU2NTY5NjI5OCZub25jZT0wLjQzNDMxMTQ2MzMzMTQ1MTEmcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTU2ODI4ODI5NSZpbml0aWFsX2xheW91dF9jbGFzc19saXN0PQ==";
initializeSession();
// Handling all of our errors here by alerting them
function handleError(error) {
  if (error) {
    alert(error.message);
  }
}

function initializeSession() {
  var session = OT.initSession(apiKey, sessionId);

  // Subscribe to a newly created stream
session.on('streamCreated', function(event) {
  session.subscribe(event.stream, 'subscriber', {
    insertMode: 'append',
    width: '100%',
    height: '100%'
  }, handleError);
});
  // Create a publisher
  var publisher = OT.initPublisher('publisher', {
    insertMode: 'append',
    width: '100%',
    height: '100%'
  }, handleError);

  // Connect to the session
  session.connect(token, function(error) {
    // If the connection is successful, publish to the session
    if (error) {
      handleError(error);
    } else {
      session.publish(publisher, handleError);
    }
  });
}
