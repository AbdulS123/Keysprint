// Import Oak framework and utilities
import { Application, Router, send } from "jsr:@oak/oak";
import { join } from "https://deno.land/std@0.192.0/path/mod.ts"; // For joining file paths

// Create a new Oak application
const app = new Application();

// Create a new router
const router = new Router();

// Serve static HTML file on the root path
router.get("/", async (context) => {
    await send(context, "client.ts", { root: join(Deno.cwd(), "client") });
});

// Apply the router to the app
app.use(router.routes());

// Start the server
console.log("Server running on http://localhost:8000");
await app.listen({ port: 8000 });
