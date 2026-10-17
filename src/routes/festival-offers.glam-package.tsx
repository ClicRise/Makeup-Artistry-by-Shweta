import { createFileRoute } from "@tanstack/react-router";
import { PackageDetail, packageHead } from "@/components/detail-pages";

export const Route = createFileRoute("/festival-offers/glam-package")({
  head: () => packageHead("glam-package"),
  component: () => <PackageDetail slug="glam-package" />,
});
