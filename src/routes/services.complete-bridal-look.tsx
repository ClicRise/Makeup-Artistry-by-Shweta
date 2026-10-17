import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail, serviceHead } from "@/components/detail-pages";

export const Route = createFileRoute("/services/complete-bridal-look")({
  head: () => serviceHead("complete-bridal-look"),
  component: () => <ServiceDetail slug="complete-bridal-look" />,
});
