/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class CustomGasDto extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "gasPrice" })
    gasPrice?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "maxFeePerGas" })
    maxFeePerGas?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "maxPriorityFeePerGas" })
    maxPriorityFeePerGas?: string;
}