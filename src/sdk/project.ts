/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Member } from "./member";
import { SDKConfiguration } from "./sdk";

export class Project {
    public member: Member;
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
        this.member = new Member(this.sdkConfiguration);
    }
}