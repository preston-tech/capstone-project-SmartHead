import {
    faLemon,
    faSpinner,
    faPlusCircle,
    faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

const Icons = () => {
    library.add(
        faLemon,
        faSpinner,
        faPlusCircle,
        faSignOutAlt
    );
};

export default Icons;