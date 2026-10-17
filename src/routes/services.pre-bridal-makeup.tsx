import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail, serviceHead } from "@/components/detail-pages";

export const Route = createFileRoute("/services/pre-bridal-makeup")({
  head: () => serviceHead("pre-bridal-makeup"),
  component: () => <ServiceDetail slug="pre-bridal-makeup" />,
});
