/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export enum Type {
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
    type?: Type | undefined;
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
export const Type$inboundSchema: z.ZodNativeEnum<typeof Type> = z.nativeEnum(Type);

/** @internal */
export const Type$outboundSchema: z.ZodNativeEnum<typeof Type> = Type$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Type$ {
    /** @deprecated use `Type$inboundSchema` instead. */
    export const inboundSchema = Type$inboundSchema;
    /** @deprecated use `Type$outboundSchema` instead. */
    export const outboundSchema = Type$outboundSchema;
}

/** @internal */
export const GetAllWatcherRequest$inboundSchema: z.ZodType<
    GetAllWatcherRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    address: z.string().optional(),
    confirmationsBlocks: z.number().optional(),
    limit: z.number().int().default(100),
    name: z.string().optional(),
    network: z.string().optional(),
    page: z.number().int().optional(),
    paused: z.boolean().optional(),
    type: Type$inboundSchema.optional(),
    webhookUrl: z.string().optional(),
});

/** @internal */
export type GetAllWatcherRequest$Outbound = {
    address?: string | undefined;
    confirmationsBlocks?: number | undefined;
    limit: number;
    name?: string | undefined;
    network?: string | undefined;
    page?: number | undefined;
    paused?: boolean | undefined;
    type?: string | undefined;
    webhookUrl?: string | undefined;
};

/** @internal */
export const GetAllWatcherRequest$outboundSchema: z.ZodType<
    GetAllWatcherRequest$Outbound,
    z.ZodTypeDef,
    GetAllWatcherRequest
> = z.object({
    address: z.string().optional(),
    confirmationsBlocks: z.number().optional(),
    limit: z.number().int().default(100),
    name: z.string().optional(),
    network: z.string().optional(),
    page: z.number().int().optional(),
    paused: z.boolean().optional(),
    type: Type$outboundSchema.optional(),
    webhookUrl: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAllWatcherRequest$ {
    /** @deprecated use `GetAllWatcherRequest$inboundSchema` instead. */
    export const inboundSchema = GetAllWatcherRequest$inboundSchema;
    /** @deprecated use `GetAllWatcherRequest$outboundSchema` instead. */
    export const outboundSchema = GetAllWatcherRequest$outboundSchema;
    /** @deprecated use `GetAllWatcherRequest$Outbound` instead. */
    export type Outbound = GetAllWatcherRequest$Outbound;
}

/** @internal */
export const GetAllWatcherWatcherPaginated$inboundSchema: z.ZodType<
    GetAllWatcherWatcherPaginated,
    z.ZodTypeDef,
    unknown
> = z.object({
    items: z.array(shared.Watcher$inboundSchema),
    meta: shared.PaginationData$inboundSchema,
});

/** @internal */
export type GetAllWatcherWatcherPaginated$Outbound = {
    items: Array<shared.Watcher$Outbound>;
    meta: shared.PaginationData$Outbound;
};

/** @internal */
export const GetAllWatcherWatcherPaginated$outboundSchema: z.ZodType<
    GetAllWatcherWatcherPaginated$Outbound,
    z.ZodTypeDef,
    GetAllWatcherWatcherPaginated
> = z.object({
    items: z.array(shared.Watcher$outboundSchema),
    meta: shared.PaginationData$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAllWatcherWatcherPaginated$ {
    /** @deprecated use `GetAllWatcherWatcherPaginated$inboundSchema` instead. */
    export const inboundSchema = GetAllWatcherWatcherPaginated$inboundSchema;
    /** @deprecated use `GetAllWatcherWatcherPaginated$outboundSchema` instead. */
    export const outboundSchema = GetAllWatcherWatcherPaginated$outboundSchema;
    /** @deprecated use `GetAllWatcherWatcherPaginated$Outbound` instead. */
    export type Outbound = GetAllWatcherWatcherPaginated$Outbound;
}

/** @internal */
export const GetAllWatcherResponse$inboundSchema: z.ZodType<
    GetAllWatcherResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ContentType: z.string(),
        StatusCode: z.number().int(),
        RawResponse: z.instanceof(Response),
        WatcherPaginated: z.lazy(() => GetAllWatcherWatcherPaginated$inboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            ContentType: "contentType",
            StatusCode: "statusCode",
            RawResponse: "rawResponse",
            WatcherPaginated: "watcherPaginated",
        });
    });

/** @internal */
export type GetAllWatcherResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    WatcherPaginated?: GetAllWatcherWatcherPaginated$Outbound | undefined;
};

/** @internal */
export const GetAllWatcherResponse$outboundSchema: z.ZodType<
    GetAllWatcherResponse$Outbound,
    z.ZodTypeDef,
    GetAllWatcherResponse
> = z
    .object({
        contentType: z.string(),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
        watcherPaginated: z.lazy(() => GetAllWatcherWatcherPaginated$outboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            contentType: "ContentType",
            statusCode: "StatusCode",
            rawResponse: "RawResponse",
            watcherPaginated: "WatcherPaginated",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAllWatcherResponse$ {
    /** @deprecated use `GetAllWatcherResponse$inboundSchema` instead. */
    export const inboundSchema = GetAllWatcherResponse$inboundSchema;
    /** @deprecated use `GetAllWatcherResponse$outboundSchema` instead. */
    export const outboundSchema = GetAllWatcherResponse$outboundSchema;
    /** @deprecated use `GetAllWatcherResponse$Outbound` instead. */
    export type Outbound = GetAllWatcherResponse$Outbound;
}
