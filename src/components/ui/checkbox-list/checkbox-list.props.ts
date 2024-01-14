export interface CheckboxListProps {
  classNames: string;
  selectValues: [];
  labelComponent: string;
  options: [];
  name: string;
  onChange: () => void;
  onClickLabel: () => void;
}
