// storage.js — Centralized localStorage utility
// All reads/writes go through here. This way if we ever
// swap localStorage for an API, we only change ONE file.

const Storage = {

  // Save any object under a key
  save(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },

  // Load and parse a stored value; returns null if missing
  load(key) {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  },

  // Remove a single key
  remove(key) {
    localStorage.removeItem(key);
  },

  // Wipe everything (used for "reset" / logout later)
  clear() {
    localStorage.clear();
  }
};