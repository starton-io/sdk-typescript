/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

export enum TypeT {
    MinedTransaction = "MINED_TRANSACTION",
    AddressActivity = "ADDRESS_ACTIVITY",
    AddressReceivedNativeCurrency = "ADDRESS_RECEIVED_NATIVE_CURRENCY",
    AddressSentNativeCurrency = "ADDRESS_SENT_NATIVE_CURRENCY",
    EventTransfer = "EVENT_TRANSFER",
    Erc721EventTransfer = "ERC721_EVENT_TRANSFER",
    Erc1155EventTransferSingle = "ERC1155_EVENT_TRANSFER_SINGLE",
    Erc1155EventTransferBatch = "ERC1155_EVENT_TRANSFER_BATCH",
    EventMint = "EVENT_MINT",
    EventApproval = "EVENT_APPROVAL",
    EventCustom = "EVENT_CUSTOM",
}

export type GetAllWatcherRequest = {
    address?: string | undefined;
    confirmationsBlocks?: number | undefined;
    /**
     * Number of entities returned on each page. By default this number is set to 100.
     */
    limit?: number | undefined;
    name?: string | undefined;
    network?: string | undefined;
    /**
     * Number of returned page. By default the returned page is the first.
     */
    page?: number | undefined;
    paused?: boolean | undefined;
    type?: TypeT | undefined;
    webhookUrl?: string | undefined;
};

export type GetAllWatcherWatcherPaginated = {
    items: Array<shared.Watcher>;
    meta: shared.PaginationData;
};

export type GetAllWatcherResponse = {
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
    watcherPaginated?: GetAllWatcherWatcherPaginated | undefined;
};

/** @internal */
export const TypeT$ = z.nativeEnum(TypeT);

/** @internal */
export namespace GetAllWatcherRequest$ {
    export type Inbound = {
        address?: string | undefined;
        confirmationsBlocks?: number | undefined;
        limit?: number | undefined;
        name?: string | undefined;
        network?: string | undefined;
        page?: number | undefined;
        paused?: boolean | undefined;
        type?: TypeT | undefined;
        webhookUrl?: string | undefined;
    };

    export const inboundSchema: z.ZodType<GetAllWatcherRequest, z.ZodTypeDef, Inbound> = z
        .object({
            address: z.string().optional(),
            confirmationsBlocks: z.number().optional(),
            limit: z.number().int().optional(),
            name: z.string().optional(),
            network: z.string().optional(),
            page: z.number().int().optional(),
            paused: z.boolean().optional(),
            type: TypeT$.optional(),
            webhookUrl: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.address === undefined ? null : { address: v.address }),
                ...(v.confirmationsBlocks === undefined
                    ? null
                    : { confirmationsBlocks: v.confirmationsBlocks }),
                ...(v.limit === undefined ? null : { limit: v.limit }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.network === undefined ? null : { network: v.network }),
                ...(v.page === undefined ? null : { page: v.page }),
                ...(v.paused === undefined ? null : { paused: v.paused }),
                ...(v.type === undefined ? null : { type: v.type }),
                ...(v.webhookUrl === undefined ? null : { webhookUrl: v.webhookUrl }),
            };
        });

    export type Outbound = {
        address?: string | undefined;
        confirmationsBlocks?: number | undefined;
        limit?: number | undefined;
        name?: string | undefined;
        network?: string | undefined;
        page?: number | undefined;
        paused?: boolean | undefined;
        type?: TypeT | undefined;
        webhookUrl?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetAllWatcherRequest> = z
        .object({
            address: z.string().optional(),
            confirmationsBlocks: z.number().optional(),
            limit: z.number().int().optional(),
            name: z.string().optional(),
            network: z.string().optional(),
            page: z.number().int().optional(),
            paused: z.boolean().optional(),
            type: TypeT$.optional(),
            webhookUrl: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.address === undefined ? null : { address: v.address }),
                ...(v.confirmationsBlocks === undefined
                    ? null
                    : { confirmationsBlocks: v.confirmationsBlocks }),
                ...(v.limit === undefined ? null : { limit: v.limit }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.network === undefined ? null : { network: v.network }),
                ...(v.page === undefined ? null : { page: v.page }),
                ...(v.paused === undefined ? null : { paused: v.paused }),
                ...(v.type === undefined ? null : { type: v.type }),
                ...(v.webhookUrl === undefined ? null : { webhookUrl: v.webhookUrl }),
            };
        });
}

/** @internal */
export namespace GetAllWatcherWatcherPaginated$ {
    export type Inbound = {
        items: Array<shared.Watcher$.Inbound>;
        meta: shared.PaginationData$.Inbound;
    };

    export const inboundSchema: z.ZodType<GetAllWatcherWatcherPaginated, z.ZodTypeDef, Inbound> = z
        .object({
            items: z.array(shared.Watcher$.inboundSchema),
            meta: shared.PaginationData$.inboundSchema,
        })
        .transform((v) => {
            return {
                items: v.items,
                meta: v.meta,
            };
        });

    export type Outbound = {
        items: Array<shared.Watcher$.Outbound>;
        meta: shared.PaginationData$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetAllWatcherWatcherPaginated> =
        z
            .object({
                items: z.array(shared.Watcher$.outboundSchema),
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
export namespace GetAllWatcherResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        WatcherPaginated?: GetAllWatcherWatcherPaginated$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetAllWatcherResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            WatcherPaginated: z.lazy(() => GetAllWatcherWatcherPaginated$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.WatcherPaginated === undefined
                    ? null
                    : { watcherPaginated: v.WatcherPaginated }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        WatcherPaginated?: GetAllWatcherWatcherPaginated$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetAllWatcherResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            watcherPaginated: z
                .lazy(() => GetAllWatcherWatcherPaginated$.outboundSchema)
                .optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.watcherPaginated === undefined
                    ? null
                    : { WatcherPaginated: v.watcherPaginated }),
            };
        });
}
