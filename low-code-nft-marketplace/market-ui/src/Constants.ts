import { Buffer } from "buffer/";
import { Cis2ContractInfo, ContractInfo } from "common-ui";

import { ModuleReference } from "@concordium/web-sdk";

/**
 * Contract Address for Marketplace. You should specify your contract's index when you initialized it.
 */
export const MARKET_CONTRACT_ADDRESS = {
  index: BigInt(4502),
  subindex: BigInt(0),
};

/**
 * Marketplace Contract Schema.
 * Serialization code depends on this Schema. Any changes to the schema should have a corresponding change in MarketplaceDeserialzer.ts code.
 */
// Module Reference and Contract Schema for the Marketplace Contract
// Both module ref and the contract schema should be changed after a new contract deployed (if there are changes)
const MARKET_CONTRACT_SCHEMA =
  "//8DAQAAAAoAAABNYXJrZXQtTkZUAQAUAAEAAAAKAAAAY29tbWlzc2lvbgMDAAAAAwAAAGFkZAAUAAUAAAAUAAAAY2lzX2NvbnRyYWN0X2FkZHJlc3MMCAAAAHRva2VuX2lkHQAFAAAAcHJpY2UKBwAAAHJveWFsdHkDCAAAAHF1YW50aXR5GyUAAAAEAAAAbGlzdAEUAQEAAAAQARQABwAAAAgAAAB0b2tlbl9pZB0ACAAAAGNvbnRyYWN0DAUAAABwcmljZQoFAAAAb3duZXILBwAAAHJveWFsdHkDDQAAAHByaW1hcnlfb3duZXILCAAAAHF1YW50aXR5GyUAAAAIAAAAdHJhbnNmZXIAFAAFAAAAFAAAAGNpc19jb250cmFjdF9hZGRyZXNzDAgAAAB0b2tlbl9pZB0AAgAAAHRvCwUAAABvd25lcgsIAAAAcXVhbnRpdHkbJQAAAAA";

export const MARKETPLACE_CONTRACT_INFO: ContractInfo = {
  contractName: "Market-NFT",
  schemaBuffer: Buffer.from(MARKET_CONTRACT_SCHEMA, "base64"),
  moduleRef: new ModuleReference("1b0ef0aafc4dc12edcbb17ef756dfce300bf8bb73993ec00411ad5b376dbe7aa"),
};
// Module Reference and Contract Schema for the CIS2-Multi
// Both module ref and the contract schema should be changed after a new contract deployed (if there are changes)
const MULTI_CONTRACT_MODULE_REF = "dc5753eabb858a5a2420e7fa9bcc38cf92c0b031bb193fb9161a51a0ed4904b2";
const MULTI_CONTRACT_SCHEMA = "//8DAQAAAAoAAABjaXMyX211bHRpAAoAAAAJAAAAYmFsYW5jZU9mBhABFAACAAAACAAAAHRva2VuX2lkHQAHAAAAYWRkcmVzcxUCAAAABwAAAEFjY291bnQBAQAAAAsIAAAAQ29udHJhY3QBAQAAAAwQARslAAAAFQQAAAAOAAAASW52YWxpZFRva2VuSWQCEQAAAEluc3VmZmljaWVudEZ1bmRzAgwAAABVbmF1dGhvcml6ZWQCBgAAAEN1c3RvbQEBAAAAFQYAAAALAAAAUGFyc2VQYXJhbXMCBwAAAExvZ0Z1bGwCDAAAAExvZ01hbGZvcm1lZAITAAAASW52YWxpZENvbnRyYWN0TmFtZQIMAAAAQ29udHJhY3RPbmx5AhMAAABJbnZva2VDb250cmFjdEVycm9yAgQAAABtaW50BBQAAgAAAAUAAABvd25lchUCAAAABwAAAEFjY291bnQBAQAAAAsIAAAAQ29udHJhY3QBAQAAAAwGAAAAdG9rZW5zEgIdABQAAgAAAAwAAAB0b2tlbl9hbW91bnQbJQAAAAwAAABtZXRhZGF0YV91cmwUAAIAAAADAAAAdXJsFgEEAAAAaGFzaBUCAAAABAAAAE5vbmUCBAAAAFNvbWUBAQAAAB4gAAAAFQQAAAAOAAAASW52YWxpZFRva2VuSWQCEQAAAEluc3VmZmljaWVudEZ1bmRzAgwAAABVbmF1dGhvcml6ZWQCBgAAAEN1c3RvbQEBAAAAFQYAAAALAAAAUGFyc2VQYXJhbXMCBwAAAExvZ0Z1bGwCDAAAAExvZ01hbGZvcm1lZAITAAAASW52YWxpZENvbnRyYWN0TmFtZQIMAAAAQ29udHJhY3RPbmx5AhMAAABJbnZva2VDb250cmFjdEVycm9yAg8AAABvblJlY2VpdmluZ0NJUzIDFQQAAAAOAAAASW52YWxpZFRva2VuSWQCEQAAAEluc3VmZmljaWVudEZ1bmRzAgwAAABVbmF1dGhvcml6ZWQCBgAAAEN1c3RvbQEBAAAAFQYAAAALAAAAUGFyc2VQYXJhbXMCBwAAAExvZ0Z1bGwCDAAAAExvZ01hbGZvcm1lZAITAAAASW52YWxpZENvbnRyYWN0TmFtZQIMAAAAQ29udHJhY3RPbmx5AhMAAABJbnZva2VDb250cmFjdEVycm9yAgoAAABvcGVyYXRvck9mBhABFAACAAAABQAAAG93bmVyFQIAAAAHAAAAQWNjb3VudAEBAAAACwgAAABDb250cmFjdAEBAAAADAcAAABhZGRyZXNzFQIAAAAHAAAAQWNjb3VudAEBAAAACwgAAABDb250cmFjdAEBAAAADBABARUEAAAADgAAAEludmFsaWRUb2tlbklkAhEAAABJbnN1ZmZpY2llbnRGdW5kcwIMAAAAVW5hdXRob3JpemVkAgYAAABDdXN0b20BAQAAABUGAAAACwAAAFBhcnNlUGFyYW1zAgcAAABMb2dGdWxsAgwAAABMb2dNYWxmb3JtZWQCEwAAAEludmFsaWRDb250cmFjdE5hbWUCDAAAAENvbnRyYWN0T25seQITAAAASW52b2tlQ29udHJhY3RFcnJvcgIPAAAAc2V0SW1wbGVtZW50b3JzBBQAAgAAAAIAAABpZBYADAAAAGltcGxlbWVudG9ycxACDBUEAAAADgAAAEludmFsaWRUb2tlbklkAhEAAABJbnN1ZmZpY2llbnRGdW5kcwIMAAAAVW5hdXRob3JpemVkAgYAAABDdXN0b20BAQAAABUGAAAACwAAAFBhcnNlUGFyYW1zAgcAAABMb2dGdWxsAgwAAABMb2dNYWxmb3JtZWQCEwAAAEludmFsaWRDb250cmFjdE5hbWUCDAAAAENvbnRyYWN0T25seQITAAAASW52b2tlQ29udHJhY3RFcnJvcgIIAAAAc3VwcG9ydHMGEAEWABABFQMAAAAJAAAATm9TdXBwb3J0AgcAAABTdXBwb3J0AgkAAABTdXBwb3J0QnkBAQAAABAADBUEAAAADgAAAEludmFsaWRUb2tlbklkAhEAAABJbnN1ZmZpY2llbnRGdW5kcwIMAAAAVW5hdXRob3JpemVkAgYAAABDdXN0b20BAQAAABUGAAAACwAAAFBhcnNlUGFyYW1zAgcAAABMb2dGdWxsAgwAAABMb2dNYWxmb3JtZWQCEwAAAEludmFsaWRDb250cmFjdE5hbWUCDAAAAENvbnRyYWN0T25seQITAAAASW52b2tlQ29udHJhY3RFcnJvcgINAAAAdG9rZW5NZXRhZGF0YQYQAR0AEAEUAAIAAAADAAAAdXJsFgEEAAAAaGFzaBUCAAAABAAAAE5vbmUCBAAAAFNvbWUBAQAAAB4gAAAAFQQAAAAOAAAASW52YWxpZFRva2VuSWQCEQAAAEluc3VmZmljaWVudEZ1bmRzAgwAAABVbmF1dGhvcml6ZWQCBgAAAEN1c3RvbQEBAAAAFQYAAAALAAAAUGFyc2VQYXJhbXMCBwAAAExvZ0Z1bGwCDAAAAExvZ01hbGZvcm1lZAITAAAASW52YWxpZENvbnRyYWN0TmFtZQIMAAAAQ29udHJhY3RPbmx5AhMAAABJbnZva2VDb250cmFjdEVycm9yAggAAAB0cmFuc2ZlcgQQARQABQAAAAgAAAB0b2tlbl9pZB0ABgAAAGFtb3VudBslAAAABAAAAGZyb20VAgAAAAcAAABBY2NvdW50AQEAAAALCAAAAENvbnRyYWN0AQEAAAAMAgAAAHRvFQIAAAAHAAAAQWNjb3VudAEBAAAACwgAAABDb250cmFjdAECAAAADBYBBAAAAGRhdGEQAQIVBAAAAA4AAABJbnZhbGlkVG9rZW5JZAIRAAAASW5zdWZmaWNpZW50RnVuZHMCDAAAAFVuYXV0aG9yaXplZAIGAAAAQ3VzdG9tAQEAAAAVBgAAAAsAAABQYXJzZVBhcmFtcwIHAAAATG9nRnVsbAIMAAAATG9nTWFsZm9ybWVkAhMAAABJbnZhbGlkQ29udHJhY3ROYW1lAgwAAABDb250cmFjdE9ubHkCEwAAAEludm9rZUNvbnRyYWN0RXJyb3ICDgAAAHVwZGF0ZU9wZXJhdG9yBBABFAACAAAABgAAAHVwZGF0ZRUCAAAABgAAAFJlbW92ZQIDAAAAQWRkAggAAABvcGVyYXRvchUCAAAABwAAAEFjY291bnQBAQAAAAsIAAAAQ29udHJhY3QBAQAAAAwVBAAAAA4AAABJbnZhbGlkVG9rZW5JZAIRAAAASW5zdWZmaWNpZW50RnVuZHMCDAAAAFVuYXV0aG9yaXplZAIGAAAAQ3VzdG9tAQEAAAAVBgAAAAsAAABQYXJzZVBhcmFtcwIHAAAATG9nRnVsbAIMAAAATG9nTWFsZm9ybWVkAhMAAABJbnZhbGlkQ29udHJhY3ROYW1lAgwAAABDb250cmFjdE9ubHkCEwAAAEludm9rZUNvbnRyYWN0RXJyb3ICBAAAAHZpZXcBFAACAAAABQAAAHN0YXRlEAIPFQIAAAAHAAAAQWNjb3VudAEBAAAACwgAAABDb250cmFjdAEBAAAADBQAAgAAAAgAAABiYWxhbmNlcxACDx0AGyUAAAAJAAAAb3BlcmF0b3JzEAIVAgAAAAcAAABBY2NvdW50AQEAAAALCAAAAENvbnRyYWN0AQEAAAAMBgAAAHRva2VucxACHQABHwUAAAD7DQAAAFRva2VuTWV0YWRhdGEAAgAAAAgAAAB0b2tlbl9pZB0ADAAAAG1ldGFkYXRhX3VybBQAAgAAAAMAAAB1cmwWAQQAAABoYXNoFQIAAAAEAAAATm9uZQIEAAAAU29tZQEBAAAAHiAAAAD8DgAAAFVwZGF0ZU9wZXJhdG9yAAMAAAAGAAAAdXBkYXRlFQIAAAAGAAAAUmVtb3ZlAgMAAABBZGQCBQAAAG93bmVyFQIAAAAHAAAAQWNjb3VudAEBAAAACwgAAABDb250cmFjdAEBAAAADAgAAABvcGVyYXRvchUCAAAABwAAAEFjY291bnQBAQAAAAsIAAAAQ29udHJhY3QBAQAAAAz9BAAAAEJ1cm4AAwAAAAgAAAB0b2tlbl9pZB0ABgAAAGFtb3VudBslAAAABQAAAG93bmVyFQIAAAAHAAAAQWNjb3VudAEBAAAACwgAAABDb250cmFjdAEBAAAADP4EAAAATWludAADAAAACAAAAHRva2VuX2lkHQAGAAAAYW1vdW50GyUAAAAFAAAAb3duZXIVAgAAAAcAAABBY2NvdW50AQEAAAALCAAAAENvbnRyYWN0AQEAAAAM/wgAAABUcmFuc2ZlcgAEAAAACAAAAHRva2VuX2lkHQAGAAAAYW1vdW50GyUAAAAEAAAAZnJvbRUCAAAABwAAAEFjY291bnQBAQAAAAsIAAAAQ29udHJhY3QBAQAAAAwCAAAAdG8VAgAAAAcAAABBY2NvdW50AQEAAAALCAAAAENvbnRyYWN0AQEAAAAM";
export const CIS2_MULTI_CONTRACT_INFO: Cis2ContractInfo = {
  contractName: "cis2_multi",
  moduleRef: new ModuleReference(MULTI_CONTRACT_MODULE_REF),
  schemaBuffer: Buffer.from(MULTI_CONTRACT_SCHEMA, "base64"),
  tokenIdByteSize: 1,
};
export const IPFS_GATEWAY_URL = "https://gateway.pinata.cloud/ipfs/";

// Default value of the new marketplace contract init flag is false.
// It needs to be set as true in order to allow to create a new marketplace contract instance
export const CREATE_NEW_MARKETPLACE = true;

// Marketplace has the minting tool as a subtool, set true if the minting tool is required instead of the marketplace.
export const MINTING_UI_ONLY = false;

export const CONNCORDIUM_NODE_ENDPOINT = "https://grpc.testnet.concordium.com";
export const CONCORDIUM_NODE_PORT = 20000;
