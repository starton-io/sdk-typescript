/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKConfiguration } from "./sdk";
import { Template } from "./template";

export class SmartContract {
    public template: Template;
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
        this.template = new Template(this.sdkConfiguration);
    }
}
