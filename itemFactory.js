class LostItem {
  constructor(data) {
    this.type = 'lost';
    this.userId = data.userId;
    this.itemName = data.itemName;
    this.category = data.category;
    this.description = data.description;
    this.dateLost = data.dateLost;
    this.location = data.location;
    this.status = 'active';
  }
  save() {
    console.log("Lost item saved: " + this.itemName);
    console.log("Category: " + this.category);
    console.log("Location: " + this.location);
    console.log("Status: " + this.status);
  }
  getDetails() {
    return "LOST: " + this.itemName + " | " + this.category + " | " + this.location;
  }
}

class FoundItem {
  constructor(data) {
    this.type = 'found';
    this.userId = data.userId;
    this.itemName = data.itemName;
    this.category = data.category;
    this.description = data.description;
    this.dateFound = data.dateFound;
    this.location = data.location;
    this.status = 'unclaimed';
  }
  save() {
    console.log("Found item saved: " + this.itemName);
    console.log("Category: " + this.category);
    console.log("Location: " + this.location);
    console.log("Status: " + this.status);
  }
  markReturned() {
    this.status = 'returned';
    console.log("Item marked as returned: " + this.itemName);
  }
  getDetails() {
    return "FOUND: " + this.itemName + " | " + this.category + " | " + this.location;
  }
}

class ItemFactory {
  static create(type, data) {
    if (type === 'lost') return new LostItem(data);
    if (type === 'found') return new FoundItem(data);
    throw new Error("Unknown item type: " + type);
  }
}

console.log("=== WUA Lost and Found - Factory Pattern ===\n");

const lostPhone = ItemFactory.create('lost', {
  userId: 5,
  itemName: 'Black Samsung Galaxy A54',
  category: 'Electronics',
  description: 'Black phone with cracked screen',
  dateLost: '2025-04-15',
  location: 'Library Block B'
});
lostPhone.save();

console.log("\n---\n");

const foundID = ItemFactory.create('found', {
  userId: 12,
  itemName: 'WUA Student ID Card',
  category: 'Documents',
  description: 'Found near canteen',
  dateFound: '2025-04-17',
  location: 'Canteen'
});
foundID.save();

console.log("\n---\n");

foundID.markReturned();

console.log("\n---\n");

console.log("Item 1:", lostPhone.getDetails());
console.log("Item 2:", foundID.getDetails());

module.exports = ItemFactory;
