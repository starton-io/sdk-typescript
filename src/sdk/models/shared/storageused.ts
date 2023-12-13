/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type StorageUsed = {
    currentStorageUsed: number;
    freeSpaceRemaining: number;
    maxAllowed: number;
};

/** @internal */
export namespace StorageUsed$ {
    export type Inbound = {
        currentStorageUsed: number;
        freeSpaceRemaining: number;
        maxAllowed: number;
    };

    export const inboundSchema: z.ZodType<StorageUsed, z.ZodTypeDef, Inbound> = z
        .object({
            currentStorageUsed: z.number(),
            freeSpaceRemaining: z.number(),
            maxAllowed: z.number(),
        })
        .transform((v) => {
            return {
                currentStorageUsed: v.currentStorageUsed,
                freeSpaceRemaining: v.freeSpaceRemaining,
                maxAllowed: v.maxAllowed,
            };
        });

    export type Outbound = {
        currentStorageUsed: number;
        freeSpaceRemaining: number;
        maxAllowed: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, StorageUsed> = z
        .object({
            currentStorageUsed: z.number(),
            freeSpaceRemaining: z.number(),
            maxAllowed: z.number(),
        })
        .transform((v) => {
            return {
                currentStorageUsed: v.currentStorageUsed,
                freeSpaceRemaining: v.freeSpaceRemaining,
                maxAllowed: v.maxAllowed,
            };
        });
}
