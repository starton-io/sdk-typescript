/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives";
import * as shared from "../shared";
import * as z from "zod";

export type UpdatePinRequest = {
    /**
     * An object containing the fields you wish to update for the specified file. Can include 'name' and 'metadata'.
     */
    updatePinDto: shared.UpdatePinDto;
    /**
     * The unique identifier for the file you wish to update. This ID is assigned upon the initial upload of the file to IPFS.
     */
    id: string;
};

export type UpdatePinResponse = {
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
export namespace UpdatePinRequest$ {
    export const inboundSchema: z.ZodType<UpdatePinRequest, z.ZodTypeDef, unknown> = z
        .object({
            UpdatePinDto: shared.UpdatePinDto$.inboundSchema,
            id: z.string(),
        })
        .transform((v) => {
            return remap$(v, {
                UpdatePinDto: "updatePinDto",
            });
        });

    export type Outbound = {
        UpdatePinDto: shared.UpdatePinDto$.Outbound;
        id: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdatePinRequest> = z
        .object({
            updatePinDto: shared.UpdatePinDto$.outboundSchema,
            id: z.string(),
        })
        .transform((v) => {
            return remap$(v, {
                updatePinDto: "UpdatePinDto",
            });
        });
}

/** @internal */
export namespace UpdatePinResponse$ {
    export const inboundSchema: z.ZodType<UpdatePinResponse, z.ZodTypeDef, unknown> = z
        .object({
            ContentType: z.string(),
            Pin: shared.Pin$.inboundSchema.optional(),
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

    export type Outbound = {
        ContentType: string;
        Pin?: shared.Pin$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdatePinResponse> = z
        .object({
            contentType: z.string(),
            pin: shared.Pin$.outboundSchema.optional(),
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
}
