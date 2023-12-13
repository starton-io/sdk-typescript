/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

export type GetOneWatcherRequest = {
    /**
     * The unique identifier of the watcher to retrieve.
     */
    id: string;
};

export type GetOneWatcherResponse = {
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
export namespace GetOneWatcherRequest$ {
    export type Inbound = {
        id: string;
    };

    export const inboundSchema: z.ZodType<GetOneWatcherRequest, z.ZodTypeDef, Inbound> = z
        .object({
            id: z.string(),
        })
        .transform((v) => {
            return {
                id: v.id,
            };
        });

    export type Outbound = {
        id: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetOneWatcherRequest> = z
        .object({
            id: z.string(),
        })
        .transform((v) => {
            return {
                id: v.id,
            };
        });
}

/** @internal */
export namespace GetOneWatcherResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        Watcher?: shared.Watcher$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetOneWatcherResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            Watcher: shared.Watcher$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.Watcher === undefined ? null : { watcher: v.Watcher }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        Watcher?: shared.Watcher$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetOneWatcherResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            watcher: shared.Watcher$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.watcher === undefined ? null : { Watcher: v.watcher }),
            };
        });
}
