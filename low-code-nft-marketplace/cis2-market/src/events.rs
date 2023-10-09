/// For adding a  custom event to marketplace when token is delisted/removed from marketplace
use concordium_cis2::{IsTokenAmount, IsTokenId};
use concordium_std::*;

/// Custom Event
pub const TOKEN_DELIST_EVENT_TAG: u8 = 0u8;

/// The RegistrationEvent is logged when a new public key is registered.
#[derive(Debug, Serialize, SchemaType)]
pub struct TokenDelistedEvent<T: IsTokenId> {
    pub token_id: T,
    pub address: ContractAddress,
    // amount: A
}

/// need to serialize event for log
/// not used, but custom event may be needed.
/// following event section added to show so we are allowing dead_code just to
/// keep it as an example
#[allow(dead_code)]
#[derive(Debug, Serial)]
pub enum MarketplaceEvent<T: IsTokenId> {
    Delist(TokenDelistedEvent<T>),
}

// Implementing a custom schemaType to the `Event` combining all CIS2/CIS3
// events.
impl<T: IsTokenId> schema::SchemaType for MarketplaceEvent<T> {
    fn get_type() -> schema::Type {
        let mut event_map = collections::BTreeMap::new();
        event_map.insert(
            TOKEN_DELIST_EVENT_TAG,
            (
                "Delist".to_string(),
                schema::Fields::Named(vec![
                    (String::from("account"), AccountAddress::get_type()),
                    (String::from("public_key"), PublicKeyEd25519::get_type()),
                ]),
            ),
        );
        schema::Type::TaggedEnum(event_map)
    }
}

// impl<T: IsTokenId> Serial for MarketplaceEvent<T> {
//     fn serial<W: Write>(&self, out: &mut W) -> Result<(), W::Err> {
//         match self {
//             MarketplaceEvent::Delist(event) => {
//                 out.write_u8(TOKEN_DELIST_EVENT_TAG)?;
//                 event.serial(out)
//             }
//         }
//     }
// }

// impl<T: IsTokenId> Deserial for MarketplaceEvent<T> {
//     fn deserial<R: Read>(source: &mut R) -> ParseResult<Self> {
//         let tag = source.read_u8()?;
//         match tag {
//             TOKEN_DELIST_EVENT_TAG => {
//                 TokenDelistedEvent::<T>::deserial(source).map(MarketplaceEvent::Delist)
//             }
//             _ => Err(ParseError::default()),
//         }
//     }
// }
