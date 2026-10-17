import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail, serviceHead } from "@/components/detail-pages";

export const Route = createFileRoute("/services/eye-makeup")({
  head: () => serviceHead("eye-makeup"),
  component: () => <ServiceDetail slug="eye-makeup" />,
});
