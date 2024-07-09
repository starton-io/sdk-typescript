/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type CreatePinResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    pin?: shared.Pin | undefined;
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
export const CreatePinResponse$inboundSchema: z.ZodType<CreatePinResponse, z.ZodTypeDef, unknown> =
    z
        .object({
            ContentType: z.string(),
            Pin: shared.Pin$inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return remap$(v, {
                ContentType: "contentType",
                Pin: "pin",
                StatusCode: "statusCode",
                RawResponse: "rawResponse",
            });
        });

/** @internal */
export type CreatePinResponse$Outbound = {
    ContentType: string;
    Pin?: shared.Pin$Outbound | undefined;
    StatusCode: number;
    RawResponse: never;
};

/** @internal */
export const CreatePinResponse$outboundSchema: z.ZodType<
    CreatePinResponse$Outbound,
    z.ZodTypeDef,
    CreatePinResponse
> = z
    .object({
        contentType: z.string(),
        pin: shared.Pin$outboundSchema.optional(),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
    })
    .transform((v) => {
        return remap$(v, {
            contentType: "ContentType",
            pin: "Pin",
            statusCode: "StatusCode",
            rawResponse: "RawResponse",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreatePinResponse$ {
    /** @deprecated use `CreatePinResponse$inboundSchema` instead. */
    export const inboundSchema = CreatePinResponse$inboundSchema;
    /** @deprecated use `CreatePinResponse$outboundSchema` instead. */
    export const outboundSchema = CreatePinResponse$outboundSchema;
    /** @deprecated use `CreatePinResponse$Outbound` instead. */
    export type Outbound = CreatePinResponse$Outbound;
}
