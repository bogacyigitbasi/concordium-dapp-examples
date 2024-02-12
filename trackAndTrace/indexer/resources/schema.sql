-- Table containing server settings
CREATE TABLE IF NOT EXISTS settings (
  -- Primary key.
  id BOOL PRIMARY KEY DEFAULT true CHECK (id), -- To constrain table to have a single row.
  -- Contract index.
  contract_index INT8 NOT NULL,
  -- Contract subindex.
  contract_subindex INT8 NOT NULL
);

-- Table containing item_status_changed_events successfully submitted to the database from the contract monitored.
CREATE TABLE IF NOT EXISTS item_status_changed_events (
  -- Primary key.
  id INT8 PRIMARY KEY,
  -- The block height that the event was recorded in.
  block_height INT8 NOT NULL,
  -- The transaction hash that the event was recorded in.
  transaction_hash BYTEA NOT NULL,
  -- The index from the array of logged events in a transaction.
  event_index INT8 NOT NULL,
  -- The item's id as logged in the event.
  item_id INT8 NOT NULL,
  -- The item's new status as logged in the event.
  new_status INT8 NOT NULL,
  -- Any additional data encoded as generic bytes as logged in the event. Usecase-specific data can be included here such as temperature, longitude, latitude, ... .
  additional_data BYTEA NOT NULL,
);

-- Table containing item_created_events successfully submitted to the database from the contract monitored.
CREATE TABLE IF NOT EXISTS item_created_events (
  -- Primary key.
  id INT8 PRIMARY KEY,
  -- The block height that the event was recorded in.
  block_height INT8 NOT NULL,
  -- The transaction hash that the event was recorded in.
  transaction_hash BYTEA NOT NULL,
  -- The index from the array of logged events in a transaction.
  event_index INT8 NOT NULL,
  -- The item's id as logged in the event.
  item_id INT8 NOT NULL,
  -- The item's metadata_url as logged in the event.
  metadata_url BYTEA NOT NULL,
);

-- Improve performance on queries for events with given item_id.
CREATE INDEX IF NOT EXISTS item_changed_index ON item_status_changed_events (item_id);
-- Improve performance on queries for events with given current status.
CREATE INDEX IF NOT EXISTS current_status_index ON item_status_changed_events (new_status);
-- Improve performance on queries for events with given item_id.
CREATE INDEX IF NOT EXISTS item_created_index ON item_created_events (item_id);
