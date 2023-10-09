//! Provides error types which can be returned by Marketplace Contract.
//! Read more about errors which can be returned by a Concordium Contract [here](https://developer.concordium.software/en/mainnet/smart-contracts/guides/custom-errors.html)

use concordium_std::*;

#[derive(Debug, Reject, Serial, SchemaType)]
pub enum MarketplaceError {
    ParseParams,
    CalledByAContract,
    TokenNotListed,
    Cis2ClientError,
    CollectionNotCis2,
    InvalidAmountPaid,
    InvokeTransferError,
    NoBalance,
    NotOperator,
    InvalidCommission,
    InvalidTokenQuantity,
    InvalidRoyalty,
    Unauthorized,
    LogFull,
    LogMalformed,
}

/// Mapping the logging errors to ContractError.
impl From<LogError> for MarketplaceError {
    fn from(le: LogError) -> Self {
        match le {
            LogError::Full => Self::LogFull,
            LogError::Malformed => Self::LogMalformed,
        }
    }
}
