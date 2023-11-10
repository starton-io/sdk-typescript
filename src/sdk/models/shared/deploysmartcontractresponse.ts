/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { SmartContract } from "./smartcontract";
import { Transaction } from "./transaction";
import { Expose, Type } from "class-transformer";

export class DeploySmartContractResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "smartContract" })
    @Type(() => SmartContract)
    smartContract: SmartContract;

    @SpeakeasyMetadata()
    @Expose({ name: "transaction" })
    @Type(() => Transaction)
    transaction: Transaction;
}