// replace these values with those generated in your TokBox Account
var apiKey = "46455282";
var sessionId = "92b0e7cec90e958acd3f130c26c6103b97374e1a";
var token = "T1==cGFydG5lcl9pZD00NjQ1NTI4MiZzaWc9M2NjZTUyODEwZjkyNWY3OTY1NDMzOGMyYWQ2YzY5ZGJiMDY2ZThjZjpzZXNzaW9uX2lkPTFfTVg0ME5qUTFOVEk0TW41LU1UVTNNekkzTkRrd05UQTJOMzU0ZEdKdU55dEZja3BhU0UxRlNETmplQ3RKTjFCVE4ydC1mZyZjcmVhdGVfdGltZT0xNTczMjc0OTI0Jm5vbmNlPTAuNDA4MTUzNjQzNzE5MzIyMyZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNTc1ODY2OTIwJmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9";
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
