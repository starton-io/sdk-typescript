/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

export type UpdateWalletRequest = {
    updateWalletDto: shared.UpdateWalletDto;
    /**
     * The address of the wallet to update.
     */
    address: string;
};

export type UpdateWalletResponse = {
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
    wallet?: shared.Wallet | undefined;
};

/** @internal */
export namespace UpdateWalletRequest$ {
    export type Inbound = {
        UpdateWalletDto: shared.UpdateWalletDto$.Inbound;
        address: string;
    };

    export const inboundSchema: z.ZodType<UpdateWalletRequest, z.ZodTypeDef, Inbound> = z
        .object({
            UpdateWalletDto: shared.UpdateWalletDto$.inboundSchema,
            address: z.string(),
        })
        .transform((v) => {
            return {
                updateWalletDto: v.UpdateWalletDto,
                address: v.address,
            };
        });

    export type Outbound = {
        UpdateWalletDto: shared.UpdateWalletDto$.Outbound;
        address: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateWalletRequest> = z
        .object({
            updateWalletDto: shared.UpdateWalletDto$.outboundSchema,
            address: z.string(),
        })
        .transform((v) => {
            return {
                UpdateWalletDto: v.updateWalletDto,
                address: v.address,
            };
        });
}

/** @internal */
export namespace UpdateWalletResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        Wallet?: shared.Wallet$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<UpdateWalletResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            Wallet: shared.Wallet$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.Wallet === undefined ? null : { wallet: v.Wallet }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        Wallet?: shared.Wallet$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateWalletResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            wallet: shared.Wallet$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.wallet === undefined ? null : { Wallet: v.wallet }),
            };
        });
}
