import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatform";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  onSelectPlatform: (platfrom: number) => void;
  chosenPlatfromId?: number;
}

const PlatformSelector = ({ onSelectPlatform, chosenPlatfromId }: Props) => {
  const { data: platforms, error, isLoading } = usePlatforms();
  const platform = usePlatform(chosenPlatfromId);

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {platform?.name || "Platform"}
      </MenuButton>
      <MenuList>
        {platforms?.results.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => onSelectPlatform(platform.id)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
