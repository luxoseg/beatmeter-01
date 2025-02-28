declare global {
  interface Window {
    utmifyConfig: {
      allowCors: boolean;
      pixelId: string;
    };
    utmify?: {
      redirect: (url: string) => void;
      event: (name: string, data?: any) => void;
    };
  }
}

export {};