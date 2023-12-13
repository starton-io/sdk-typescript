/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type AwsKmsCredentialsDto = {
    accessKeyId: string;
    accountId: string;
    region: string;
};

/** @internal */
export namespace AwsKmsCredentialsDto$ {
    export type Inbound = {
        accessKeyId: string;
        accountId: string;
        region: string;
    };

    export const inboundSchema: z.ZodType<AwsKmsCredentialsDto, z.ZodTypeDef, Inbound> = z
        .object({
            accessKeyId: z.string(),
            accountId: z.string(),
            region: z.string(),
        })
        .transform((v) => {
            return {
                accessKeyId: v.accessKeyId,
                accountId: v.accountId,
                region: v.region,
            };
        });

    export type Outbound = {
        accessKeyId: string;
        accountId: string;
        region: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AwsKmsCredentialsDto> = z
        .object({
            accessKeyId: z.string(),
            accountId: z.string(),
            region: z.string(),
        })
        .transform((v) => {
            return {
                accessKeyId: v.accessKeyId,
                accountId: v.accountId,
                region: v.region,
            };
        });
}
