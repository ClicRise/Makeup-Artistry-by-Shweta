import { createFileRoute } from "@tanstack/react-router";
import { PackageDetail, packageHead } from "@/components/detail-pages";

export const Route = createFileRoute("/festival-offers/radiance-package")({
  head: () => packageHead("radiance-package"),
  component: () => <PackageDetail slug="radiance-package" />,
});
