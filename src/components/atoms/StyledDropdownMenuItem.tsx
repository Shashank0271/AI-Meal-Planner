import { Box, DropdownMenu } from "@radix-ui/themes";

interface StyledDropdownMenuItemProps {
  icon: React.ReactElement;
  label: string;
}

const StyledDropdownMenuItem: React.FC<StyledDropdownMenuItemProps> = ({
  icon,
  label,
}) => {
  return (
    <DropdownMenu.Item>
      <Box style={{ display: "flex", alignItems: "center", gap: 8 }}>
        {icon}
        <span>{label}</span>
      </Box>
    </DropdownMenu.Item>
  );
};

export default StyledDropdownMenuItem;
