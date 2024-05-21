import { DividerProps } from "./devider.types";

export const Devider: React.FC<DividerProps> = ({ text , className }: DividerProps) => {
  return (
    <div className={`w-full text-sm font-medium text-success mt-6 mb-2 ${className}`}>
      {text}
    </div>
  );
};
