/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type ImportProviderKeyWalletResponse = {
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
export const ImportProviderKeyWalletResponse$inboundSchema: z.ZodType<
    ImportProviderKeyWalletResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ContentType: z.string(),
        StatusCode: z.number().int(),
        RawResponse: z.instanceof(Response),
        Wallet: shared.Wallet$inboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            ContentType: "contentType",
            StatusCode: "statusCode",
            RawResponse: "rawResponse",
            Wallet: "wallet",
        });
    });

/** @internal */
export type ImportProviderKeyWalletResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    Wallet?: shared.Wallet$Outbound | undefined;
};

/** @internal */
export const ImportProviderKeyWalletResponse$outboundSchema: z.ZodType<
    ImportProviderKeyWalletResponse$Outbound,
    z.ZodTypeDef,
    ImportProviderKeyWalletResponse
> = z
    .object({
        contentType: z.string(),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
        wallet: shared.Wallet$outboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            contentType: "ContentType",
            statusCode: "StatusCode",
            rawResponse: "RawResponse",
            wallet: "Wallet",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ImportProviderKeyWalletResponse$ {
    /** @deprecated use `ImportProviderKeyWalletResponse$inboundSchema` instead. */
    export const inboundSchema = ImportProviderKeyWalletResponse$inboundSchema;
    /** @deprecated use `ImportProviderKeyWalletResponse$outboundSchema` instead. */
    export const outboundSchema = ImportProviderKeyWalletResponse$outboundSchema;
    /** @deprecated use `ImportProviderKeyWalletResponse$Outbound` instead. */
    export type Outbound = ImportProviderKeyWalletResponse$Outbound;
}
