import * as functions from "./files/functions.js";

import "../scss/style.scss";
import spoller from "./files/spoller.js";
import slider from "./files/sliders.js";
import dropCatalog from "./files/dropCatalog.js";
import fancy from "./files/fancy.js";
import sectionsToggle from "./files/sectionsToggle.js";

functions.mediaAdaptive();
spoller();
slider();
dropCatalog();
fancy();
sectionsToggle();