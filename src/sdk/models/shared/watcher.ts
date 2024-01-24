/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type WatcherCustomEventAbi = {};

export type WatcherCustomFilters = {};

export type WatcherMetadata = {};

export enum TriggerType {
    Block = "BLOCK",
    Transaction = "TRANSACTION",
    Event = "EVENT",
    GasPrice = "GAS_PRICE",
}

export enum WatcherType {
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

export type Watcher = {
    address: string;
    confirmationsBlocks: number;
    createdAt?: Date | undefined;
    customEventAbi?: Array<WatcherCustomEventAbi> | null | undefined;
    customFilters?: WatcherCustomFilters | undefined;
    description?: string | null | undefined;
    id: string;
    metadata?: WatcherMetadata | null | undefined;
    name?: string | null | undefined;
    network: string;
    paused: boolean;
    pausedReason?: string | null | undefined;
    projectId: string;
    triggerType: TriggerType;
    type: WatcherType;
    updatedAt?: Date | undefined;
    webhookUrl: string;
};

/** @internal */
export namespace WatcherCustomEventAbi$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<WatcherCustomEventAbi, z.ZodTypeDef, Inbound> = z.object(
        {}
    );

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, WatcherCustomEventAbi> =
        z.object({});
}

/** @internal */
export namespace WatcherCustomFilters$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<WatcherCustomFilters, z.ZodTypeDef, Inbound> = z.object(
        {}
    );

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, WatcherCustomFilters> = z.object(
        {}
    );
}

/** @internal */
export namespace WatcherMetadata$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<WatcherMetadata, z.ZodTypeDef, Inbound> = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, WatcherMetadata> = z.object({});
}

/** @internal */
export const TriggerType$ = z.nativeEnum(TriggerType);

/** @internal */
export const WatcherType$ = z.nativeEnum(WatcherType);

/** @internal */
export namespace Watcher$ {
    export type Inbound = {
        address: string;
        confirmationsBlocks: number;
        createdAt?: string | undefined;
        customEventAbi?: Array<WatcherCustomEventAbi$.Inbound> | null | undefined;
        customFilters?: WatcherCustomFilters$.Inbound | undefined;
        description?: string | null | undefined;
        id: string;
        metadata?: WatcherMetadata$.Inbound | null | undefined;
        name?: string | null | undefined;
        network: string;
        paused: boolean;
        pausedReason?: string | null | undefined;
        projectId: string;
        triggerType: TriggerType;
        type: WatcherType;
        updatedAt?: string | undefined;
        webhookUrl: string;
    };

    export const inboundSchema: z.ZodType<Watcher, z.ZodTypeDef, Inbound> = z
        .object({
            address: z.string(),
            confirmationsBlocks: z.number(),
            createdAt: z
                .string()
                .datetime({ offset: true })
                .default("2024-01-24T15:42:43.916Z")
                .transform((v) => new Date(v)),
            customEventAbi: z
                .nullable(z.array(z.lazy(() => WatcherCustomEventAbi$.inboundSchema)))
                .optional(),
            customFilters: z.lazy(() => WatcherCustomFilters$.inboundSchema).optional(),
            description: z.nullable(z.string()).optional(),
            id: z.string(),
            metadata: z.nullable(z.lazy(() => WatcherMetadata$.inboundSchema)).optional(),
            name: z.nullable(z.string()).optional(),
            network: z.string(),
            paused: z.boolean(),
            pausedReason: z.nullable(z.string()).optional(),
            projectId: z.string(),
            triggerType: TriggerType$,
            type: WatcherType$,
            updatedAt: z
                .string()
                .datetime({ offset: true })
                .default("2024-01-24T15:42:43.916Z")
                .transform((v) => new Date(v)),
            webhookUrl: z.string(),
        })
        .transform((v) => {
            return {
                address: v.address,
                confirmationsBlocks: v.confirmationsBlocks,
                ...(v.createdAt === undefined ? null : { createdAt: v.createdAt }),
                ...(v.customEventAbi === undefined ? null : { customEventAbi: v.customEventAbi }),
                ...(v.customFilters === undefined ? null : { customFilters: v.customFilters }),
                ...(v.description === undefined ? null : { description: v.description }),
                id: v.id,
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                ...(v.name === undefined ? null : { name: v.name }),
                network: v.network,
                paused: v.paused,
                ...(v.pausedReason === undefined ? null : { pausedReason: v.pausedReason }),
                projectId: v.projectId,
                triggerType: v.triggerType,
                type: v.type,
                ...(v.updatedAt === undefined ? null : { updatedAt: v.updatedAt }),
                webhookUrl: v.webhookUrl,
            };
        });

    export type Outbound = {
        address: string;
        confirmationsBlocks: number;
        createdAt: string;
        customEventAbi?: Array<WatcherCustomEventAbi$.Outbound> | null | undefined;
        customFilters?: WatcherCustomFilters$.Outbound | undefined;
        description?: string | null | undefined;
        id: string;
        metadata?: WatcherMetadata$.Outbound | null | undefined;
        name?: string | null | undefined;
        network: string;
        paused: boolean;
        pausedReason?: string | null | undefined;
        projectId: string;
        triggerType: TriggerType;
        type: WatcherType;
        updatedAt: string;
        webhookUrl: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Watcher> = z
        .object({
            address: z.string(),
            confirmationsBlocks: z.number(),
            createdAt: z
                .date()
                .default(() => new Date("2024-01-24T15:42:43.916Z"))
                .transform((v) => v.toISOString()),
            customEventAbi: z
                .nullable(z.array(z.lazy(() => WatcherCustomEventAbi$.outboundSchema)))
                .optional(),
            customFilters: z.lazy(() => WatcherCustomFilters$.outboundSchema).optional(),
            description: z.nullable(z.string()).optional(),
            id: z.string(),
            metadata: z.nullable(z.lazy(() => WatcherMetadata$.outboundSchema)).optional(),
            name: z.nullable(z.string()).optional(),
            network: z.string(),
            paused: z.boolean(),
            pausedReason: z.nullable(z.string()).optional(),
            projectId: z.string(),
            triggerType: TriggerType$,
            type: WatcherType$,
            updatedAt: z
                .date()
                .default(() => new Date("2024-01-24T15:42:43.916Z"))
                .transform((v) => v.toISOString()),
            webhookUrl: z.string(),
        })
        .transform((v) => {
            return {
                address: v.address,
                confirmationsBlocks: v.confirmationsBlocks,
                createdAt: v.createdAt,
                ...(v.customEventAbi === undefined ? null : { customEventAbi: v.customEventAbi }),
                ...(v.customFilters === undefined ? null : { customFilters: v.customFilters }),
                ...(v.description === undefined ? null : { description: v.description }),
                id: v.id,
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                ...(v.name === undefined ? null : { name: v.name }),
                network: v.network,
                paused: v.paused,
                ...(v.pausedReason === undefined ? null : { pausedReason: v.pausedReason }),
                projectId: v.projectId,
                triggerType: v.triggerType,
                type: v.type,
                updatedAt: v.updatedAt,
                webhookUrl: v.webhookUrl,
            };
        });
}
