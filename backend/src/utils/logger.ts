export const logger = {
  info: (message: string, data?: any) => {
    console.log(
      `[INFO] ${new globalThis.Date().toISOString()}`,
      message,
      data ?? ""
    );
  },

  warn: (message: string, data?: any) => {
    console.warn(
      `[WARN] ${new globalThis.Date().toISOString()}`,
      message,
      data ?? ""
    );
  },

  error: (message: string, data?: any) => {
    console.error(
      `[ERROR] ${new globalThis.Date().toISOString()}`,
      message,
      data ?? ""
    );
  },
};