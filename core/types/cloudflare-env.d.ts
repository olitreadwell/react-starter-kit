/* eslint-disable */
// Generated by Wrangler by running `wrangler types --include-runtime=false core/types/cloudflare-env.d.ts` (hash: e0db57e983f465e65b6f48768e3d5c45)
declare namespace Cloudflare {
  interface Env {
    ENVIRONMENT: "development" | "production" | "preview";
    ALLOWED_ORIGINS:
      | "http://localhost:5173,http://127.0.0.1:5173"
      | "https://example.com"
      | "https://preview.example.com";
    OPENAI_API_KEY: string;
    db: D1Database;
    ASSETS: Fetcher;
  }
}
interface Env extends Cloudflare.Env {}
type StringifyValues<EnvType extends Record<string, unknown>> = {
  [Binding in keyof EnvType]: EnvType[Binding] extends string
    ? EnvType[Binding]
    : string;
};
declare namespace NodeJS {
  interface ProcessEnv
    extends StringifyValues<
      Pick<Cloudflare.Env, "ENVIRONMENT" | "ALLOWED_ORIGINS">
    > {}
}
