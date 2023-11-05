import { style } from '@vanilla-extract/css';

const text = style({
  background: 'linear-gradient(transparent 60%, #fbe32d 40%)',
});

const OutlinedButton = style({
  backgroundColor: '#F4F5F7',
  ':hover': {
    backgroundColor: '#252525',
    color: '#F4F5F7',
  },
});

const FilledButton = style({
  ':hover': {
    backgroundColor: '#fbe32d',
    color: '#252525',
  },
});

export { text, OutlinedButton, FilledButton };
