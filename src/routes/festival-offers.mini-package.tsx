import { createFileRoute } from "@tanstack/react-router";
import { PackageDetail, packageHead } from "@/components/detail-pages";

export const Route = createFileRoute("/festival-offers/mini-package")({
  head: () => packageHead("mini-package"),
  component: () => <PackageDetail slug="mini-package" />,
});
