/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

export type GetOneWatcherEventRequest = {
    /**
     * The unique identifier of the watcher event.
     */
    eventId: string;
    /**
     * The unique identifier of the watcher.
     */
    id: string;
};

export type GetOneWatcherEventResponse = {
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
    watcherEvent?: shared.WatcherEvent | undefined;
};

/** @internal */
export namespace GetOneWatcherEventRequest$ {
    export type Inbound = {
        eventId: string;
        id: string;
    };

    export const inboundSchema: z.ZodType<GetOneWatcherEventRequest, z.ZodTypeDef, Inbound> = z
        .object({
            eventId: z.string(),
            id: z.string(),
        })
        .transform((v) => {
            return {
                eventId: v.eventId,
                id: v.id,
            };
        });

    export type Outbound = {
        eventId: string;
        id: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetOneWatcherEventRequest> = z
        .object({
            eventId: z.string(),
            id: z.string(),
        })
        .transform((v) => {
            return {
                eventId: v.eventId,
                id: v.id,
            };
        });
}

/** @internal */
export namespace GetOneWatcherEventResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        WatcherEvent?: shared.WatcherEvent$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetOneWatcherEventResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            WatcherEvent: shared.WatcherEvent$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.WatcherEvent === undefined ? null : { watcherEvent: v.WatcherEvent }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        WatcherEvent?: shared.WatcherEvent$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetOneWatcherEventResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            watcherEvent: shared.WatcherEvent$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.watcherEvent === undefined ? null : { WatcherEvent: v.watcherEvent }),
            };
        });
}
