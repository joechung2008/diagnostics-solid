import Box from "@suid/material/Box";
import Typography from "@suid/material/Typography";
import Configuration from "./Configuration";
import StageDefinition from "./StageDefinition";

import "./styles.css";

function Extension(props: ExtensionProps) {
  return (
    <Box class="extension-root">
      <Typography class="custom-h1" variant="h1" color="text.primary">
        {props.extensionName}
      </Typography>
      {props.config && <Configuration config={props.config} />}
      {props.stageDefinition && (
        <StageDefinition stageDefinition={props.stageDefinition} />
      )}
    </Box>
  );
}

export default Extension;
