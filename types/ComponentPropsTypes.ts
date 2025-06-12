export type ViewAllButtonProps = {
  btnLabel: string;
};

export type TextPillsProps = {
  label: string;
  customClasses?: string;
};

export type CollapsibleListProps = {
  data: CollapsibleListData[] | undefined;
  activeItemBgColor?: string;
  borderColor?: string;
};
export type CollapsibleListData = {
  id: string;
  title: string;
  content: string;
};
