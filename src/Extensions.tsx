import Box from "@suid/material/Box";
import Button from "@suid/material/Button";
import { For, createMemo } from "solid-js";
import { byKey, isExtensionInfo, toNavLink } from "./utils";

import "./styles.css";

function Extensions(props: ExtensionsProps) {
  const links = createMemo(() =>
    Object.values(props.extensions)
      .filter(isExtensionInfo)
      .map(toNavLink)
      .sort(byKey)
  );

  return (
    <Box component="nav" aria-label="Extensions" class="extensions-root">
      <For each={links()}>
        {(link) => (
          <Button
            onClick={(e) => props.onLinkClick?.(e, link)}
            class="extension-link"
            variant="text"
          >
            <span>{link.name}</span>
          </Button>
        )}
      </For>
    </Box>
  );
}

export default Extensions;
