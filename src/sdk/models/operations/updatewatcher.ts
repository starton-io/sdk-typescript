/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type UpdateWatcherRequest = {
    /**
     * Object containing the fields to update on the watcher.
     */
    updateWatcherDto: shared.UpdateWatcherDto;
    /**
     * The unique identifier of the watcher to update.
     */
    id: string;
};

export type UpdateWatcherResponse = {
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
    watcher?: shared.Watcher | undefined;
};

/** @internal */
export namespace UpdateWatcherRequest$ {
    export const inboundSchema: z.ZodType<UpdateWatcherRequest, z.ZodTypeDef, unknown> = z
        .object({
            UpdateWatcherDto: shared.UpdateWatcherDto$.inboundSchema,
            id: z.string(),
        })
        .transform((v) => {
            return remap$(v, {
                UpdateWatcherDto: "updateWatcherDto",
            });
        });

    export type Outbound = {
        UpdateWatcherDto: shared.UpdateWatcherDto$.Outbound;
        id: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateWatcherRequest> = z
        .object({
            updateWatcherDto: shared.UpdateWatcherDto$.outboundSchema,
            id: z.string(),
        })
        .transform((v) => {
            return remap$(v, {
                updateWatcherDto: "UpdateWatcherDto",
            });
        });
}

/** @internal */
export namespace UpdateWatcherResponse$ {
    export const inboundSchema: z.ZodType<UpdateWatcherResponse, z.ZodTypeDef, unknown> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            Watcher: shared.Watcher$.inboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                ContentType: "contentType",
                StatusCode: "statusCode",
                RawResponse: "rawResponse",
                Watcher: "watcher",
            });
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        Watcher?: shared.Watcher$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateWatcherResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            watcher: shared.Watcher$.outboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                contentType: "ContentType",
                statusCode: "StatusCode",
                rawResponse: "RawResponse",
                watcher: "Watcher",
            });
        });
}
