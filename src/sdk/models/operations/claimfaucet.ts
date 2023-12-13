/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

export type ClaimFaucetRequest = {
    requireFaucetDto: shared.RequireFaucetDto;
    /**
     * EVM starton supported network.
     */
    network: string;
};

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
    oneOf?: any | undefined;
};

/** @internal */
export namespace ClaimFaucetRequest$ {
    export type Inbound = {
        RequireFaucetDto: shared.RequireFaucetDto$.Inbound;
        network: string;
    };

    export const inboundSchema: z.ZodType<ClaimFaucetRequest, z.ZodTypeDef, Inbound> = z
        .object({
            RequireFaucetDto: shared.RequireFaucetDto$.inboundSchema,
            network: z.string(),
        })
        .transform((v) => {
            return {
                requireFaucetDto: v.RequireFaucetDto,
                network: v.network,
            };
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
            return {
                RequireFaucetDto: v.requireFaucetDto,
                network: v.network,
            };
        });
}

/** @internal */
export namespace ClaimFaucetResponse$ {
    export type Inbound = {
        ContentType: string;
        Faucet?: shared.Faucet$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
        oneOf?: any | undefined;
    };

    export const inboundSchema: z.ZodType<ClaimFaucetResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            Faucet: shared.Faucet$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            oneOf: z.any().optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.Faucet === undefined ? null : { faucet: v.Faucet }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.oneOf === undefined ? null : { oneOf: v.oneOf }),
            };
        });

    export type Outbound = {
        ContentType: string;
        Faucet?: shared.Faucet$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
        oneOf?: any | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ClaimFaucetResponse> = z
        .object({
            contentType: z.string(),
            faucet: shared.Faucet$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            oneOf: z.any().optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.faucet === undefined ? null : { Faucet: v.faucet }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.oneOf === undefined ? null : { oneOf: v.oneOf }),
            };
        });
}
