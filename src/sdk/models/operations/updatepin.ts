/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

export class UpdatePinRequest extends SpeakeasyBase {
    /**
     * An object containing the fields you wish to update for the specified file. Can include 'name' and 'metadata'.
     */
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    updatePinDto: shared.UpdatePinDto;

    /**
     * The unique identifier for the file you wish to update. This ID is assigned upon the initial upload of the file to IPFS.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
    id: string;
}

export class UpdatePinResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    pin?: shared.Pin;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse: AxiosResponse;
}
