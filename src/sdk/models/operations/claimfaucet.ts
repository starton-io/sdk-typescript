/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type ClaimFaucetRequest = {
    requireFaucetDto: shared.RequireFaucetDto;
    /**
     * EVM starton supported network.
     */
    network: string;
};

export type ClaimFaucetResponseBody = shared.TooEarly;

export type ClaimFaucetResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    faucet?: shared.Faucet | undefined;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: Response;
    oneOf?: shared.TooEarly | undefined;
};

/** @internal */
export namespace ClaimFaucetRequest$ {
    export const inboundSchema: z.ZodType<ClaimFaucetRequest, z.ZodTypeDef, unknown> = z
        .object({
            RequireFaucetDto: shared.RequireFaucetDto$.inboundSchema,
            network: z.string(),
        })
        .transform((v) => {
            return remap$(v, {
                RequireFaucetDto: "requireFaucetDto",
            });
        });

    export type Outbound = {
        RequireFaucetDto: shared.RequireFaucetDto$.Outbound;
        network: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ClaimFaucetRequest> = z
        .object({
            requireFaucetDto: shared.RequireFaucetDto$.outboundSchema,
            network: z.string(),
        })
        .transform((v) => {
            return remap$(v, {
                requireFaucetDto: "RequireFaucetDto",
            });
        });
}

/** @internal */
export namespace ClaimFaucetResponseBody$ {
    export const inboundSchema: z.ZodType<ClaimFaucetResponseBody, z.ZodTypeDef, unknown> =
        shared.TooEarly$.inboundSchema;

    export type Outbound = shared.TooEarly$.Outbound;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ClaimFaucetResponseBody> =
        shared.TooEarly$.outboundSchema;
}

/** @internal */
export namespace ClaimFaucetResponse$ {
    export const inboundSchema: z.ZodType<ClaimFaucetResponse, z.ZodTypeDef, unknown> = z
        .object({
            ContentType: z.string(),
            Faucet: shared.Faucet$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            oneOf: shared.TooEarly$.inboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                ContentType: "contentType",
                Faucet: "faucet",
                StatusCode: "statusCode",
                RawResponse: "rawResponse",
            });
        });

    export type Outbound = {
        ContentType: string;
        Faucet?: shared.Faucet$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
        oneOf?: shared.TooEarly$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ClaimFaucetResponse> = z
        .object({
            contentType: z.string(),
            faucet: shared.Faucet$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            oneOf: shared.TooEarly$.outboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                contentType: "ContentType",
                faucet: "Faucet",
                statusCode: "StatusCode",
                rawResponse: "RawResponse",
            });
        });
}
