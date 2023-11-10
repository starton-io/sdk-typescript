/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AbiObjectDto } from "./abiobjectdto";
import { CustomGasDto } from "./customgasdto";
import { Expose, Type } from "class-transformer";

export enum DeployFromBytecodeDtoSpeed {
    Low = "low",
    Average = "average",
    Fast = "fast",
    Fastest = "fastest",
    Custom = "custom",
}

export class DeployFromBytecodeDto extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: AbiObjectDto })
    @Expose({ name: "abi" })
    @Type(() => AbiObjectDto)
    abi: AbiObjectDto[];

    @SpeakeasyMetadata()
    @Expose({ name: "bytecode" })
    bytecode: string;

    @SpeakeasyMetadata()
    @Expose({ name: "customGas" })
    @Type(() => CustomGasDto)
    customGas?: CustomGasDto;

    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "gasLimit" })
    gasLimit?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    @SpeakeasyMetadata()
    @Expose({ name: "network" })
    network: string;

    @SpeakeasyMetadata()
    @Expose({ name: "nonce" })
    nonce?: number;

    /**
     * Smart contract constructor parameters.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "params" })
    params: any[];

    @SpeakeasyMetadata()
    @Expose({ name: "signerWallet" })
    signerWallet: string;

    @SpeakeasyMetadata()
    @Expose({ name: "speed" })
    speed?: DeployFromBytecodeDtoSpeed;

    @SpeakeasyMetadata()
    @Expose({ name: "value" })
    value?: string;
}