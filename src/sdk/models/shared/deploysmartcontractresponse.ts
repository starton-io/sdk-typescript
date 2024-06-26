/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SmartContract, SmartContract$ } from "./smartcontract.js";
import { Transaction, Transaction$ } from "./transaction.js";
import * as z from "zod";

export type DeploySmartContractResponse = {
    smartContract: SmartContract;
    transaction: Transaction;
};

/** @internal */
export namespace DeploySmartContractResponse$ {
    export const inboundSchema: z.ZodType<DeploySmartContractResponse, z.ZodTypeDef, unknown> =
        z.object({
            smartContract: SmartContract$.inboundSchema,
            transaction: Transaction$.inboundSchema,
        });

    export type Outbound = {
        smartContract: SmartContract$.Outbound;
        transaction: Transaction$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeploySmartContractResponse> =
        z.object({
            smartContract: SmartContract$.outboundSchema,
            transaction: Transaction$.outboundSchema,
        });
}
