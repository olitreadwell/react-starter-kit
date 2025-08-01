/**
 * Edge-specific exports for Cloudflare Workers deployment.
 * This file only exports modules that are compatible with the edge runtime.
 *
 * SPDX-FileCopyrightText: 2014-present Kriasoft
 * SPDX-License-Identifier: MIT
 */

export { getOpenAI } from "./lib/ai.js";
export { createAuth } from "./lib/auth.js";
export { createDb } from "./lib/db.js";
export type { AppContext } from "./lib/context.js";

// Re-export the main app
export { default, appRouter } from "./index.js";
export type { AppRouter } from "./index.js";
