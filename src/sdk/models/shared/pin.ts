/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
    DirectoryContent,
    DirectoryContent$inboundSchema,
    DirectoryContent$Outbound,
    DirectoryContent$outboundSchema,
} from "./directorycontent.js";
import * as z from "zod";

export type PinMetadata = {};

export enum Status {
    Queued = "queued",
    Pinning = "pinning",
    Pinned = "pinned",
    Failed = "failed",
    Deleted = "deleted",
}

export enum PinType {
    Directory = "directory",
    File = "file",
}

export type Pin = {
    cid?: string | null | undefined;
    createdAt?: Date | undefined;
    delegates?: Array<string> | null | undefined;
    directoryContent?: Array<DirectoryContent> | null | undefined;
    id: string;
    metadata?: PinMetadata | null | undefined;
    name?: string | null | undefined;
    origins?: Array<string> | null | undefined;
    projectId: string;
    size?: number | null | undefined;
    status: Status;
    type?: PinType | null | undefined;
    updatedAt?: Date | undefined;
};

/** @internal */
export const PinMetadata$inboundSchema: z.ZodType<PinMetadata, z.ZodTypeDef, unknown> = z.object(
    {}
);

/** @internal */
export type PinMetadata$Outbound = {};

/** @internal */
export const PinMetadata$outboundSchema: z.ZodType<
    PinMetadata$Outbound,
    z.ZodTypeDef,
    PinMetadata
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PinMetadata$ {
    /** @deprecated use `PinMetadata$inboundSchema` instead. */
    export const inboundSchema = PinMetadata$inboundSchema;
    /** @deprecated use `PinMetadata$outboundSchema` instead. */
    export const outboundSchema = PinMetadata$outboundSchema;
    /** @deprecated use `PinMetadata$Outbound` instead. */
    export type Outbound = PinMetadata$Outbound;
}

/** @internal */
export const Status$inboundSchema: z.ZodNativeEnum<typeof Status> = z.nativeEnum(Status);

/** @internal */
export const Status$outboundSchema: z.ZodNativeEnum<typeof Status> = Status$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Status$ {
    /** @deprecated use `Status$inboundSchema` instead. */
    export const inboundSchema = Status$inboundSchema;
    /** @deprecated use `Status$outboundSchema` instead. */
    export const outboundSchema = Status$outboundSchema;
}

/** @internal */
export const PinType$inboundSchema: z.ZodNativeEnum<typeof PinType> = z.nativeEnum(PinType);

/** @internal */
export const PinType$outboundSchema: z.ZodNativeEnum<typeof PinType> = PinType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PinType$ {
    /** @deprecated use `PinType$inboundSchema` instead. */
    export const inboundSchema = PinType$inboundSchema;
    /** @deprecated use `PinType$outboundSchema` instead. */
    export const outboundSchema = PinType$outboundSchema;
}

/** @internal */
export const Pin$inboundSchema: z.ZodType<Pin, z.ZodTypeDef, unknown> = z.object({
    cid: z.nullable(z.string()).optional(),
    createdAt: z
        .string()
        .datetime({ offset: true })
        .default("2024-05-02T09:33:57.821Z")
        .transform((v) => new Date(v)),
    delegates: z.nullable(z.array(z.string())).optional(),
    directoryContent: z.nullable(z.array(DirectoryContent$inboundSchema)).optional(),
    id: z.string(),
    metadata: z.nullable(z.lazy(() => PinMetadata$inboundSchema)).optional(),
    name: z.nullable(z.string()).optional(),
    origins: z.nullable(z.array(z.string())).optional(),
    projectId: z.string(),
    size: z.nullable(z.number()).optional(),
    status: Status$inboundSchema,
    type: z.nullable(PinType$inboundSchema).optional(),
    updatedAt: z
        .string()
        .datetime({ offset: true })
        .default("2024-05-02T09:33:57.821Z")
        .transform((v) => new Date(v)),
});

/** @internal */
export type Pin$Outbound = {
    cid?: string | null | undefined;
    createdAt: string;
    delegates?: Array<string> | null | undefined;
    directoryContent?: Array<DirectoryContent$Outbound> | null | undefined;
    id: string;
    metadata?: PinMetadata$Outbound | null | undefined;
    name?: string | null | undefined;
    origins?: Array<string> | null | undefined;
    projectId: string;
    size?: number | null | undefined;
    status: string;
    type?: string | null | undefined;
    updatedAt: string;
};

/** @internal */
export const Pin$outboundSchema: z.ZodType<Pin$Outbound, z.ZodTypeDef, Pin> = z.object({
    cid: z.nullable(z.string()).optional(),
    createdAt: z
        .date()
        .default(() => new Date("2024-05-02T09:33:57.821Z"))
        .transform((v) => v.toISOString()),
    delegates: z.nullable(z.array(z.string())).optional(),
    directoryContent: z.nullable(z.array(DirectoryContent$outboundSchema)).optional(),
    id: z.string(),
    metadata: z.nullable(z.lazy(() => PinMetadata$outboundSchema)).optional(),
    name: z.nullable(z.string()).optional(),
    origins: z.nullable(z.array(z.string())).optional(),
    projectId: z.string(),
    size: z.nullable(z.number()).optional(),
    status: Status$outboundSchema,
    type: z.nullable(PinType$outboundSchema).optional(),
    updatedAt: z
        .date()
        .default(() => new Date("2024-05-02T09:33:57.821Z"))
        .transform((v) => v.toISOString()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Pin$ {
    /** @deprecated use `Pin$inboundSchema` instead. */
    export const inboundSchema = Pin$inboundSchema;
    /** @deprecated use `Pin$outboundSchema` instead. */
    export const outboundSchema = Pin$outboundSchema;
    /** @deprecated use `Pin$Outbound` instead. */
    export type Outbound = Pin$Outbound;
}
