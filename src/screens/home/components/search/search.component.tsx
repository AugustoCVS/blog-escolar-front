import { Input } from "@/components/commons/input/input.component";
import { SearchProps } from "./search.types";

export const SearchComponent: React.FC<SearchProps> = ({value, setValue}) => {
  return (
    <div>
      <Input 
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder="Pesquisar" 
      />
    </div>
  );
}