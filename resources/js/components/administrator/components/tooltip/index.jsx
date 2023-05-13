import { Tooltip } from "@chakra-ui/tooltip";
const TooltipHorizon = (props) => {
  const { extra, trigger, content, placement } = props;
  return (
    <Tooltip
      placement={placement}
      label={content}
      className={`w-max   bg-white py-3 px-4 text-sm shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none ${extra}`}
    >
      {trigger}
    </Tooltip>
  );
};

export default TooltipHorizon;
