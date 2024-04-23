import { LightningElement, api, wire } from "lwc";
import { getRecord } from "lightning/uiRecordApi";
import SHIPMENT_TRACKINGNUMBER_FIELD from '@salesforce/schema/Shipment.TrackingNumber';
import getCurrentTrackingStatus from "@salesforce/apex/TrackShipmentStatusController.getCurrentStatus";
import getTrackingStatus from "@salesforce/apex/TrackShipmentStatusController.getTrackingStatus";

const FIELDS = [SHIPMENT_TRACKINGNUMBER_FIELD];

export default class TrackShipmentStatus extends LightningElement {
    trackingStatus;
    @api recordId;
  @wire(getCurrentTrackingStatus, { recordid:  "$recordId" })
    wiredData({ error, data }) {
      if (data) {
        console.log('Data', data);
        this.trackingStatus = data;
      } else if (error) {
         console.error('Error:', error);
      }
    }
}
