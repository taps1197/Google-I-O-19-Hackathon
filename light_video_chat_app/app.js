// replace these values with those generated in your TokBox Account
var apiKey = "46251422";
var sessionId = "2_MX40NjI1MTQyMn5-MTU1OTM2NzEwNTY3Nn5uOGxZeDRGNFZXVTBWNVd0SU1yN3plbUJ-fg";
var token = "T1==cGFydG5lcl9pZD00NjI1MTQyMiZzaWc9ZTUyNDY2MWQ2MWRmNjc3NzA2NWQxZTIwODdjZWU4ZDM4NWQ1NzQ5MDpzZXNzaW9uX2lkPTJfTVg0ME5qSTFNVFF5TW41LU1UVTFPVE0yTnpFd05UWTNObjV1T0d4WmVEUkdORlpYVlRCV05WZDBTVTF5TjNwbGJVSi1mZyZjcmVhdGVfdGltZT0xNTU5MzY3MTIzJm5vbmNlPTAuMDcyNjg0MTM0MDE3NDYzMzImcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTU2MTk1OTEyMSZpbml0aWFsX2xheW91dF9jbGFzc19saXN0PQ==";

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
