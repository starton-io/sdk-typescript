/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type GetAvailableNoncesWalletRequest = {
    /**
     * the address of the wallet from which you need to retrieve available nonces
     */
    address: string;
    /**
     * the network from which you need to retrieve available nonces
     */
    network: string;
};

export type GetAvailableNoncesWalletResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    noncesAvailable?: shared.NoncesAvailable | undefined;
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
export namespace GetAvailableNoncesWalletRequest$ {
    export const inboundSchema: z.ZodType<GetAvailableNoncesWalletRequest, z.ZodTypeDef, unknown> =
        z.object({
            address: z.string(),
            network: z.string(),
        });

    export type Outbound = {
        address: string;
        network: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetAvailableNoncesWalletRequest
    > = z.object({
        address: z.string(),
        network: z.string(),
    });
}

/** @internal */
export namespace GetAvailableNoncesWalletResponse$ {
    export const inboundSchema: z.ZodType<GetAvailableNoncesWalletResponse, z.ZodTypeDef, unknown> =
        z
            .object({
                ContentType: z.string(),
                NoncesAvailable: shared.NoncesAvailable$.inboundSchema.optional(),
                StatusCode: z.number().int(),
                RawResponse: z.instanceof(Response),
            })
            .transform((v) => {
                return remap$(v, {
                    ContentType: "contentType",
                    NoncesAvailable: "noncesAvailable",
                    StatusCode: "statusCode",
                    RawResponse: "rawResponse",
                });
            });

    export type Outbound = {
        ContentType: string;
        NoncesAvailable?: shared.NoncesAvailable$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetAvailableNoncesWalletResponse
    > = z
        .object({
            contentType: z.string(),
            noncesAvailable: shared.NoncesAvailable$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return remap$(v, {
                contentType: "ContentType",
                noncesAvailable: "NoncesAvailable",
                statusCode: "StatusCode",
                rawResponse: "RawResponse",
            });
        });
}
