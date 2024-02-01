/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { AwsKmsCredentialsDto, AwsKmsCredentialsDto$ } from "./awskmscredentialsdto";
import { VaultKmsCredentialsDto, VaultKmsCredentialsDto$ } from "./vaultkmscredentialsdto";
import { z } from "zod";

export type UpdateKmsDtoCredentials = AwsKmsCredentialsDto | VaultKmsCredentialsDto;

export type UpdateKmsDtoMetadata = {};

export type UpdateKmsDto = {
    credentials?: AwsKmsCredentialsDto | VaultKmsCredentialsDto | undefined;
    metadata?: UpdateKmsDtoMetadata | undefined;
    name?: string | undefined;
    secret?: string | undefined;
};

/** @internal */
export namespace UpdateKmsDtoCredentials$ {
    export type Inbound = AwsKmsCredentialsDto$.Inbound | VaultKmsCredentialsDto$.Inbound;

    export type Outbound = AwsKmsCredentialsDto$.Outbound | VaultKmsCredentialsDto$.Outbound;

    export const inboundSchema: z.ZodType<UpdateKmsDtoCredentials, z.ZodTypeDef, Inbound> = z.union(
        [AwsKmsCredentialsDto$.inboundSchema, VaultKmsCredentialsDto$.inboundSchema]
    );

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateKmsDtoCredentials> =
        z.union([AwsKmsCredentialsDto$.outboundSchema, VaultKmsCredentialsDto$.outboundSchema]);
}

/** @internal */
export namespace UpdateKmsDtoMetadata$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<UpdateKmsDtoMetadata, z.ZodTypeDef, Inbound> = z.object(
        {}
    );

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateKmsDtoMetadata> = z.object(
        {}
    );
}

/** @internal */
export namespace UpdateKmsDto$ {
    export type Inbound = {
        credentials?: AwsKmsCredentialsDto$.Inbound | VaultKmsCredentialsDto$.Inbound | undefined;
        metadata?: UpdateKmsDtoMetadata$.Inbound | undefined;
        name?: string | undefined;
        secret?: string | undefined;
    };

    export const inboundSchema: z.ZodType<UpdateKmsDto, z.ZodTypeDef, Inbound> = z
        .object({
            credentials: z
                .union([AwsKmsCredentialsDto$.inboundSchema, VaultKmsCredentialsDto$.inboundSchema])
                .optional(),
            metadata: z.lazy(() => UpdateKmsDtoMetadata$.inboundSchema).optional(),
            name: z.string().optional(),
            secret: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.credentials === undefined ? null : { credentials: v.credentials }),
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.secret === undefined ? null : { secret: v.secret }),
            };
        });

    export type Outbound = {
        credentials?: AwsKmsCredentialsDto$.Outbound | VaultKmsCredentialsDto$.Outbound | undefined;
        metadata?: UpdateKmsDtoMetadata$.Outbound | undefined;
        name?: string | undefined;
        secret?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateKmsDto> = z
        .object({
            credentials: z
                .union([
                    AwsKmsCredentialsDto$.outboundSchema,
                    VaultKmsCredentialsDto$.outboundSchema,
                ])
                .optional(),
            metadata: z.lazy(() => UpdateKmsDtoMetadata$.outboundSchema).optional(),
            name: z.string().optional(),
            secret: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.credentials === undefined ? null : { credentials: v.credentials }),
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.secret === undefined ? null : { secret: v.secret }),
            };
        });
}