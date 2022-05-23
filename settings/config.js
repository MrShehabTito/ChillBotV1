require("dotenv").config();
const { resolve } = require("path");

module.exports = {
    TOKEN: process.env.TOKEN || "",  // your bot token
    PREFIX: process.env.PREFIX || "-", //<= default is #  // bot prefix
    EMBED_COLOR: process.env.EMBED_COLOR || "#350080", //<= default is "#000001"

    OWNER_ID: process.env.OWNER_ID || "298816961293451266", //your owner discord id example: "515490955801919488"

    NP_REALTIME: process.env.NP_REALTIME || "BOOLEAN", // "true" = realtime, "false" = not realtime :3 // WARNING: on set to "true" = laggy and bot will ratelimit if you have a lot of servers
    LEAVE_TIMEOUT: parseInt(process.env.LEAVE_TIMEOUT || "300000"), // leave timeout default "120000" = 2 minutes // 1000 = 1 seconds

    LANGUAGE: {
      defaultLocale: process.env.LANGUAGE || "en", // "en" = default language
      directory: resolve("languages"), // <= location of language
    },

    DEV_ID: [], // if you want to use command bot only, you can put your id here example: ["123456789", "123456789"]

    MONGO_URI: process.env.MONGO_URI || "mongodb+srv://shehabtito:shehab01125336794shehab@discordbot.0frp1.mongodb.net/shehabtito?retryWrites=true&w=majority", // your mongo uri
    LIMIT_TRACK: parseInt(process.env.LIMIT_TRACK || "200"),  //<= dafault is "100" // limit track in playlist
    LIMIT_PLAYLIST: parseInt(process.env.LIMIT_PLAYLIST || "5"), //<= default is "10" // limit can create playlist

    NODES: [
      { 
        host: process.env.NODE_HOST || "lavalink.oops.wtf",
        port: parseInt(process.env.NODE_PORT || "2000"),
        password: process.env.NODE_PASSWORD || "www.freelavalink.ga",
      } 
    ],
}