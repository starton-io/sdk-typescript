/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type GasPriceRecommendationDto = {
    defaultRelayerUnstuck: string;
    lowest: string;
    max: string;
};

/** @internal */
export namespace GasPriceRecommendationDto$ {
    export const inboundSchema: z.ZodType<GasPriceRecommendationDto, z.ZodTypeDef, unknown> = z
        .object({
            defaultRelayerUnstuck: z.string(),
            lowest: z.string(),
            max: z.string(),
        })
        .transform((v) => {
            return {
                defaultRelayerUnstuck: v.defaultRelayerUnstuck,
                lowest: v.lowest,
                max: v.max,
            };
        });

    export type Outbound = {
        defaultRelayerUnstuck: string;
        lowest: string;
        max: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GasPriceRecommendationDto> = z
        .object({
            defaultRelayerUnstuck: z.string(),
            lowest: z.string(),
            max: z.string(),
        })
        .transform((v) => {
            return {
                defaultRelayerUnstuck: v.defaultRelayerUnstuck,
                lowest: v.lowest,
                max: v.max,
            };
        });
}
