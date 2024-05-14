/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../shared";
import * as z from "zod";

export type GetBalanceAddressRequest = {
    /**
     * Your address.
     */
    address: string;
    /**
     * The blockchain network you are checking data on.
     */
    network: string;
};

export type GetBalanceAddressResponse = {
    addressNativeBalanceResponse?: shared.AddressNativeBalanceResponse | undefined;
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
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
export namespace GetBalanceAddressRequest$ {
    export const inboundSchema: z.ZodType<GetBalanceAddressRequest, z.ZodTypeDef, unknown> = z
        .object({
            address: z.string(),
            network: z.string(),
        })
        .transform((v) => {
            return {
                address: v.address,
                network: v.network,
            };
        });

    export type Outbound = {
        address: string;
        network: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetBalanceAddressRequest> = z
        .object({
            address: z.string(),
            network: z.string(),
        })
        .transform((v) => {
            return {
                address: v.address,
                network: v.network,
            };
        });
}

/** @internal */
export namespace GetBalanceAddressResponse$ {
    export const inboundSchema: z.ZodType<GetBalanceAddressResponse, z.ZodTypeDef, unknown> = z
        .object({
            AddressNativeBalanceResponse:
                shared.AddressNativeBalanceResponse$.inboundSchema.optional(),
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                ...(v.AddressNativeBalanceResponse === undefined
                    ? null
                    : { addressNativeBalanceResponse: v.AddressNativeBalanceResponse }),
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        AddressNativeBalanceResponse?: shared.AddressNativeBalanceResponse$.Outbound | undefined;
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetBalanceAddressResponse> = z
        .object({
            addressNativeBalanceResponse:
                shared.AddressNativeBalanceResponse$.outboundSchema.optional(),
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ...(v.addressNativeBalanceResponse === undefined
                    ? null
                    : { AddressNativeBalanceResponse: v.addressNativeBalanceResponse }),
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
