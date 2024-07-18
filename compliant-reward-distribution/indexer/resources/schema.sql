-- Table containing indexer settings
CREATE TABLE IF NOT EXISTS settings (
  -- Primary key.
  id BOOL PRIMARY KEY DEFAULT true CHECK (id), -- To constrain table to have a single row.
  -- The genesis block hash as querried from the node. This will be set the frist time the indexer is started.
  -- Re-starting the indexer will check if its settings are compatible with
  -- the stored indexer setting to prevent corrupting the database.
  genesis_block_hash BYTEA NOT NULL,
  -- Start block that was indexed.
  start_block_height INT8,
  -- The last block height that was processed.
  latest_processed_block_height INT8
);

-- Table containing new accounts created on the blockchain which are eligible
-- for an reward after completing some tasks/checks.
CREATE TABLE IF NOT EXISTS accounts (
  -- Primary key.
  id INT8 PRIMARY KEY,
  -- The account address created on chain.
  account_address BYTEA NOT NULL,
  -- The timestamp of the block when the account was created on chain.
  block_time TIMESTAMP WITH TIME ZONE NOT NULL,
  -- The transaction hash of the transaction that created the account on chain.
  transaction_hash BYTEA NOT NULL,
  -- A boolean specifying if the account has already claimed.
  claimed BOOL NOT NULL,
  -- A link to a twitter post submitted by the above account address (task 1).
  twitter_post_link BYTEA,
  -- A boolean specifying if the identity associated with the account is eligible for the reward (task 2).
  -- An associated ZK proof was verfied by this backend before this flag is set.
  zk_proof_valid BOOL,
  -- A version that specifies the setting of the ZK proof during the verification. This enables us
  -- to update the ZK proof verification logic in the future and invalidate older proofs.
  zk_proof_version INT8,
  -- A hash of the revealed `firstName|lastName|passportNumber` to prevent
  -- claiming with different accounts for the same identity.
  uniqueness_hash BYTEA
);

CREATE TABLE IF NOT EXISTS item_status_changed_events (
  -- Primary key.
  id INT8 PRIMARY KEY,
  -- The timestamp of the block the event was included in.
  block_time TIMESTAMP WITH TIME ZONE NOT NULL,
  -- The transaction hash that the event was included in.
  transaction_hash BYTEA NOT NULL,
  -- The index from the array of logged events in a transaction.
  event_index INT8 NOT NULL,
  -- The item's id as logged in the event.
  item_id INT8 NOT NULL
);

-- Table containing item_status_changed_events successfully submitted to the database from the contract monitored.
CREATE TABLE IF NOT EXISTS item_status_changed_events (
  -- Primary key.
  id INT8 PRIMARY KEY,
  -- The timestamp of the block the event was included in.
  block_time TIMESTAMP WITH TIME ZONE NOT NULL,
  -- The transaction hash that the event was included in.
  transaction_hash BYTEA NOT NULL,
  -- The index from the array of logged events in a transaction.
  event_index INT8 NOT NULL,
  -- The item's id as logged in the event.
  item_id INT8 NOT NULL
);

-- Table containing item_created_events successfully submitted to the database from the contract monitored.
CREATE TABLE IF NOT EXISTS item_created_events (
  -- Primary key.
  id INT8 PRIMARY KEY,
  -- The timestamp of the block the event was included in.
  block_time TIMESTAMP WITH TIME ZONE NOT NULL,
  -- The transaction hash that the event was included in.
  transaction_hash BYTEA NOT NULL,
  -- The index from the array of logged events in a transaction.
  event_index INT8 NOT NULL,
  -- The item's id as logged in the event.
  item_id INT8 NOT NULL,
  -- The item's metadata_url as logged in the event.
  metadata_url BYTEA NOT NULL
);

-- -- Improve performance on queries for events with given item_id.
-- CREATE INDEX IF NOT EXISTS item_changed_index ON item_status_changed_events (item_id);
-- -- Improve performance on queries for events with given current status.
-- CREATE INDEX IF NOT EXISTS current_status_index ON item_status_changed_events (new_status);
-- -- Improve performance on queries for events with given item_id.
-- CREATE INDEX IF NOT EXISTS item_created_index ON item_created_events (item_id);
