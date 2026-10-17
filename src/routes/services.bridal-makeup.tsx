import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail, serviceHead } from "@/components/detail-pages";

export const Route = createFileRoute("/services/bridal-makeup")({
  head: () => serviceHead("bridal-makeup"),
  component: () => <ServiceDetail slug="bridal-makeup" />,
});
