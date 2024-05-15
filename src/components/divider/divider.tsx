import { DividerProps } from "./divider.types";

export const Divider: React.FC<DividerProps> = ({ text }: DividerProps) => {
  return (
    <div className="w-full text-sm font-medium text-success mt-6 mb-2">
      {text}
    </div>
  );
};
