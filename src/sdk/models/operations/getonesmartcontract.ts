/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives";
import * as shared from "../shared";
import * as z from "zod";

export type GetOneSmartContractRequest = {
    /**
     * Smart contract address.
     */
    address: string;
    includeAbi?: boolean | undefined;
    includeCompilationDetails?: boolean | undefined;
    /**
     * EVM starton supported network.
     */
    network: string;
};

export type GetOneSmartContractResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    smartContract?: shared.SmartContract | undefined;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: Response;
};

/** @internal */
export namespace GetOneSmartContractRequest$ {
    export const inboundSchema: z.ZodType<GetOneSmartContractRequest, z.ZodTypeDef, unknown> =
        z.object({
            address: z.string(),
            includeAbi: z.boolean().optional(),
            includeCompilationDetails: z.boolean().optional(),
            network: z.string(),
        });

    export type Outbound = {
        address: string;
        includeAbi?: boolean | undefined;
        includeCompilationDetails?: boolean | undefined;
        network: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetOneSmartContractRequest> =
        z.object({
            address: z.string(),
            includeAbi: z.boolean().optional(),
            includeCompilationDetails: z.boolean().optional(),
            network: z.string(),
        });
}

/** @internal */
export namespace GetOneSmartContractResponse$ {
    export const inboundSchema: z.ZodType<GetOneSmartContractResponse, z.ZodTypeDef, unknown> = z
        .object({
            ContentType: z.string(),
            SmartContract: shared.SmartContract$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return remap$(v, {
                ContentType: "contentType",
                SmartContract: "smartContract",
                StatusCode: "statusCode",
                RawResponse: "rawResponse",
            });
        });

    export type Outbound = {
        ContentType: string;
        SmartContract?: shared.SmartContract$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetOneSmartContractResponse> = z
        .object({
            contentType: z.string(),
            smartContract: shared.SmartContract$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return remap$(v, {
                contentType: "ContentType",
                smartContract: "SmartContract",
                statusCode: "StatusCode",
                rawResponse: "RawResponse",
            });
        });
}
