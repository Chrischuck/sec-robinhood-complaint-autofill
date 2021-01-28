(function () {
  const FIRM_NAME_ID = '00N30000003ueVA';
  const FIRM_NAME = 'Robinhood Financial LLC ';
  const FIRM_TYPE_ID = '00N30000003ueVF';
  const FIRM_TYPE = 'Broker-Dealer';
  const FIRM_SPOKESPERSON_ID = '00N30000003ueVK';
  const FIRM_SPOKESPERSON = 'Baiju Bhatt';
  const FIRM_ADDRESS_ID = '00N30000003ueVP';
  const FIRM_ADDRESS = '85 Willow Road';
  const FIRM_CITY_ID = '00N30000003ueVG';
  const FIRM_CITY = 'Menlo Park';
  const FIRM_STATE_ID = '00N30000003ueVV';
  const FIRM_STATE = 'CALIFORNIA';
  const FIRM_ZIP_ID = '00N30000003ueWc';
  const FIRM_ZIP = '94025';
  const FIRM_COUNTRY_ID = '00N30000003ueVH';
  const FIRM_COUNTRY = 'UNITED STATES';
  const SECURITY_TYPE_ID = '00N30000003ueWd';
  const SECURITY_TYPE = 'Equity security (general)';
  const SECURITY_TICKER_ID = '00N30000003ueWe';
  const SECURITY_TICKER = '$GME';
  const ISSUER_ID = '00N30000003ueVQ';
  const ISSUER = 'Robinhood Financial LLC';
  const COMPLAINT_ID = 'description';
  const COMPLAINT = `
  This morning I, and millions of other retail investors, were blocked from purchasing (entering new buy orders) on the Robinhood platform, without notice. This clear example of market manipulation has forced the stock down from over $500 in after-hours to less than $300 as of this writing. Meanwhile, hedge fund interests are NOT blocked from buying the shares being traded and the lower price obviously benefits them.

  We retail investors have followed all the rules and finally stood to gain a LITTLE bit from Wall St and they suddenly change the rules "to protect" us. I am requesting you use your subpoena power and regulatory authority to examine whether Robinhood colluded illegally with any other actors who may have held short positions on these stocks to reduce the number of buyers for $GME and therefore deflate the price. This is market manipulation.`;

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
