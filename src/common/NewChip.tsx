import { Box, BoxProps } from '@material-ui/core';

type BoxStyle = BoxProps['sx'];

const baseStyles: BoxStyle = {
  display: 'inline-block',
  color: 'otter.white',
  bgcolor: 'otter.clamPink',
  fontSize: '12px',
  fontWeight: 400,
  lineHeight: '18px',
  padding: '0 5px',
  borderRadius: '4px',
};

const NewChip = (props: BoxProps) => {
  return (
    <Box {...baseStyles} {...props}>
      NEW!
    </Box>
  );
};
export default NewChip;
