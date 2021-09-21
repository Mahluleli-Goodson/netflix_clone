import {FC} from "react";
import MenuItem from "./MenuItem";

const Menu:FC = (): JSX.Element => {
  return (
      <div className="flex items-center">
        <MenuItem title="Home" isActive/>
        <MenuItem title="Movies" />
        <MenuItem title="Series" />
        <MenuItem title="My list" isSelect/>
      </div>
  );
};
export default Menu;
