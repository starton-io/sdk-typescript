/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type ReadSmartContractRequest = {
    /**
     * Call read function of smart contracts.
     */
    readDto: shared.ReadDto;
    /**
     * Smart contract address.
     */
    address: string;
    /**
     * EVM starton supported network.
     */
    network: string;
};

export type ReadSmartContractResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    readSmartContractResponse?: shared.ReadSmartContractResponse | undefined;
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
export namespace ReadSmartContractRequest$ {
    export const inboundSchema: z.ZodType<ReadSmartContractRequest, z.ZodTypeDef, unknown> = z
        .object({
            ReadDto: shared.ReadDto$.inboundSchema,
            address: z.string(),
            network: z.string(),
        })
        .transform((v) => {
            return remap$(v, {
                ReadDto: "readDto",
            });
        });

    export type Outbound = {
        ReadDto: shared.ReadDto$.Outbound;
        address: string;
        network: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ReadSmartContractRequest> = z
        .object({
            readDto: shared.ReadDto$.outboundSchema,
            address: z.string(),
            network: z.string(),
        })
        .transform((v) => {
            return remap$(v, {
                readDto: "ReadDto",
            });
        });
}

/** @internal */
export namespace ReadSmartContractResponse$ {
    export const inboundSchema: z.ZodType<ReadSmartContractResponse, z.ZodTypeDef, unknown> = z
        .object({
            ContentType: z.string(),
            ReadSmartContractResponse: shared.ReadSmartContractResponse$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return remap$(v, {
                ContentType: "contentType",
                ReadSmartContractResponse: "readSmartContractResponse",
                StatusCode: "statusCode",
                RawResponse: "rawResponse",
            });
        });

    export type Outbound = {
        ContentType: string;
        ReadSmartContractResponse?: shared.ReadSmartContractResponse$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ReadSmartContractResponse> = z
        .object({
            contentType: z.string(),
            readSmartContractResponse: shared.ReadSmartContractResponse$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return remap$(v, {
                contentType: "ContentType",
                readSmartContractResponse: "ReadSmartContractResponse",
                statusCode: "StatusCode",
                rawResponse: "RawResponse",
            });
        });
}
