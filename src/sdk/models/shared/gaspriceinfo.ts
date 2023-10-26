/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class GasPriceInfo extends SpeakeasyBase {
    /**
     * Pre eip-1159 gas format.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "gasPrice" })
    gasPrice: string;

    /**
     * Post eip-1159 gas format.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "maxFeePerGas" })
    maxFeePerGas: string;

    /**
     * Post eip-1159 gas format.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "maxPriorityFeePerGas" })
    maxPriorityFeePerGas: string;
}
