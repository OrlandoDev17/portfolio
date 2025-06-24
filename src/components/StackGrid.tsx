import { STACKS } from '../consts/const';
import StackCard from './StackCard';

export default function StackGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {STACKS.map(
        ({
          id,
          icon,
          title,
          tags,
          bgColor,
          textColor,
          borderColor,
          itemBgColor,
          shadowColor,
          hoverColor,
          darkTextColor,
          darkBgColor,
          darkItemBgColor,
          animation
        }) => (
          <StackCard
            key={id}
            icon={icon}
            title={title}
            tags={tags}
            bgColor={bgColor}
            textColor={textColor}
            borderColor={borderColor}
            itemBgColor={itemBgColor}
            shadowColor={shadowColor}
            hoverColor={hoverColor}
            darkTextColor={darkTextColor}
            darkBgColor={darkBgColor}
            darkItemBgColor={darkItemBgColor}
            animation={animation}
          />
        )
      )}
    </div>
  );
}
