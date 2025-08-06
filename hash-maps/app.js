import { HashMap } from "./components/HashMap.js";

const configMap = new HashMap();
configMap.set("database.host", "127.0.0.1");
configMap.set("database.port", "5432");
configMap.set("database.user", "admin");
configMap.set("database.password", "securePass123");
configMap.set("cache.enabled", "true");
configMap.set("cache.ttl", "3600");
configMap.set("logging.level", "debug");
configMap.set("api.endpoint", "https://api.example.com/v1");
configMap.set("api.timeout", "5000");
configMap.set("ui.theme", "dark");
configMap.set("ui.fontSize", "14px");
configMap.set("security.encryption", "AES-256");
configMap.set("security.ssl", "true");
configMap.set("analytics.enabled", "false");
configMap.set("analytics.id", "UA-12345678");
configMap.set("storage.type", "s3");
configMap.set("storage.bucket", "company-app-data");
configMap.set("notifications.email", "support@example.com");
configMap.set("notifications.sms", "+1234567890");
configMap.set("feature.flags.newDashboard", "beta");
configMap.set("feature.flags.export", "enabled");

console.log(configMap.buckets);
