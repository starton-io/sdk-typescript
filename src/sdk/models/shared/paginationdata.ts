/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
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
export namespace PaginationData$ {
    export const inboundSchema: z.ZodType<PaginationData, z.ZodTypeDef, unknown> = z
        .object({
            currentPage: z.number(),
            itemCount: z.number(),
            itemsPerPage: z.number(),
            totalItems: z.number().optional(),
            totalPages: z.number().optional(),
        })
        .transform((v) => {
            return {
                currentPage: v.currentPage,
                itemCount: v.itemCount,
                itemsPerPage: v.itemsPerPage,
                ...(v.totalItems === undefined ? null : { totalItems: v.totalItems }),
                ...(v.totalPages === undefined ? null : { totalPages: v.totalPages }),
            };
        });

    export type Outbound = {
        currentPage: number;
        itemCount: number;
        itemsPerPage: number;
        totalItems?: number | undefined;
        totalPages?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PaginationData> = z
        .object({
            currentPage: z.number(),
            itemCount: z.number(),
            itemsPerPage: z.number(),
            totalItems: z.number().optional(),
            totalPages: z.number().optional(),
        })
        .transform((v) => {
            return {
                currentPage: v.currentPage,
                itemCount: v.itemCount,
                itemsPerPage: v.itemsPerPage,
                ...(v.totalItems === undefined ? null : { totalItems: v.totalItems }),
                ...(v.totalPages === undefined ? null : { totalPages: v.totalPages }),
            };
        });
}
