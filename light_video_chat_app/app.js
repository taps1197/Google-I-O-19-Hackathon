// replace these values with those generated in your TokBox Account
var apiKey = "46455282";
var sessionId = "1_MX40NjQ1NTI4Mn5-MTU3MzI3NTEyMTk4N342ZjlwdzNkN2tYU2M3UnorZEIwVGpuM0d-UH4";
var token = "T1==cGFydG5lcl9pZD00NjQ1NTI4MiZzaWc9NmZhNmFhM2FhZWJkNmRjMjFmZmQyODlkNWFlOTJmNjRhOGNmZjVhMzpzZXNzaW9uX2lkPTFfTVg0ME5qUTFOVEk0TW41LU1UVTNNekkzTlRFeU1UazROMzQyWmpsd2R6TmtOMnRZVTJNM1Vub3JaRUl3VkdwdU0wZC1VSDQmY3JlYXRlX3RpbWU9MTU3MzI3NTEzOCZub25jZT0wLjUwNzc5OTQ3MjU4Nzg4MDcmcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTU3MzI3ODczMyZpbml0aWFsX2xheW91dF9jbGFzc19saXN0PQ==";
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
