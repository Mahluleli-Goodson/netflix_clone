import {FC} from "react";
import CategoryItem, {CatItemProps} from "./CategoryItem";

interface CatHeaderProps {
    menuList: CatItemProps[]
}

const CategoriesHeader: FC<CatHeaderProps> = ({menuList}: CatHeaderProps): JSX.Element => {
    const widget = menuList.map((item, idx) => {
        return (
            <CategoryItem key={idx} Icon={item.Icon} title={item.title} isActive={item.isActive}/>
        );
    });

    return (
        <div className="flex justify-between font-medium pt-8 pb-6">
            {widget}
        </div>
    );
};

export default CategoriesHeader;
