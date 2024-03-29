/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
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
    export type Inbound = {
        network: string;
    };

    export const inboundSchema: z.ZodType<GetAllGasPriceRequest, z.ZodTypeDef, Inbound> = z
        .object({
            network: z.string(),
        })
        .transform((v) => {
            return {
                network: v.network,
            };
        });

    export type Outbound = {
        network: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetAllGasPriceRequest> = z
        .object({
            network: z.string(),
        })
        .transform((v) => {
            return {
                network: v.network,
            };
        });
}

/** @internal */
export namespace GetAllGasPriceResponse$ {
    export type Inbound = {
        ContentType: string;
        GasPrices?: shared.GasPrices$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<GetAllGasPriceResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            GasPrices: shared.GasPrices$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.GasPrices === undefined ? null : { gasPrices: v.GasPrices }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
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
            return {
                ContentType: v.contentType,
                ...(v.gasPrices === undefined ? null : { GasPrices: v.gasPrices }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
