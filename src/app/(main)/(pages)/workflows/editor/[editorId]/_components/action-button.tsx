import React, { useCallback } from "react";
import { Option } from "./content-based-on-title";
import { ConnectionProviderProps } from "@/providers/connections-provider";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

type Props = {
  currentService: string;
  nodeConnection: ConnectionProviderProps;
  channels?: Option[];
  setChannels?: (value: Option[]) => void;
};

const ActionButton = ({
  currentService,
  nodeConnection,
  channels,
  setChannels,
}: Props) => {
  const pathname = usePathname();

  const onSendDiscordMessage = useCallback(async () => {}, [
    nodeConnection.discordNode,
  ]);

  const onStoreNotionContent = useCallback(async () => {}, [
    nodeConnection.notionNode,
  ]);

  const onStoreSlackContent = useCallback(async () => {}, [
    nodeConnection.slackNode,
    channels,
  ]);

  const onCreateLocalNodeTempate = useCallback(async () => {}, [
    nodeConnection,
    channels,
  ]);

  const renderActionButton = () => {
    switch (currentService) {
      case "Discord":
        return (
          <>
            <Button variant="outline" onClick={onSendDiscordMessage}>
              Test Message
            </Button>
            <Button onClick={onCreateLocalNodeTempate} variant="outline">
              Save Template
            </Button>
          </>
        );

      case "Notion":
        return (
          <>
            <Button variant="outline" onClick={onStoreNotionContent}>
              Test
            </Button>
            <Button onClick={onCreateLocalNodeTempate} variant="outline">
              Save Template
            </Button>
          </>
        );

      case "Slack":
        return (
          <>
            <Button variant="outline" onClick={onStoreSlackContent}>
              Send Message
            </Button>
            <Button onClick={onCreateLocalNodeTempate} variant="outline">
              Save Template
            </Button>
          </>
        );

      default:
        return null;
    }
  };
  return renderActionButton();
};

export default ActionButton;
