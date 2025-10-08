// Bu dosya artık sadece re-export yapıyor
// Tüm veriler ayrı dosyalara taşındı

export { reviewsData } from "../config/reviews";
export { referanslar } from "../config/referanslar";
export { tests } from "../config/demoTests";
export { wGarsonApps } from "../config/wGarsonApps";
export { getAccordionItems, getSupportAccordionItems } from "./accordionHelpers";
export { WGarsonDownloadButton } from "./WGarsonDownloadButton";

// WGarson için eski format uyumluluğu
import { wGarsonApps } from "../config/wGarsonApps";
import { WGarsonDownloadButton } from "./WGarsonDownloadButton";

export const wGarson = wGarsonApps.map((app) => ({
  title: app.title,
  content: <WGarsonDownloadButton title={app.title} url={app.url} />,
}));
