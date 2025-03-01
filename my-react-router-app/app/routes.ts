import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),

  layout("amopis/layout.tsx", [
    route("amopis", "routes/amopis/index.tsx"),
    route("amopis/ramingen", "routes/amopis/ramingen.tsx"),
  ]),

  layout("amsterdam/layout.tsx", [
    route("amsterdam", "routes/amsterdam/index.tsx"),

    route("amsterdam/bestuur-en-organisatie", "routes/amsterdam/bestuur-en-organisatie/index.tsx"),
    route(
      "amsterdam/bestuur-en-organisatie/college-van-burgemeester-en-wethouders",
      "routes/amsterdam/bestuur-en-organisatie/college-van-burgemeester-en-wethouders.tsx"
    ),
    route("amsterdam/bestuur-en-organisatie/gemeenteraad", "routes/amsterdam/bestuur-en-organisatie/gemeenteraad.tsx"),

    route("amsterdam/burgerzaken", "routes/amsterdam/burgerzaken.tsx"),

    route("amsterdam/contact", "routes/amsterdam/contact/index.tsx"),
    route("amsterdam/contact/bedankt", "routes/amsterdam/contact/bedankt.tsx"),
    route("amsterdam/contact/gegevens", "routes/amsterdam/contact/gegevens.tsx"),
    route("amsterdam/contact/vraag", "routes/amsterdam/contact/vraag.tsx"),

    route("amsterdam/kunst-en-cultuur", "routes/amsterdam/kunst-en-cultuur.tsx"),

    route("amsterdam/nieuws", "routes/amsterdam/nieuws.tsx"),

    route("amsterdam/projecten", "routes/amsterdam/projecten/index.tsx"),
    route("amsterdam/projecten/stadsdeel", "routes/amsterdam/projecten/stadsdeel.tsx"),

    route("amsterdam/zoeken", "routes/amsterdam/zoeken.tsx"),
  ]),

  layout("signalen/layout.tsx", [
    route("signalen", "routes/signalen/index.tsx"),
    route("signalen/bedankt", "routes/signalen/bedankt.tsx"),
    route("signalen/contact-1", "routes/signalen/contact-1.tsx"),
    route("signalen/contact-2", "routes/signalen/contact-2.tsx"),
    route("signalen/documenten", "routes/signalen/documenten.tsx"),
    route("signalen/samenvatting", "routes/signalen/samenvatting.tsx"),
    route("signalen/vul-aan-1", "routes/signalen/vul-aan-1.tsx"),
    route("signalen/vul-aan-1b", "routes/signalen/vul-aan-1b.tsx"),
    route("signalen/vul-aan-1c", "routes/signalen/vul-aan-1c.tsx"),
    route("signalen/vul-aan-2", "routes/signalen/vul-aan-2.tsx"),
    route("signalen/vul-aan-3", "routes/signalen/vul-aan-3.tsx"),
  ]),
] satisfies RouteConfig;
