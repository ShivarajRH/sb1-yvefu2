export const AD_SLOTS = {
  leftSidebar: {
    id: '1234567890',
    width: 160,
    height: 600,
    format: 'rectangle' as const
  },
  rightSidebar: {
    id: '0987654321',
    width: 160,
    height: 600,
    format: 'rectangle' as const
  },
  bottomBanner: {
    id: '1357924680',
    width: 728,
    height: 90,
    format: 'auto' as const
  },
  inContent: {
    id: '2468013579',
    width: 300,
    height: 250,
    format: 'auto' as const
  }
} as const;