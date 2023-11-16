/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

export class DeployFromTemplateSmartContractRequest extends SpeakeasyBase {
    /**
     * Deploy smart contract from template body payload.
     */
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    deployFromTemplateDto: shared.DeployFromTemplateDto;

    /**
     * Boolean for transaction simulation. Will estimate gas price.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=simulate" })
    simulate?: boolean;
}

export class DeployFromTemplateSmartContractResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    deploySmartContractResponse?: shared.DeploySmartContractResponse;

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
