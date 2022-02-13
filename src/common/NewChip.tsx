import { Box, BoxProps } from '@material-ui/core';
import { useTranslation } from 'react-i18next'

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
  const { t } = useTranslation();
  return (
    <Box {...baseStyles} {...props}>
      {t('common.new')}
    </Box>
  );
};
export default NewChip;
