import { Link } from "./Link";
// assets
import { HomeIcon } from "../assets/HomeIcon";
import { AddIcon } from "../assets/AddIcon";

import styles from "./ListNavigation.module.css";

export const ListNavigation = () => {
  return (
    <ul className={styles.navigation_elements}>
      <li>
        <Link icon={<HomeIcon />} to="/">
          HOME
        </Link>
      </li>
      <li>
        <Link icon={<AddIcon />} to="/new-video">
          NUEVO VIDEO
        </Link>
      </li>
    </ul>
  );
};
