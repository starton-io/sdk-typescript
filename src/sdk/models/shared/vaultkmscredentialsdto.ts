/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type VaultKmsCredentialsDto = {
    /**
     * Vault base url
     */
    baseUrl: string;
    /**
     * Will be generated by starton
     */
    id: string;
    /**
     * URL that will give you a jwt to use the plugin
     */
    loginPath: string;
    /**
     * Role from vault app-role
     */
    role: string;
    /**
     * URL that will be used for your plugin
     */
    rootPath: string;
    /**
     * Check if the ssl certificate is self signed
     */
    selfSigned: boolean;
    timeout: number;
    /**
     * URL that will allow you to interact with the token
     */
    tokenPath: string;
};

/** @internal */
export const VaultKmsCredentialsDto$inboundSchema: z.ZodType<
    VaultKmsCredentialsDto,
    z.ZodTypeDef,
    unknown
> = z.object({
    baseUrl: z.string(),
    id: z.string(),
    loginPath: z.string(),
    role: z.string(),
    rootPath: z.string(),
    selfSigned: z.boolean(),
    timeout: z.number(),
    tokenPath: z.string(),
});

/** @internal */
export type VaultKmsCredentialsDto$Outbound = {
    baseUrl: string;
    id: string;
    loginPath: string;
    role: string;
    rootPath: string;
    selfSigned: boolean;
    timeout: number;
    tokenPath: string;
};

/** @internal */
export const VaultKmsCredentialsDto$outboundSchema: z.ZodType<
    VaultKmsCredentialsDto$Outbound,
    z.ZodTypeDef,
    VaultKmsCredentialsDto
> = z.object({
    baseUrl: z.string(),
    id: z.string(),
    loginPath: z.string(),
    role: z.string(),
    rootPath: z.string(),
    selfSigned: z.boolean(),
    timeout: z.number(),
    tokenPath: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace VaultKmsCredentialsDto$ {
    /** @deprecated use `VaultKmsCredentialsDto$inboundSchema` instead. */
    export const inboundSchema = VaultKmsCredentialsDto$inboundSchema;
    /** @deprecated use `VaultKmsCredentialsDto$outboundSchema` instead. */
    export const outboundSchema = VaultKmsCredentialsDto$outboundSchema;
    /** @deprecated use `VaultKmsCredentialsDto$Outbound` instead. */
    export type Outbound = VaultKmsCredentialsDto$Outbound;
}
