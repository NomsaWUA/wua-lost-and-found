const ItemFactory = require('./itemFactory');

// Test 1: Factory creates a LostItem correctly
test('creates a lost item with correct type', () => {
  const item = ItemFactory.create('lost', {
    userId: 1,
    itemName: 'Black Phone',
    category: 'Electronics',
    description: 'Samsung phone',
    dateLost: '2025-04-15',
    location: 'Library'
  });
  expect(item.type).toBe('lost');
});

// Test 2: Factory creates a FoundItem correctly
test('creates a found item with correct type', () => {
  const item = ItemFactory.create('found', {
    userId: 2,
    itemName: 'Student ID',
    category: 'Documents',
    description: 'WUA ID card',
    dateFound: '2025-04-17',
    location: 'Canteen'
  });
  expect(item.type).toBe('found');
});

// Test 3: Lost item has correct status
test('lost item status is active by default', () => {
  const item = ItemFactory.create('lost', {
    userId: 1,
    itemName: 'Keys',
    category: 'Keys',
    description: 'Red keyring',
    dateLost: '2025-04-10',
    location: 'Hostel'
  });
  expect(item.status).toBe('active');
});

// Test 4: Found item has correct status
test('found item status is unclaimed by default', () => {
  const item = ItemFactory.create('found', {
    userId: 3,
    itemName: 'Backpack',
    category: 'Bags',
    description: 'Blue bag',
    dateFound: '2025-04-18',
    location: 'Lecture Hall'
  });
  expect(item.status).toBe('unclaimed');
});

// Test 5: markReturned changes status
test('markReturned changes found item status to returned', () => {
  const item = ItemFactory.create('found', {
    userId: 3,
    itemName: 'Laptop',
    category: 'Electronics',
    description: 'Dell laptop',
    dateFound: '2025-04-20',
    location: 'Library'
  });
  item.markReturned();
  expect(item.status).toBe('returned');
});

// Test 6: Invalid type throws error
test('throws error for unknown item type', () => {
  expect(() => {
    ItemFactory.create('stolen', { itemName: 'Phone' });
  }).toThrow();
});

// Test 7: Item name is saved correctly
test('item name is stored correctly', () => {
  const item = ItemFactory.create('lost', {
    userId: 5,
    itemName: 'Samsung Galaxy A54',
    category: 'Electronics',
    description: 'Black phone',
    dateLost: '2025-04-15',
    location: 'Library'
  });
  expect(item.itemName).toBe('Samsung Galaxy A54');
});
