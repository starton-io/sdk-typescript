/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type RequireFaucetDto = {
    /**
     * Captcha token.
     */
    captchaToken?: string | undefined;
    /**
     * Destination wallet address.
     */
    wallet: string;
};

/** @internal */
export namespace RequireFaucetDto$ {
    export type Inbound = {
        captchaToken?: string | undefined;
        wallet: string;
    };

    export const inboundSchema: z.ZodType<RequireFaucetDto, z.ZodTypeDef, Inbound> = z
        .object({
            captchaToken: z.string().optional(),
            wallet: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.captchaToken === undefined ? null : { captchaToken: v.captchaToken }),
                wallet: v.wallet,
            };
        });

    export type Outbound = {
        captchaToken?: string | undefined;
        wallet: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RequireFaucetDto> = z
        .object({
            captchaToken: z.string().optional(),
            wallet: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.captchaToken === undefined ? null : { captchaToken: v.captchaToken }),
                wallet: v.wallet,
            };
        });
}
