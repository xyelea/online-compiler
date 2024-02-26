import { Share1Icon, DiscIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function HelperHeader() {
  return (
    <div className="__helper_header h-[50px] bg-black text-white p-2 flex justify-between items-center">
      <div className="__btn_container flex gap-1">
        <Button
          variant={"success"}
          className="flex gap-1 justify-center items-center">
          <DiscIcon /> Save
        </Button>
        <Button
          variant={"secondary"}
          className="flex gap-1 justify-center items-center">
          <Share1Icon /> Share
        </Button>
      </div>
      <div className="__tab_switcher">
        <Select defaultValue="html">
          <SelectTrigger className="w-[180px] bg-gray-800 outline-none focus:ring-0">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="html">Html</SelectItem>
            <SelectItem value="css">Css</SelectItem>
            <SelectItem value="javascript">Javascript</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
