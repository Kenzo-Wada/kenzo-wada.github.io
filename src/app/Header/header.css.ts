import { style } from '@vanilla-extract/css';

const wrapper = style({
  backgroundColor: '#FFFFFF',
  boxShadow: '0px 5px 15px 0px rgba(0, 0, 0, 0.35)',
  borderRadius: '12px',
  top: '24px'
});

const FilledButton = style({
  ':hover': {
    backgroundColor: '#fbe32d',
    color: '#252525',
  },
});

export { wrapper, FilledButton };
