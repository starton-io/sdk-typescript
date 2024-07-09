/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
    GasPriceInfo,
    GasPriceInfo$inboundSchema,
    GasPriceInfo$Outbound,
    GasPriceInfo$outboundSchema,
} from "./gaspriceinfo.js";
import * as z from "zod";

export type GasPrices = {
    /**
     * average gas price for network
     */
    average: GasPriceInfo;
    /**
     * fast gas price for network
     */
    fast: GasPriceInfo;
    /**
     * fastest gas price for network
     */
    fastest: GasPriceInfo;
    /**
     * low gas price for network
     */
    low: GasPriceInfo;
};

/** @internal */
export const GasPrices$inboundSchema: z.ZodType<GasPrices, z.ZodTypeDef, unknown> = z.object({
    average: GasPriceInfo$inboundSchema,
    fast: GasPriceInfo$inboundSchema,
    fastest: GasPriceInfo$inboundSchema,
    low: GasPriceInfo$inboundSchema,
});

/** @internal */
export type GasPrices$Outbound = {
    average: GasPriceInfo$Outbound;
    fast: GasPriceInfo$Outbound;
    fastest: GasPriceInfo$Outbound;
    low: GasPriceInfo$Outbound;
};

/** @internal */
export const GasPrices$outboundSchema: z.ZodType<GasPrices$Outbound, z.ZodTypeDef, GasPrices> =
    z.object({
        average: GasPriceInfo$outboundSchema,
        fast: GasPriceInfo$outboundSchema,
        fastest: GasPriceInfo$outboundSchema,
        low: GasPriceInfo$outboundSchema,
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GasPrices$ {
    /** @deprecated use `GasPrices$inboundSchema` instead. */
    export const inboundSchema = GasPrices$inboundSchema;
    /** @deprecated use `GasPrices$outboundSchema` instead. */
    export const outboundSchema = GasPrices$outboundSchema;
    /** @deprecated use `GasPrices$Outbound` instead. */
    export type Outbound = GasPrices$Outbound;
}
