import styled from "@emotion/styled";
import { Box } from "@mui/material";

interface MarqueProps {
  text: string;
}

export const Marque: React.FC<MarqueProps> = ({ text }) => {
  const ScrollingText = styled.div`
    white-space: nowrap;
    overflow: hidden;
    animation: scroll 10s linear infinite;

    @keyframes scroll {
      0% {
        transform: translateX(50%);
      }
      50% {
        transform: translateX(-50%);
      }
    }
  `;

  return (
    <Box>
      <ScrollingText>
        {text}
      </ScrollingText>
    </Box>
  );
};
