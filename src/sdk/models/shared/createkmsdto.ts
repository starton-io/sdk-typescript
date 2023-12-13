/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { AwsKmsCredentialsDto, AwsKmsCredentialsDto$ } from "./awskmscredentialsdto";
import { z } from "zod";

export type Metadata = {};

export enum Provider {
    Aws = "AWS",
    Vault = "Vault",
}

export type CreateKmsDto = {
    credentials?: AwsKmsCredentialsDto | undefined;
    metadata?: Metadata | undefined;
    name: string;
    provider: Provider;
    secret: string;
};

/** @internal */
export namespace Metadata$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<Metadata, z.ZodTypeDef, Inbound> = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Metadata> = z.object({});
}

/** @internal */
export const Provider$ = z.nativeEnum(Provider);

/** @internal */
export namespace CreateKmsDto$ {
    export type Inbound = {
        credentials?: AwsKmsCredentialsDto$.Inbound | undefined;
        metadata?: Metadata$.Inbound | undefined;
        name: string;
        provider: Provider;
        secret: string;
    };

    export const inboundSchema: z.ZodType<CreateKmsDto, z.ZodTypeDef, Inbound> = z
        .object({
            credentials: AwsKmsCredentialsDto$.inboundSchema.optional(),
            metadata: z.lazy(() => Metadata$.inboundSchema).optional(),
            name: z.string(),
            provider: Provider$,
            secret: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.credentials === undefined ? null : { credentials: v.credentials }),
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                name: v.name,
                provider: v.provider,
                secret: v.secret,
            };
        });

    export type Outbound = {
        credentials?: AwsKmsCredentialsDto$.Outbound | undefined;
        metadata?: Metadata$.Outbound | undefined;
        name: string;
        provider: Provider;
        secret: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateKmsDto> = z
        .object({
            credentials: AwsKmsCredentialsDto$.outboundSchema.optional(),
            metadata: z.lazy(() => Metadata$.outboundSchema).optional(),
            name: z.string(),
            provider: Provider$,
            secret: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.credentials === undefined ? null : { credentials: v.credentials }),
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                name: v.name,
                provider: v.provider,
                secret: v.secret,
            };
        });
}
