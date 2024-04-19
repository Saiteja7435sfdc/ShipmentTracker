import { LightningElement, api, wire } from "lwc";
import { getRecord } from "lightning/uiRecordApi";
import SHIPMENT_TRACKINGNUMBER_FIELD from '@salesforce/schema/Shipment.TrackingNumber';
import getTrackingStatus from "@salesforce/apex/TrackShipmentStatusController.getTrackingStatus";

const FIELDS = [SHIPMENT_TRACKINGNUMBER_FIELD];

export default class TrackShipmentStatus extends LightningElement {
    trackingStatus;
    @api recordId;

    @wire(getRecord, { recordId: "$recordId", fields: FIELDS })
    shipment;

    connectedCallback() {
        const mapInput = {
            trackingNumber: this.trackingNumber
        };
        getTrackingStatus({
            mapInput
        })
        .then(result => {
            if(result.isCalloutFailed) {
                // TO DO: Show the toast message
                console.error(`Callout Failed!!!`)
            }
            else {
                this.trackingStatus = result.status;
            }
        })
        .catch(error => console.error(error))
    }

    get trackingNumber() {
        return this.shipment?.data?.fields?.Name.value;
    }
}