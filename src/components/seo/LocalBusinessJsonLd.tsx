import { SITE_URL, BUSINESS } from "@/lib/site";

/**
 * 構造化データ（JSON-LD / schema.org）
 * ローカル検索（例：「富山 訪問看護ステーション」）やナレッジパネル向けに、
 * 事業所情報を検索エンジンへ明示的に伝えます。トップページに設置。
 */
export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": `${SITE_URL}/#organization`,
    name: BUSINESS.name,
    legalName: BUSINESS.legalName,
    description:
      "富山市・射水市・砺波市などに対応する、精神・知的・発達障害に特化した訪問看護ステーション。児童・思春期から成人まで、ご本人とご家族を医療とメンタルの両面から支えます。",
    url: SITE_URL,
    telephone: BUSINESS.telephone,
    faxNumber: BUSINESS.faxNumber,
    image: `${SITE_URL}/logo.png`,
    logo: `${SITE_URL}/logo.png`,
    founder: { "@type": "Person", name: BUSINESS.founder },
    foundingDate: BUSINESS.foundingDate,
    priceRange: "各種保険適用",
    currenciesAccepted: "JPY",
    address: {
      "@type": "PostalAddress",
      postalCode: BUSINESS.postalCode,
      addressRegion: BUSINESS.addressRegion,
      addressLocality: BUSINESS.addressLocality,
      streetAddress: BUSINESS.streetAddress,
      addressCountry: "JP",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.geo.latitude,
      longitude: BUSINESS.geo.longitude,
    },
    areaServed: BUSINESS.areaServed.map((name) => ({ "@type": "City", name })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    availableService: [
      { "@type": "MedicalTherapy", name: "精神科訪問看護" },
      { "@type": "MedicalTherapy", name: "児童・思春期の訪問看護" },
      { "@type": "MedicalTherapy", name: "服薬管理・生活支援" },
      { "@type": "MedicalTherapy", name: "ご家族のレスパイト支援" },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
