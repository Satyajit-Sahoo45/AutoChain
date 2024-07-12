import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import React from "react";

type Props = {};

const WorkflowButton = (props: Props) => {
  const handleClick = () => {};

  return (
    <Button size={"icon"}>
      <Plus />
    </Button>
  );
};

export default WorkflowButton;
