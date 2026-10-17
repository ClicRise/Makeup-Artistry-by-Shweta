import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail, serviceHead } from "@/components/detail-pages";

export const Route = createFileRoute("/services/hair-styling")({
  head: () => serviceHead("hair-styling"),
  component: () => <ServiceDetail slug="hair-styling" />,
});
