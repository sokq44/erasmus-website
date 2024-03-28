import { z } from "zod";

const envVars = z.object({
    NEXT_PUBLIC_PAGE_URL: z.string(),
});

declare global {
    namespace NodeJS {
        interface ProcessEnv extends z.infer<typeof envVars> {}
    }
}
