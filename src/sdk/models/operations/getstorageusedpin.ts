/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type GetStorageUsedPinResponse = {
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
    storageUsed?: shared.StorageUsed | undefined;
};

/** @internal */
export const GetStorageUsedPinResponse$inboundSchema: z.ZodType<
    GetStorageUsedPinResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ContentType: z.string(),
        StatusCode: z.number().int(),
        RawResponse: z.instanceof(Response),
        StorageUsed: shared.StorageUsed$inboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            ContentType: "contentType",
            StatusCode: "statusCode",
            RawResponse: "rawResponse",
            StorageUsed: "storageUsed",
        });
    });

/** @internal */
export type GetStorageUsedPinResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    StorageUsed?: shared.StorageUsed$Outbound | undefined;
};

/** @internal */
export const GetStorageUsedPinResponse$outboundSchema: z.ZodType<
    GetStorageUsedPinResponse$Outbound,
    z.ZodTypeDef,
    GetStorageUsedPinResponse
> = z
    .object({
        contentType: z.string(),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
        storageUsed: shared.StorageUsed$outboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            contentType: "ContentType",
            statusCode: "StatusCode",
            rawResponse: "RawResponse",
            storageUsed: "StorageUsed",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetStorageUsedPinResponse$ {
    /** @deprecated use `GetStorageUsedPinResponse$inboundSchema` instead. */
    export const inboundSchema = GetStorageUsedPinResponse$inboundSchema;
    /** @deprecated use `GetStorageUsedPinResponse$outboundSchema` instead. */
    export const outboundSchema = GetStorageUsedPinResponse$outboundSchema;
    /** @deprecated use `GetStorageUsedPinResponse$Outbound` instead. */
    export type Outbound = GetStorageUsedPinResponse$Outbound;
}
