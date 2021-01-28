(function () {
  const FIRM_NAME_ID = '00N30000003ueVA';
  const FIRM_NAME = 'Robinhood Markets, Inc.';
  const FIRM_TYPE_ID = '00N30000003ueVF';
  const FIRM_TYPE = 'Broker-Dealer';
  const FIRM_SPOKESPERSON_ID = '00N30000003ueVK';
  const FIRM_SPOKESPERSON = 'Baiju Bhatt';
  const FIRM_ADDRESS_ID = '00N30000003ueVP';
  const FIRM_ADDRESS = '';
  const FIRM_CITY_ID = '00N30000003ueVG';
  const FIRM_CITY = 'Menlo Park';
  const FIRM_STATE_ID = '00N30000003ueVV';
  const FIRM_STATE = 'FLORIDA';
  const FIRM_ZIP_ID = '00N30000003ueWc';
  const FIRM_ZIP = '';
  const FIRM_COUNTRY_ID = '00N30000003ueVH';
  const FIRM_COUNTRY = 'UNITED STATES';

  const SECURITY_TYPE_ID = '00N30000003ueWd';
  const SECURITY_TYPE = 'Equity security (general)';
  const SECURITY_TICKER_ID = '00N30000003ueWe';
  const SECURITY_TICKER = '$GME';
  const ISSUER_ID = '00N30000003ueVQ';
  const ISSUER = 'Robinhood Financial LLC';

  const COMPLAINT_ID = 'description';
  const COMPLAINT = `foooo`;

  const idToValue = {
    [FIRM_NAME_ID]: FIRM_NAME,
    [FIRM_TYPE_ID]: FIRM_TYPE,
    [FIRM_SPOKESPERSON_ID]: FIRM_SPOKESPERSON,
    [FIRM_ADDRESS_ID]: FIRM_ADDRESS,
    [FIRM_CITY_ID]: FIRM_CITY,
    [FIRM_STATE_ID]: FIRM_STATE,
    [FIRM_ZIP_ID]: FIRM_ZIP,
    [FIRM_COUNTRY_ID]: FIRM_COUNTRY,
    [SECURITY_TYPE_ID]: SECURITY_TYPE,
    [SECURITY_TICKER_ID]: SECURITY_TICKER,
    [ISSUER_ID]: ISSUER,
    [COMPLAINT_ID]: COMPLAINT,
  };

  Object.keys(idToValue).forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.value = idToValue[id];
  });
})();
