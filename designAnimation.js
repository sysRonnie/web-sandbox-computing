const layoutRules = {
  "home-P": [
    { row: 0, colRange: [0, 5], color: 'var(--primary-color)' },
    { row: 1, colRange: [0, 2], color: 'var(--secondary-color)' },
    { row: 1, colRange: [2, 5], color: 'var(--tertiary-color)' },
    { row: 2, colRange: [0, 2], color: 'var(--secondary-color)' },
    { row: 2, colRange: [2, 5], color: 'var(--tertiary-color)' },
    { row: 3, colRange: [0, 2], color: 'var(--secondary-color)' },
    { row: 3, colRange: [2, 5], color: 'var(--tertiary-color)' },
    { row: 4, colRange: [0, 5], color: 'var(--highlight-color)' },
    { row: 5, colRange: [0, 5], color: 'var(--highlight-color)' },
    { row: 6, colRange: [0, 5], color: 'var(--highlight-color)' }
  ],
  'A3-1T': [
    { row: 0, colRange: [0, 5], color: 'var(--primary-color)' },
    { row: 1, colRange: [0, 5], color: 'var(--tertiary-color)' },
    { row: 2, colRange: [0, 2], color: 'var(--secondary-color)' },
    { row: 2, colRange: [2, 5], color: 'var(--tertiary-color)' },
    { row: 3, colRange: [0, 2], color: 'var(--secondary-color)' },
    { row: 3, colRange: [2, 5], color: 'var(--highlight-color)' },
    { row: 4, colRange: [0, 2], color: 'var(--secondary-color)' },
    { row: 4, colRange: [2, 5], color: 'var(--highlight-color)' },
    { row: 5, colRange: [0, 5], color: 'var(--highlight-color)' },
    { row: 6, colRange: [0, 5], color: 'var(--highlight-color)' }
  ],
  'A3-2T': [
    { row: 0, colRange: [0, 5], color: 'var(--primary-color)' },
    { row: 1, colRange: [0, 5], color: 'var(--tertiary-color)' },
    { row: 2, colRange: [0, 2], color: 'var(--tertiary-color)' },
    { row: 2, colRange: [2, 5], color: 'var(--highlight-color)' },
    { row: 3, colRange: [0, 2], color: 'var(--secondary-color)' },
    { row: 3, colRange: [2, 5], color: 'var(--highlight-color)' },
    { row: 4, colRange: [0, 2], color: 'var(--secondary-color)' },
    { row: 4, colRange: [2, 5], color: 'var(--highlight-color)' },
    { row: 5, colRange: [0, 2], color: 'var(--secondary-color)' },
    { row: 5, colRange: [2, 5], color: 'var(--highlight-color)' },
    { row: 6, colRange: [0, 5], color: 'var(--highlight-color)' }
  ],
  'A3-3P': [
    { row: 0, colRange: [0, 5], color: 'var(--primary-color)' },
    { row: 1, colRange: [0, 2], color: 'var(--tertiary-color)' },
    { row: 1, colRange: [2, 5], color: 'var(--highlight-color)' },
    { row: 2, colRange: [0, 2], color: 'var(--tertiary-color)' },
    { row: 2, colRange: [2, 5], color: 'var(--highlight-color)' },
    { row: 3, colRange: [0, 2], color: 'var(--tertiary-color)' },
    { row: 3, colRange: [2, 5], color: 'var(--highlight-color)' },
    { row: 4, colRange: [0, 2], color: 'var(--secondary-color)' },
    { row: 4, colRange: [2, 5], color: 'var(--highlight-color)' },
    { row: 5, colRange: [0, 2], color: 'var(--secondary-color)' },
    { row: 5, colRange: [2, 5], color: 'var(--highlight-color)' },
    { row: 6, colRange: [0, 2], color: 'var(--secondary-color)' },
    { row: 6, colRange: [2, 5], color: 'var(--highlight-color)' }
  ],
  'B3-1T': [
    { row: 0, colRange: [0, 5], color: 'var(--primary-color)' },
    { row: 1, colRange: [0, 1], color: 'var(--tertiary-color)' },
    { row: 1, colRange: [2, 2], color: 'var(--highlight-color)' },
    { row: 1, colRange: [3, 3], color: 'var(--tertiary-color)' },
    { row: 1, colRange: [4, 5], color: 'var(--highlight-color)' },
    { row: 2, colRange: [0, 1], color: 'var(--tertiary-color)' },
    { row: 2, colRange: [2, 2], color: 'var(--highlight-color)' },
    { row: 2, colRange: [3, 3], color: 'var(--tertiary-color)' },
    { row: 2, colRange: [4, 5], color: 'var(--highlight-color)' },
    { row: 3, colRange: [0, 1], color: 'var(--tertiary-color)' },
    { row: 3, colRange: [2, 2], color: 'var(--highlight-color)' },
    { row: 3, colRange: [3, 3], color: 'var(--tertiary-color)' },
    { row: 3, colRange: [4, 5], color: 'var(--highlight-color)' },
    { row: 4, colRange: [0, 2], color: 'var(--secondary-color)' },
    { row: 4, colRange: [3, 5], color: 'var(--highlight-color)' },
    { row: 5, colRange: [0, 2], color: 'var(--secondary-color)' },
    { row: 5, colRange: [3, 5], color: 'var(--highlight-color)' },
    { row: 6, colRange: [0, 2], color: 'var(--secondary-color)' },
    { row: 6, colRange: [3, 5], color: 'var(--highlight-color)' }
  ],
  'B3-2T': [
    { row: 0, colRange: [0, 5], color: 'var(--primary-color)' },
    { row: 1, colRange: [0, 0], color: 'var(--tertiary-color)' },
    { row: 1, colRange: [1, 2], color: 'var(--highlight-color)' },
    { row: 1, colRange: [3, 3], color: 'var(--tertiary-color)' },
    { row: 1, colRange: [4, 4], color: 'var(--tertiary-color)' },
    { row: 1, colRange: [5, 5], color: 'var(--highlight-color)' },
    { row: 2, colRange: [0, 0], color: 'var(--tertiary-color)' },
    { row: 2, colRange: [1, 2], color: 'var(--highlight-color)' },
    { row: 2, colRange: [3, 3], color: 'var(--tertiary-color)' },
    { row: 2, colRange: [4, 4], color: 'var(--tertiary-color)' },
    { row: 2, colRange: [5, 5], color: 'var(--highlight-color)' },
    { row: 3, colRange: [0, 0], color: 'var(--tertiary-color)' },
    { row: 3, colRange: [1, 2], color: 'var(--highlight-color)' },
    { row: 3, colRange: [3, 3], color: 'var(--tertiary-color)' },
    { row: 3, colRange: [4, 4], color: 'var(--tertiary-color)' },
    { row: 3, colRange: [5, 5], color: 'var(--highlight-color)' },
    { row: 4, colRange: [0, 2], color: 'var(--secondary-color)' },
    { row: 4, colRange: [3, 5], color: 'var(--highlight-color)' },
    { row: 5, colRange: [0, 2], color: 'var(--secondary-color)' },
    { row: 5, colRange: [3, 5], color: 'var(--highlight-color)' },
    { row: 6, colRange: [0, 2], color: 'var(--secondary-color)' },
    { row: 6, colRange: [3, 5], color: 'var(--highlight-color)' }
  ],
  'B3-3P': [
    { row: 0, colRange: [0, 5], color: 'var(--primary-color)' },
    { row: 1, colRange: [0, 2], color: 'var(--highlight-color)' },
    { row: 1, colRange: [3, 5], color: 'var(--tertiary-color)' },
    { row: 2, colRange: [0, 2], color: 'var(--highlight-color)' },
    { row: 2, colRange: [3, 5], color: 'var(--tertiary-color)' },
    { row: 3, colRange: [0, 2], color: 'var(--highlight-color)' },
    { row: 3, colRange: [3, 5], color: 'var(--tertiary-color)' },
    { row: 4, colRange: [0, 2], color: 'var(--secondary-color)' },
    { row: 4, colRange: [3, 5], color: 'var(--highlight-color)' },
    { row: 5, colRange: [0, 2], color: 'var(--secondary-color)' },
    { row: 5, colRange: [3, 5], color: 'var(--highlight-color)' },
    { row: 6, colRange: [0, 2], color: 'var(--secondary-color)' },
    { row: 6, colRange: [3, 5], color: 'var(--highlight-color)' }
  ],
  'C5-1T': [
    { row: 0, colRange: [0, 5], color: 'var(--primary-color)' },
    { row: 1, colRange: [0, 0], color: 'var(--background-color)' },
    { row: 1, colRange: [1, 2], color: 'var(--highlight-color)' },
    { row: 1, colRange: [3, 5], color: 'var(--tertiary-color)' },
    { row: 2, colRange: [0, 0], color: 'var(--highlight-color)' },
    { row: 2, colRange: [1, 2], color: 'var(--highlight-color)' },
    { row: 2, colRange: [3, 5], color: 'var(--tertiary-color)' },
    { row: 3, colRange: [0, 0], color: 'var(--highlight-color)' },
    { row: 3, colRange: [1, 2], color: 'var(--highlight-color)' },
    { row: 3, colRange: [3, 5], color: 'var(--tertiary-color)' },
    { row: 4, colRange: [0, 2], color: 'var(--secondary-color)' },
    { row: 4, colRange: [3, 5], color: 'var(--highlight-color)' },
    { row: 5, colRange: [0, 2], color: 'var(--secondary-color)' },
    { row: 5, colRange: [3, 5], color: 'var(--highlight-color)' },
    { row: 6, colRange: [0, 2], color: 'var(--secondary-color)' },
    { row: 6, colRange: [3, 4], color: 'var(--highlight-color)' }
  ],
  'C5-2T': [
    { row: 0, colRange: [0, 5], color: 'var(--primary-color)' },
    { row: 1, colRange: [0, 1], color: 'var(--background-color)' },
    { row: 1, colRange: [2, 2], color: 'var(--highlight-color)' },
    { row: 1, colRange: [3, 5], color: 'var(--tertiary-color)' },
    { row: 2, colRange: [0, 0], color: 'var(--background-color)' },
    { row: 2, colRange: [1, 2], color: 'var(--highlight-color)' },
    { row: 2, colRange: [3, 5], color: 'var(--tertiary-color)' },
    { row: 3, colRange: [0, 0], color: 'var(--highlight-color)' },
    { row: 3, colRange: [1, 2], color: 'var(--highlight-color)' },
    { row: 3, colRange: [3, 5], color: 'var(--tertiary-color)' },
    { row: 4, colRange: [0, 2], color: 'var(--secondary-color)' },
    { row: 4, colRange: [3, 5], color: 'var(--highlight-color)' },
    { row: 5, colRange: [0, 2], color: 'var(--secondary-color)' },
    { row: 5, colRange: [3, 4], color: 'var(--highlight-color)' },
    { row: 6, colRange: [0, 2], color: 'var(--secondary-color)' },
    { row: 6, colRange: [3, 3], color: 'var(--highlight-color)' }
  ],
  'C5-3T': [
    { row: 0, colRange: [0, 5], color: 'var(--primary-color)' },
    { row: 1, colRange: [0, 2], color: 'var(--background-color)' },
    { row: 1, colRange: [3, 5], color: 'var(--tertiary-color)' },
    { row: 2, colRange: [0, 0], color: 'var(--background-color)' },
    { row: 2, colRange: [1, 1], color: 'var(--background-color)' },
    { row: 2, colRange: [2, 2], color: 'var(--highlight-color)' },
    { row: 2, colRange: [3, 5], color: 'var(--tertiary-color)' },
    { row: 3, colRange: [0, 0], color: 'var(--background-color)' },
    { row: 3, colRange: [1, 2], color: 'var(--highlight-color)' },
    { row: 3, colRange: [3, 5], color: 'var(--tertiary-color)' },
    { row: 4, colRange: [0, 2], color: 'var(--secondary-color)' },
    { row: 4, colRange: [3, 4], color: 'var(--highlight-color)' },
    { row: 5, colRange: [0, 2], color: 'var(--secondary-color)' },
    { row: 5, colRange: [3, 3], color: 'var(--highlight-color)' },
    { row: 6, colRange: [0, 2], color: 'var(--secondary-color)' },
  ],
  'C5-4T': [
  { row: 0, colRange: [0, 5], color: 'var(--primary-color)' },
    { row: 1, colRange: [0, 2], color: 'var(--background-color)' },
    { row: 1, colRange: [3, 5], color: 'var(--tertiary-color)' },
    { row: 2, colRange: [0, 0], color: 'var(--background-color)' },
    { row: 2, colRange: [1, 1], color: 'var(--background-color)' },
    { row: 2, colRange: [3, 5], color: 'var(--tertiary-color)' },
    { row: 3, colRange: [0, 1], color: 'var(--background-color)' },
    { row: 3, colRange: [2, 2], color: 'var(--highlight-color)' },
    { row: 3, colRange: [3, 5], color: 'var(--tertiary-color)' },
    { row: 4, colRange: [0, 2], color: 'var(--secondary-color)' },
    { row: 4, colRange: [3, 3], color: 'var(--highlight-color)' },
    { row: 5, colRange: [0, 2], color: 'var(--secondary-color)' },
    { row: 6, colRange: [0, 2], color: 'var(--secondary-color)' },
  ],
  'C5-5T': [
    { row: 0, colRange: [0, 5], color: 'var(--primary-color)' },
    { row: 1, colRange: [0, 2], color: 'var(--background-color)' },
    { row: 1, colRange: [3, 5], color: 'var(--tertiary-color)' },
    { row: 2, colRange: [0, 0], color: 'var(--background-color)' },
    { row: 2, colRange: [1, 1], color: 'var(--background-color)' },
    { row: 2, colRange: [2, 2], color: 'var(--background-color)' },
    { row: 2, colRange: [3, 5], color: 'var(--tertiary-color)' },
    { row: 3, colRange: [0, 0], color: 'var(--background-color)' },
    { row: 3, colRange: [1, 1], color: 'var(--background-color)' },
    { row: 3, colRange: [2, 2], color: 'var(--background-color)' },
    { row: 3, colRange: [3, 5], color: 'var(--tertiary-color)' },
    { row: 4, colRange: [0, 2], color: 'var(--secondary-color)' },
    { row: 5, colRange: [0, 2], color: 'var(--secondary-color)' },
    { row: 6, colRange: [0, 2], color: 'var(--secondary-color)' },
  ],
  'D5-1T': [
    { row: 0, colRange: [0, 5], color: 'var(--primary-color)' },
    { row: 1, colRange: [0, 2], color: 'var(--background-color)' },
    { row: 1, colRange: [3, 4], color: 'var(--tertiary-color)' },
    { row: 2, colRange: [0, 0], color: 'var(--background-color)' },
    { row: 2, colRange: [1, 1], color: 'var(--background-color)' },
    { row: 2, colRange: [2, 2], color: 'var(--background-color)' },
    { row: 2, colRange: [3, 5], color: 'var(--tertiary-color)' },
    { row: 3, colRange: [0, 0], color: 'var(--background-color)' },
    { row: 3, colRange: [1, 1], color: 'var(--background-color)' },
    { row: 3, colRange: [2, 2], color: 'var(--background-color)' },
    { row: 3, colRange: [3, 5], color: 'var(--tertiary-color)' },
    { row: 4, colRange: [0, 2], color: 'var(--secondary-color)' },
    { row: 5, colRange: [0, 2], color: 'var(--secondary-color)' },
    { row: 6, colRange: [1, 2], color: 'var(--secondary-color)' },
  ],
  'D5-2T': [
    { row: 0, colRange: [0, 5], color: 'var(--primary-color)' },
    { row: 1, colRange: [0, 2], color: 'var(--background-color)' },
    { row: 1, colRange: [3, 3], color: 'var(--tertiary-color)' },
    { row: 2, colRange: [0, 0], color: 'var(--background-color)' },
    { row: 2, colRange: [1, 1], color: 'var(--background-color)' },
    { row: 2, colRange: [2, 2], color: 'var(--background-color)' },
    { row: 2, colRange: [3, 4], color: 'var(--tertiary-color)' },
    { row: 3, colRange: [0, 0], color: 'var(--background-color)' },
    { row: 3, colRange: [1, 1], color: 'var(--background-color)' },
    { row: 3, colRange: [2, 2], color: 'var(--background-color)' },
    { row: 3, colRange: [3, 5], color: 'var(--tertiary-color)' },
    { row: 4, colRange: [0, 2], color: 'var(--secondary-color)' },
    { row: 5, colRange: [1, 2], color: 'var(--secondary-color)' },
    { row: 6, colRange: [2, 2], color: 'var(--secondary-color)' },
  ],
  'D5-3T': [
    { row: 0, colRange: [0, 5], color: 'var(--primary-color)' },
    { row: 1, colRange: [0, 5], color: 'var(--background-color)' },
    { row: 2, colRange: [0, 0], color: 'var(--background-color)' },
    { row: 2, colRange: [1, 1], color: 'var(--background-color)' },
    { row: 2, colRange: [2, 2], color: 'var(--background-color)' },
    { row: 2, colRange: [3, 3], color: 'var(--tertiary-color)' },
    { row: 3, colRange: [0, 0], color: 'var(--background-color)' },
    { row: 3, colRange: [1, 1], color: 'var(--background-color)' },
    { row: 3, colRange: [2, 2], color: 'var(--background-color)' },
    { row: 3, colRange: [3, 4], color: 'var(--tertiary-color)' },
    { row: 4, colRange: [1, 2], color: 'var(--secondary-color)' },
    { row: 5, colRange: [2, 2], color: 'var(--secondary-color)' },
    { row: 6, colRange: [0, 5], color: 'var(--background-color)' },
  ],
  'D5-4T': [
    { row: 0, colRange: [0, 5], color: 'var(--primary-color)' },
    { row: 1, colRange: [0, 5], color: 'var(--background-color)' },
    { row: 2, colRange: [0, 5], color: 'var(--background-color)' },
    { row: 3, colRange: [3, 3], color: 'var(--tertiary-color)' },
    { row: 4, colRange: [2, 2], color: 'var(--secondary-color)' },
    { row: 5, colRange: [0, 5], color: 'var(--background-color)' },
    { row: 6, colRange: [0, 5], color: 'var(--background-color)' },
  ],
  'D5-5T': [
    { row: 0, colRange: [0, 5], color: 'var(--primary-color)' },
    { row: 1, colRange: [0, 5], color: 'var(--background-color)' },
    { row: 2, colRange: [0, 5], color: 'var(--background-color)' },
    { row: 3, colRange: [0, 5], color: 'var(--background-color)' },
    { row: 4, colRange: [0, 5], color: 'var(--background-color)' },
    { row: 5, colRange: [0, 5], color: 'var(--background-color)' },
    { row: 6, colRange: [0, 5], color: 'var(--background-color)' },
  ],
  'E3-1T': [
    { row: 0, colRange: [1, 4], color: 'var(--primary-color)' },
    { row: 1, colRange: [0, 5], color: 'var(--background-color)' },
    { row: 2, colRange: [0, 5], color: 'var(--background-color)' },
    { row: 3, colRange: [0, 5], color: 'var(--background-color)' },
    { row: 4, colRange: [0, 5], color: 'var(--background-color)' },
    { row: 5, colRange: [0, 5], color: 'var(--background-color)' },
    { row: 6, colRange: [0, 5], color: 'var(--background-color)' },
  ],
  'E3-2T': [
    { row: 0, colRange: [2, 3], color: 'var(--primary-color)' },
    { row: 1, colRange: [0, 5], color: 'var(--background-color)' },
    { row: 2, colRange: [0, 5], color: 'var(--background-color)' },
    { row: 3, colRange: [0, 5], color: 'var(--background-color)' },
    { row: 4, colRange: [0, 5], color: 'var(--background-color)' },
    { row: 5, colRange: [0, 5], color: 'var(--background-color)' },
    { row: 6, colRange: [0, 5], color: 'var(--background-color)' },
  ],
  'E3-3P': [
    { row: 0, colRange: [0, 5], color: 'var(--background-color)' },
    { row: 1, colRange: [0, 5], color: 'var(--background-color)' },
    { row: 2, colRange: [0, 5], color: 'var(--background-color)' },
    { row: 3, colRange: [0, 5], color: 'var(--background-color)' },
    { row: 4, colRange: [0, 5], color: 'var(--background-color)' },
    { row: 5, colRange: [0, 5], color: 'var(--background-color)' },
    { row: 6, colRange: [0, 5], color: 'var(--background-color)' },
  ],
  'F3-1T': [
    { row: 0, colRange: [2, 3], color: 'var(--primary-color)' },
    { row: 1, colRange: [0, 5], color: 'var(--background-color)' },
    { row: 2, colRange: [0, 5], color: 'var(--background-color)' },
    { row: 3, colRange: [0, 5], color: 'var(--background-color)' },
    { row: 4, colRange: [0, 5], color: 'var(--background-color)' },
    { row: 5, colRange: [0, 5], color: 'var(--background-color)' },
    { row: 6, colRange: [0, 5], color: 'var(--background-color)' },
  ],
  'F3-2T': [
    { row: 0, colRange: [1, 4], color: 'var(--primary-color)' },
    { row: 1, colRange: [0, 5], color: 'var(--background-color)' },
    { row: 2, colRange: [0, 5], color: 'var(--background-color)' },
    { row: 3, colRange: [0, 5], color: 'var(--background-color)' },
    { row: 4, colRange: [0, 5], color: 'var(--background-color)' },
    { row: 5, colRange: [0, 5], color: 'var(--background-color)' },
    { row: 6, colRange: [0, 5], color: 'var(--background-color)' },
  ],
  'F3-3P': [
    { row: 0, colRange: [0, 5], color: 'var(--primary-color)' },
    { row: 1, colRange: [0, 5], color: 'var(--background-color)' },
    { row: 2, colRange: [0, 5], color: 'var(--background-color)' },
    { row: 3, colRange: [0, 5], color: 'var(--background-color)' },
    { row: 4, colRange: [0, 5], color: 'var(--background-color)' },
    { row: 5, colRange: [0, 5], color: 'var(--background-color)' },
    { row: 6, colRange: [0, 5], color: 'var(--background-color)' },
  ],
  'F3-3P': [
    { row: 0, colRange: [0, 5], color: 'var(--primary-color)' },
    { row: 1, colRange: [0, 5], color: 'var(--background-color)' },
    { row: 2, colRange: [0, 5], color: 'var(--background-color)' },
    { row: 3, colRange: [0, 5], color: 'var(--background-color)' },
    { row: 4, colRange: [0, 5], color: 'var(--background-color)' },
    { row: 5, colRange: [0, 5], color: 'var(--background-color)' },
    { row: 6, colRange: [0, 5], color: 'var(--background-color)' },
  ],
  'G5-1T': [
    { row: 0, colRange: [0, 5], color: 'var(--primary-color)' },
    { row: 1, colRange: [0, 0], color: 'var(--secondary-color)' },
    { row: 1, colRange: [5, 5], color: 'var(--tertiary-color)' },
    { row: 2, colRange: [0, 5], color: 'var(--background-color)' },
    { row: 3, colRange: [0, 5], color: 'var(--background-color)' },
    { row: 4, colRange: [0, 5], color: 'var(--background-color)' },
    { row: 5, colRange: [0, 5], color: 'var(--background-color)' },
    { row: 6, colRange: [0, 5], color: 'var(--background-color)' },
  ],
  'G5-2T': [
    { row: 0, colRange: [0, 5], color: 'var(--primary-color)' },
    { row: 1, colRange: [0, 1], color: 'var(--secondary-color)' },
    { row: 1, colRange: [4, 5], color: 'var(--tertiary-color)' },
    { row: 2, colRange: [0, 0], color: 'var(--secondary-color)' },
    { row: 2, colRange: [5, 5], color: 'var(--tertiary-color)' },
    { row: 3, colRange: [0, 5], color: 'var(--background-color)' },
    { row: 4, colRange: [0, 5], color: 'var(--background-color)' },
    { row: 5, colRange: [0, 5], color: 'var(--background-color)' },
    { row: 6, colRange: [0, 5], color: 'var(--background-color)' },
  ],
  'G5-3T': [
    { row: 0, colRange: [0, 5], color: 'var(--primary-color)' },
    { row: 1, colRange: [0, 2], color: 'var(--secondary-color)' },
    { row: 1, colRange: [3, 5], color: 'var(--tertiary-color)' },
    { row: 2, colRange: [0, 1], color: 'var(--secondary-color)' },
    { row: 2, colRange: [4, 5], color: 'var(--tertiary-color)' },
    { row: 3, colRange: [0, 0], color: 'var(--secondary-color)' },
    { row: 3, colRange: [5, 5], color: 'var(--tertiary-color)' },
    { row: 4, colRange: [0, 5], color: 'var(--background-color)' },
    { row: 5, colRange: [0, 5], color: 'var(--background-color)' },
    { row: 6, colRange: [0, 5], color: 'var(--background-color)' },
  ],'G5-4T': [
    { row: 0, colRange: [0, 5], color: 'var(--primary-color)' },
    { row: 1, colRange: [0, 2], color: 'var(--secondary-color)' },
    { row: 1, colRange: [3, 5], color: 'var(--tertiary-color)' },
    { row: 2, colRange: [0, 2], color: 'var(--secondary-color)' },
    { row: 2, colRange: [3, 5], color: 'var(--tertiary-color)' },
    { row: 3, colRange: [0, 1], color: 'var(--secondary-color)' },
    { row: 3, colRange: [4, 5], color: 'var(--tertiary-color)' },
    { row: 4, colRange: [0, 5], color: 'var(--background-color)' },
    { row: 5, colRange: [0, 5], color: 'var(--background-color)' },
    { row: 6, colRange: [0, 5], color: 'var(--background-color)' },
  ],
  'G5-5T': [
    { row: 0, colRange: [0, 5], color: 'var(--primary-color)' },
    { row: 1, colRange: [0, 2], color: 'var(--secondary-color)' },
    { row: 1, colRange: [3, 5], color: 'var(--tertiary-color)' },
    { row: 2, colRange: [0, 2], color: 'var(--secondary-color)' },
    { row: 2, colRange: [3, 5], color: 'var(--tertiary-color)' },
    { row: 3, colRange: [0, 2], color: 'var(--secondary-color)' },
    { row: 3, colRange: [3, 5], color: 'var(--tertiary-color)' },
    { row: 4, colRange: [0, 5], color: 'var(--background-color)' },
    { row: 5, colRange: [0, 5], color: 'var(--background-color)' },
    { row: 6, colRange: [0, 5], color: 'var(--background-color)' },
  ],
  'H5-1T': [
    { row: 0, colRange: [0, 5], color: 'var(--primary-color)' },
    { row: 1, colRange: [0, 2], color: 'var(--secondary-color)' },
    { row: 1, colRange: [3, 5], color: 'var(--tertiary-color)' },
    { row: 2, colRange: [0, 2], color: 'var(--secondary-color)' },
    { row: 2, colRange: [3, 5], color: 'var(--tertiary-color)' },
    { row: 3, colRange: [0, 2], color: 'var(--secondary-color)' },
    { row: 3, colRange: [3, 5], color: 'var(--tertiary-color)' },
    { row: 4, colRange: [2, 3], color: 'var(--highlight-color)' },
    { row: 5, colRange: [0, 5], color: 'var(--background-color)' },
    { row: 6, colRange: [0, 5], color: 'var(--background-color)' },
  ],
  'H5-2T': [
    { row: 0, colRange: [0, 5], color: 'var(--primary-color)' },
    { row: 1, colRange: [0, 2], color: 'var(--secondary-color)' },
    { row: 1, colRange: [3, 5], color: 'var(--tertiary-color)' },
    { row: 2, colRange: [0, 2], color: 'var(--secondary-color)' },
    { row: 2, colRange: [3, 5], color: 'var(--tertiary-color)' },
    { row: 3, colRange: [0, 2], color: 'var(--secondary-color)' },
    { row: 3, colRange: [3, 5], color: 'var(--tertiary-color)' },
    { row: 4, colRange: [1, 4], color: 'var(--highlight-color)' },
    { row: 5, colRange: [2, 3], color: 'var(--highlight-color)' },
    { row: 6, colRange: [0, 5], color: 'var(--background-color)' },
  ],
  'H5-3T': [
    { row: 0, colRange: [0, 5], color: 'var(--primary-color)' },
    { row: 1, colRange: [0, 2], color: 'var(--secondary-color)' },
    { row: 1, colRange: [3, 5], color: 'var(--tertiary-color)' },
    { row: 2, colRange: [0, 2], color: 'var(--secondary-color)' },
    { row: 2, colRange: [3, 5], color: 'var(--tertiary-color)' },
    { row: 3, colRange: [0, 2], color: 'var(--secondary-color)' },
    { row: 3, colRange: [3, 5], color: 'var(--tertiary-color)' },
    { row: 4, colRange: [0, 5], color: 'var(--highlight-color)' },
    { row: 5, colRange: [1, 4], color: 'var(--highlight-color)' },
    { row: 6, colRange: [2, 3], color: 'var(--highlight-color)' },
  ],
  'H5-4T': [
    { row: 0, colRange: [0, 5], color: 'var(--primary-color)' },
    { row: 1, colRange: [0, 2], color: 'var(--secondary-color)' },
    { row: 1, colRange: [3, 5], color: 'var(--tertiary-color)' },
    { row: 2, colRange: [0, 2], color: 'var(--secondary-color)' },
    { row: 2, colRange: [3, 5], color: 'var(--tertiary-color)' },
    { row: 3, colRange: [0, 2], color: 'var(--secondary-color)' },
    { row: 3, colRange: [3, 5], color: 'var(--tertiary-color)' },
    { row: 4, colRange: [0, 5], color: 'var(--highlight-color)' },
    { row: 5, colRange: [0, 5], color: 'var(--highlight-color)' },
    { row: 6, colRange: [1, 4], color: 'var(--highlight-color)' },
  ],
  'H5-5T': [
    { row: 0, colRange: [0, 5], color: 'var(--primary-color)' },
    { row: 1, colRange: [0, 2], color: 'var(--secondary-color)' },
    { row: 1, colRange: [3, 5], color: 'var(--tertiary-color)' },
    { row: 2, colRange: [0, 2], color: 'var(--secondary-color)' },
    { row: 2, colRange: [3, 5], color: 'var(--tertiary-color)' },
    { row: 3, colRange: [0, 2], color: 'var(--secondary-color)' },
    { row: 3, colRange: [3, 5], color: 'var(--tertiary-color)' },
    { row: 4, colRange: [0, 5], color: 'var(--highlight-color)' },
    { row: 5, colRange: [0, 5], color: 'var(--highlight-color)' },
    { row: 6, colRange: [0, 5], color: 'var(--highlight-color)' },
  ],
};

const layoutManager = (cell, row, col, layout) => {
  const rules = layoutRules[layout];
  if (rules) {
    const rule = rules.find(r => r.row === row && col >= r.colRange[0] && col <= r.colRange[1]);
    if (rule) {
      cell.style.backgroundColor = rule.color;
    } else {
      cell.style.backgroundColor = 'var(--background-color)';
    }
  } else {
    cell.style.backgroundColor = 'var(--background-color)';
  }
};

const createGrid = (rows, cols, layout) => {
  const container = document.getElementById('design-animation-container');
  container.innerHTML = ''; // Clear any existing cells
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const cell = document.createElement('div');
      cell.classList.add('design-animation-cell');
      layoutManager(cell, i, j, layout);
      container.appendChild(cell);
    }
  }
};


//   createGrid(7, 6, "H5-5P");

const sequence = 

[
    "home-P", 
    "A3-1T", "A3-2T", "A3-3P", 
    "B3-1T", "B3-2T", "B3-3P", 
    "C5-1T", "C5-2T", "C5-3T", "C5-4T", "C5-5T",
    "D5-1T", "D5-2T", "D5-3T", "D5-4T", "D5-5T",
    "E3-1T", "E3-2T", "E3-3P",
    "F3-1T", "F3-2T", "F3-3P",
    "G5-1T", "G5-2T", "G5-3T", "G5-4T", "G5-5T",
    "H5-1T", "H5-2T", "H5-3T", "H5-4T", "H5-5T",
];
let currentIndex = 0;

const pause = (seconds) => {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000));
};

const cycleLayouts = async () => {
    createGrid(7, 6, sequence[currentIndex]);
    let finalChar = sequence[currentIndex].charAt(sequence[currentIndex].length - 1);
    if (finalChar === 'P') {
        await pause(1);
    } else if (finalChar === 'T') {
        await pause(0.25);
    }
    currentIndex = (currentIndex + 1) % sequence.length;
};

const startCycle = async () => {
    while (true) {
        await cycleLayouts();
    }
};

startCycle();

// Initialize the grid with the first layout
createGrid(7, 6, sequence[0]);


