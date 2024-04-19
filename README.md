# ShipmentTracker

To see the record -
  Sales App > Return Orders > Open a Return Order record > Navigate to Related List > Click on shipment record > 
  On right side you can see the result of the component.
  
Apex Class > TrackShipmentStatusController -
  * getTrackingStatus accepts trackingNumber as a parameter, makes the REST API callout and 
  returns the result which can be used in the LWC js. (Named Credential is used to allow configuring the API Endpoint)
  
trackShipmentStatus -
  * recordId is a public property which get the record Id of the current shipment record.
  * getRecord LDS is used to get the other fields of the Shipment Record.
  * Importing the fields and used to input the wire property which get the shipment record.
  * get method is used to read the tracking number from the shipment record
  * In connectedCallback making the REST API callout which show the returned response based on the tracking number.

