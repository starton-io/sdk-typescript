/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
 */

import * as z from "zod";

export enum InvitationRole {
    Owner = "owner",
}

export type Invitation = {
    createdAt?: Date | undefined;
    email: string;
    id: string;
    projectId: string;
    role: InvitationRole;
    updatedAt?: Date | undefined;
};

/** @internal */
export const InvitationRole$inboundSchema: z.ZodNativeEnum<typeof InvitationRole> =
    z.nativeEnum(InvitationRole);

/** @internal */
export const InvitationRole$outboundSchema: z.ZodNativeEnum<typeof InvitationRole> =
    InvitationRole$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InvitationRole$ {
    /** @deprecated use `InvitationRole$inboundSchema` instead. */
    export const inboundSchema = InvitationRole$inboundSchema;
    /** @deprecated use `InvitationRole$outboundSchema` instead. */
    export const outboundSchema = InvitationRole$outboundSchema;
}

/** @internal */
export const Invitation$inboundSchema: z.ZodType<Invitation, z.ZodTypeDef, unknown> = z.object({
    createdAt: z
        .string()
        .datetime({ offset: true })
        .default("2024-05-02T09:34:07.024Z")
        .transform((v) => new Date(v)),
    email: z.string(),
    id: z.string(),
    projectId: z.string(),
    role: InvitationRole$inboundSchema,
    updatedAt: z
        .string()
        .datetime({ offset: true })
        .default("2024-05-02T09:34:07.024Z")
        .transform((v) => new Date(v)),
});

/** @internal */
export type Invitation$Outbound = {
    createdAt: string;
    email: string;
    id: string;
    projectId: string;
    role: string;
    updatedAt: string;
};

/** @internal */
export const Invitation$outboundSchema: z.ZodType<Invitation$Outbound, z.ZodTypeDef, Invitation> =
    z.object({
        createdAt: z
            .date()
            .default(() => new Date("2024-05-02T09:34:07.024Z"))
            .transform((v) => v.toISOString()),
        email: z.string(),
        id: z.string(),
        projectId: z.string(),
        role: InvitationRole$outboundSchema,
        updatedAt: z
            .date()
            .default(() => new Date("2024-05-02T09:34:07.024Z"))
            .transform((v) => v.toISOString()),
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Invitation$ {
    /** @deprecated use `Invitation$inboundSchema` instead. */
    export const inboundSchema = Invitation$inboundSchema;
    /** @deprecated use `Invitation$outboundSchema` instead. */
    export const outboundSchema = Invitation$outboundSchema;
    /** @deprecated use `Invitation$Outbound` instead. */
    export type Outbound = Invitation$Outbound;
}
