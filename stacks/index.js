import StorageStack from './StorageStack';

export default function main(app) {
  // Set default runtime for all functions

  new StorageStack(app, "storage");

  // Add more stacks
}
