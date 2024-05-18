/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
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
export namespace InvitationRole$ {
    export const inboundSchema = z.nativeEnum(InvitationRole);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace Invitation$ {
    export const inboundSchema: z.ZodType<Invitation, z.ZodTypeDef, unknown> = z
        .object({
            createdAt: z
                .string()
                .datetime({ offset: true })
                .default("2024-01-31T13:57:37.250Z")
                .transform((v) => new Date(v)),
            email: z.string(),
            id: z.string(),
            projectId: z.string(),
            role: InvitationRole$.inboundSchema,
            updatedAt: z
                .string()
                .datetime({ offset: true })
                .default("2024-01-31T13:57:37.250Z")
                .transform((v) => new Date(v)),
        })
        .transform((v) => {
            return {
                createdAt: v.createdAt,
                email: v.email,
                id: v.id,
                projectId: v.projectId,
                role: v.role,
                updatedAt: v.updatedAt,
            };
        });

    export type Outbound = {
        createdAt: string;
        email: string;
        id: string;
        projectId: string;
        role: string;
        updatedAt: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Invitation> = z
        .object({
            createdAt: z
                .date()
                .default(() => new Date("2024-01-31T13:57:37.250Z"))
                .transform((v) => v.toISOString()),
            email: z.string(),
            id: z.string(),
            projectId: z.string(),
            role: InvitationRole$.outboundSchema,
            updatedAt: z
                .date()
                .default(() => new Date("2024-01-31T13:57:37.250Z"))
                .transform((v) => v.toISOString()),
        })
        .transform((v) => {
            return {
                createdAt: v.createdAt,
                email: v.email,
                id: v.id,
                projectId: v.projectId,
                role: v.role,
                updatedAt: v.updatedAt,
            };
        });
}
