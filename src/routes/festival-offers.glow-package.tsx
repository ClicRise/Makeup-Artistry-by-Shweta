import { createFileRoute } from "@tanstack/react-router";
import { PackageDetail, packageHead } from "@/components/detail-pages";

export const Route = createFileRoute("/festival-offers/glow-package")({
  head: () => packageHead("glow-package"),
  component: () => <PackageDetail slug="glow-package" />,
});
