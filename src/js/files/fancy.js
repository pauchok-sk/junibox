import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

export default function fancy() {
  Fancybox.bind('[data-fancybox]', {});
  Fancybox.bind('[data-fancybox="video"]', {});
  Fancybox.bind('[data-fancybox="volumes"]', {});
}
