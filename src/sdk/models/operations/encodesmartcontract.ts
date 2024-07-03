/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type EncodeSmartContractRequest = {
    /**
     * Encode your smartcontract call.
     */
    encodeDto: shared.EncodeDto;
    /**
     * Smart contract address.
     */
    address: string;
    /**
     * EVM starton supported network.
     */
    network: string;
};

export type EncodeSmartContractResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    encodeSmartContractResponse?: shared.EncodeSmartContractResponse | undefined;
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
export namespace EncodeSmartContractRequest$ {
    export const inboundSchema: z.ZodType<EncodeSmartContractRequest, z.ZodTypeDef, unknown> = z
        .object({
            EncodeDto: shared.EncodeDto$.inboundSchema,
            address: z.string(),
            network: z.string(),
        })
        .transform((v) => {
            return remap$(v, {
                EncodeDto: "encodeDto",
            });
        });

    export type Outbound = {
        EncodeDto: shared.EncodeDto$.Outbound;
        address: string;
        network: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, EncodeSmartContractRequest> = z
        .object({
            encodeDto: shared.EncodeDto$.outboundSchema,
            address: z.string(),
            network: z.string(),
        })
        .transform((v) => {
            return remap$(v, {
                encodeDto: "EncodeDto",
            });
        });
}

/** @internal */
export namespace EncodeSmartContractResponse$ {
    export const inboundSchema: z.ZodType<EncodeSmartContractResponse, z.ZodTypeDef, unknown> = z
        .object({
            ContentType: z.string(),
            EncodeSmartContractResponse:
                shared.EncodeSmartContractResponse$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return remap$(v, {
                ContentType: "contentType",
                EncodeSmartContractResponse: "encodeSmartContractResponse",
                StatusCode: "statusCode",
                RawResponse: "rawResponse",
            });
        });

    export type Outbound = {
        ContentType: string;
        EncodeSmartContractResponse?: shared.EncodeSmartContractResponse$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, EncodeSmartContractResponse> = z
        .object({
            contentType: z.string(),
            encodeSmartContractResponse:
                shared.EncodeSmartContractResponse$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return remap$(v, {
                contentType: "ContentType",
                encodeSmartContractResponse: "EncodeSmartContractResponse",
                statusCode: "StatusCode",
                rawResponse: "RawResponse",
            });
        });
}
