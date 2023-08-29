import { globalStyle } from '@vanilla-extract/css';

globalStyle('html', {
  backgroundImage: `
    repeating-linear-gradient(to bottom, #F7FAFC, #F7FAFC 1px, transparent 1px, transparent 24px),
    repeating-linear-gradient(to right, #F7FAFC, #F7FAFC 1px, transparent 1px, transparent 24px)
  `,
  backgroundSize: '24px 24px',
});

globalStyle('body,main', {
  backgroundColor: 'transparent !important',
});
