import type { Express } from "express";
import { createServer, type Server } from "http";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes for bot analytics or invite tracking could go here
  // For now, this is a static landing page

  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", message: "Panem Discord Bot landing page is running" });
  });

  // Discord bot invite redirect endpoint
  app.get("/api/invite", (req, res) => {
    // In a real implementation, this would redirect to the actual Discord OAuth URL
    const botInviteUrl = "https://discord.com/api/oauth2/authorize?client_id=YOUR_BOT_ID&permissions=YOUR_PERMISSIONS&scope=bot%20applications.commands";
    res.redirect(botInviteUrl);
  });

  // Track bot additions (optional analytics)
  app.post("/api/analytics/bot-added", (req, res) => {
    // In a real implementation, this could track when the bot is added to servers
    console.log("Bot added to server:", req.body);
    res.json({ success: true });
  });

  const httpServer = createServer(app);

  return httpServer;
}
