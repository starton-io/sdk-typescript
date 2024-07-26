/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
 */

import * as z from "zod";

export type PaginationData = {
    currentPage: number;
    itemCount: number;
    itemsPerPage: number;
    totalItems?: number | undefined;
    totalPages?: number | undefined;
};

/** @internal */
export const PaginationData$inboundSchema: z.ZodType<PaginationData, z.ZodTypeDef, unknown> =
    z.object({
        currentPage: z.number(),
        itemCount: z.number(),
        itemsPerPage: z.number(),
        totalItems: z.number().optional(),
        totalPages: z.number().optional(),
    });

/** @internal */
export type PaginationData$Outbound = {
    currentPage: number;
    itemCount: number;
    itemsPerPage: number;
    totalItems?: number | undefined;
    totalPages?: number | undefined;
};

/** @internal */
export const PaginationData$outboundSchema: z.ZodType<
    PaginationData$Outbound,
    z.ZodTypeDef,
    PaginationData
> = z.object({
    currentPage: z.number(),
    itemCount: z.number(),
    itemsPerPage: z.number(),
    totalItems: z.number().optional(),
    totalPages: z.number().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PaginationData$ {
    /** @deprecated use `PaginationData$inboundSchema` instead. */
    export const inboundSchema = PaginationData$inboundSchema;
    /** @deprecated use `PaginationData$outboundSchema` instead. */
    export const outboundSchema = PaginationData$outboundSchema;
    /** @deprecated use `PaginationData$Outbound` instead. */
    export type Outbound = PaginationData$Outbound;
}
