import {
  EnvelopeClosedIcon,
  HamburgerMenuIcon,
  HomeIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import { DropdownMenu, IconButton } from "@radix-ui/themes";
import type React from "react";
import StyledDropdownMenuItem from "../atoms/StyledDropdownMenuItem";

const HamburgerMenu: React.FC = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger style={{ width: 40, height: 40 }}>
        <IconButton style={{ borderRadius: 100 }}>
          <HamburgerMenuIcon />
        </IconButton>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <StyledDropdownMenuItem icon={<PersonIcon />} label="Sign Up" />
        <DropdownMenu.Separator />
        <StyledDropdownMenuItem
          icon={<HomeIcon style={{ width: 18, height: 18 }} />}
          label="Home"
        />
        <StyledDropdownMenuItem
          icon={<EnvelopeClosedIcon />}
          label="Subscribe"
        />
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default HamburgerMenu;
