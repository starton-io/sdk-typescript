/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type GetAllGasPriceRequest = {
    /**
     * The blockchain network you are checking gas prices on.
     */
    network: string;
};

export type GetAllGasPriceResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    gasPrices?: shared.GasPrices | undefined;
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
export namespace GetAllGasPriceRequest$ {
    export const inboundSchema: z.ZodType<GetAllGasPriceRequest, z.ZodTypeDef, unknown> = z.object({
        network: z.string(),
    });

    export type Outbound = {
        network: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetAllGasPriceRequest> =
        z.object({
            network: z.string(),
        });
}

/** @internal */
export namespace GetAllGasPriceResponse$ {
    export const inboundSchema: z.ZodType<GetAllGasPriceResponse, z.ZodTypeDef, unknown> = z
        .object({
            ContentType: z.string(),
            GasPrices: shared.GasPrices$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return remap$(v, {
                ContentType: "contentType",
                GasPrices: "gasPrices",
                StatusCode: "statusCode",
                RawResponse: "rawResponse",
            });
        });

    export type Outbound = {
        ContentType: string;
        GasPrices?: shared.GasPrices$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetAllGasPriceResponse> = z
        .object({
            contentType: z.string(),
            gasPrices: shared.GasPrices$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return remap$(v, {
                contentType: "ContentType",
                gasPrices: "GasPrices",
                statusCode: "StatusCode",
                rawResponse: "RawResponse",
            });
        });
}
