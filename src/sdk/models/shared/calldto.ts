/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CustomGasDto } from "./customgasdto";
import { Expose, Type } from "class-transformer";

export enum Speed {
    Low = "low",
    Average = "average",
    Fast = "fast",
    Fastest = "fastest",
    Custom = "custom",
}

export class CallDto extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "customGas" })
    @Type(() => CustomGasDto)
    customGas?: CustomGasDto;

    @SpeakeasyMetadata()
    @Expose({ name: "functionName" })
    functionName: string;

    @SpeakeasyMetadata()
    @Expose({ name: "gasLimit" })
    gasLimit?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "nonce" })
    nonce?: number;

    /**
     * Smart contract parameters.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "params" })
    params: any[];

    @SpeakeasyMetadata()
    @Expose({ name: "signerWallet" })
    signerWallet: string;

    @SpeakeasyMetadata()
    @Expose({ name: "speed" })
    speed?: Speed;

    @SpeakeasyMetadata()
    @Expose({ name: "value" })
    value?: string;
}
