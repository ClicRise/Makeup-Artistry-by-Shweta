import { createFileRoute } from "@tanstack/react-router";
import { PackageDetail, packageHead } from "@/components/detail-pages";

export const Route = createFileRoute("/festival-offers/premium-package")({
  head: () => packageHead("premium-package"),
  component: () => <PackageDetail slug="premium-package" />,
});
