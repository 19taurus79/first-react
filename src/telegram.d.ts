interface TelegramWebAppUser {
  id: number;
  [key: string]: any;
}

interface TelegramWebAppInitDataUnsafe {
  user?: TelegramWebAppUser;
  [key: string]: any;
}

interface TelegramWebApp {
  ready: () => void;
  initDataUnsafe?: TelegramWebAppInitDataUnsafe;
  [key: string]: any;
}

interface TelegramNamespace {
  WebApp: TelegramWebApp;
}

interface Window {
  Telegram?: TelegramNamespace;
}