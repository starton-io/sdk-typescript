/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import * as z from "zod";

export type GetAllWatcherEventRequest = {
    /**
     * The unique identifier of the watcher from which you'll retrieve events.
     */
    id: string;
    /**
     * Number of entities returned on each page. By default this number is set to 100.
     */
    limit?: number | undefined;
    /**
     * Number of returned page. By default the returned page is the first.
     */
    page?: number | undefined;
};

export type GetAllWatcherEventWatcherEventPaginated = {
    items: Array<shared.WatcherEvent>;
    meta: shared.PaginationData;
};

export type GetAllWatcherEventResponse = {
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
    watcherEventPaginated?: GetAllWatcherEventWatcherEventPaginated | undefined;
};

/** @internal */
export namespace GetAllWatcherEventRequest$ {
    export type Inbound = {
        id: string;
        limit?: number | undefined;
        page?: number | undefined;
    };

    export const inboundSchema: z.ZodType<GetAllWatcherEventRequest, z.ZodTypeDef, Inbound> = z
        .object({
            id: z.string(),
            limit: z.number().int().optional(),
            page: z.number().int().optional(),
        })
        .transform((v) => {
            return {
                id: v.id,
                ...(v.limit === undefined ? null : { limit: v.limit }),
                ...(v.page === undefined ? null : { page: v.page }),
            };
        });

    export type Outbound = {
        id: string;
        limit?: number | undefined;
        page?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetAllWatcherEventRequest> = z
        .object({
            id: z.string(),
            limit: z.number().int().optional(),
            page: z.number().int().optional(),
        })
        .transform((v) => {
            return {
                id: v.id,
                ...(v.limit === undefined ? null : { limit: v.limit }),
                ...(v.page === undefined ? null : { page: v.page }),
            };
        });
}

/** @internal */
export namespace GetAllWatcherEventWatcherEventPaginated$ {
    export type Inbound = {
        items: Array<shared.WatcherEvent$.Inbound>;
        meta: shared.PaginationData$.Inbound;
    };

    export const inboundSchema: z.ZodType<
        GetAllWatcherEventWatcherEventPaginated,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            items: z.array(shared.WatcherEvent$.inboundSchema),
            meta: shared.PaginationData$.inboundSchema,
        })
        .transform((v) => {
            return {
                items: v.items,
                meta: v.meta,
            };
        });

    export type Outbound = {
        items: Array<shared.WatcherEvent$.Outbound>;
        meta: shared.PaginationData$.Outbound;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetAllWatcherEventWatcherEventPaginated
    > = z
        .object({
            items: z.array(shared.WatcherEvent$.outboundSchema),
            meta: shared.PaginationData$.outboundSchema,
        })
        .transform((v) => {
            return {
                items: v.items,
                meta: v.meta,
            };
        });
}

/** @internal */
export namespace GetAllWatcherEventResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        WatcherEventPaginated?: GetAllWatcherEventWatcherEventPaginated$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetAllWatcherEventResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            WatcherEventPaginated: z
                .lazy(() => GetAllWatcherEventWatcherEventPaginated$.inboundSchema)
                .optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.WatcherEventPaginated === undefined
                    ? null
                    : { watcherEventPaginated: v.WatcherEventPaginated }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        WatcherEventPaginated?: GetAllWatcherEventWatcherEventPaginated$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetAllWatcherEventResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            watcherEventPaginated: z
                .lazy(() => GetAllWatcherEventWatcherEventPaginated$.outboundSchema)
                .optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.watcherEventPaginated === undefined
                    ? null
                    : { WatcherEventPaginated: v.watcherEventPaginated }),
            };
        });
}
