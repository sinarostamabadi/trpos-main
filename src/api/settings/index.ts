export const settingsApi = {
  //~~~~~~~~~~~~~~~~~ Company person ~~~~~~~~~~~~~~~~
  removeRoleToCompanyUser: "/BFF/api/CompanyPerson/RemoveRoleToCompanyUser",
  addCompanyPerson: "/BFF/api/CompanyPerson/AddCompanyPerson",
  companyPersonList: "/BFF/api/CompanyPerson/CompanyPersonList",
  getUserRolesForCompany: "/BFF/api/CompanyPerson/GetUserRolesForCompany",
  getRoleForCompanyUser: "/BFF/api/CompanyPerson/GetRoleForCompanyUser",
  companyPersonPermissionAdd:
    "/BFF/api/CompanyPerson/CompanyPersonPermissionAdd",

  // ~~~~~~~~~~~~~~~~ Contract ~~~~~~~~~~~~~~~~~
  contract: "/BFF/api/Contract/Get",

  // ~~~~~~~~~~~~~~~~ Contract type ~~~~~~~~~~~~~~~~~
  contractTypes: "/BFF/api/ContractType/GetAll",

  // ~~~~~~~~~~~~~~~~ Login log ~~~~~~~~~~~~~~~~~
  failedLogins: "/BFF/api/LoginLog/FailedLogins",
  unviewedBadLogins: "/BFF/api/LoginLog/UnViewedBadLogins",

  // ~~~~~~~~~~~~~~~~ Merchant requests ~~~~~~~~~~~~~~~~~
  websiteAdd: "/BFF/api/MerchantRequest/WebSiteAdd",
  websiteGetAll: "/BFF/api/MerchantRequest/WebSiteGetAll",
  websiteRequestGetAll: "/BFF/api/MerchantRequest/WebSiteRequestGetAll",
  websiteDetail: "/BFF/api/MerchantRequest/WebSiteDetail",
  webSiteRequestDetail: "/BFF/api/MerchantRequest/WebSiteRequestDetail",
  bankList: "/BFF/api/MerchantRequest/BankList",
  websiteCardMark: "/BFF/api/MerchantRequest/WebSiteCardMark",
  webSiteCommissionDetail: "/BFF/api/MerchantRequest/WebSiteCommissionDetail",

  // ~~~~~~~~~~~~~~~~ Person contract ~~~~~~~~~~~~~~~~~
  addPersonContract: "/BFF/api/PersonContract/Add",
  getPersonContract: "/BFF/api/PersonContract/Get",
  checkNotConfirmedContract:
    "/BFF/api/PersonContract/CheckNotConfirmedLastContractVersion",

  // ~~~~~~~~~~~~~~~~ Product ~~~~~~~~~~~~~~~~~
  getAllProduct: "/BFF/api/Product/GetAll",
  productDetail: "/BFF/api/Product/Detail",
  getAllActiveWebsites: "/BFF/api/Product/GetAllActiveWebsites",
  addProduct: "/BFF/api/Product/Add",
  deactiveProduct: "/BFF/api/Product/DeActive",

  // ~~~~~~~~~~~~~~~~ Profession ~~~~~~~~~~~~~~~~~
  getAllProfession: "/BFF/api/Profession/GetAll",

  // ~~~~~~~~~~~~~~~~ Real person ~~~~~~~~~~~~~~~~~
  getFilterRealPerson: "/BFF/api/RealPerson/GetFilter",

  // ~~~~~~~~~~~~~~~~ Request ~~~~~~~~~~~~~~~~~
  getFilterRequest: "/BFF/api/Request/GetFilter",
  controlBeforeRegistration: "/BFF/api/Request/ControlBeforeRegistration",
  corporateApp: "/BFF/api/Request/CorporateApp",

  // ~~~~~~~~~~~~~~~~ Task ~~~~~~~~~~~~~~~~~
  taskTypeGetAll: "/BFF/api/Task/TaskTypeGetAll",
  addTask: "/BFF/api/Task/Add",
  postByCorporateSite: "/BFF/api/Task/PostByCorporateSite",
  getAllTask: "/BFF/api/Task/GetAll",
  taskDetail: "/BFF/api/Task/Detail",
  taskReplyAdd: "/BFF/api/Task/ReplyAdd",
  ticketClosed: "/BFF/api/Task/TicketClosed",

  // ~~~~~~~~~~~~~~~~ User ~~~~~~~~~~~~~~~~~
  getuserInfo: "/BFF/api/User/GetUserInfo",
  isVerifiedIdentity: "/BFF/api/User/IsVerifiedIdentity",
  customerVerify: "/BFF/api/User/CustomerVerify",

  // ~~~~~~~~~~~~~~~~ User customer ~~~~~~~~~~~~~~~~~
  getAllUserCustomer: "/BFF/api/UserCustomer/GetAll",

  // ~~~~~~~~~~~~~~~~ VPos ~~~~~~~~~~~~~~~~~
  VPosTransactionSendMail: "/BFF/api/VPos/VPosTransactionSendMail",
  controlIbanNo: "/BFF/api/VPos/ControlIbanNo",
  cancelVPos: "/BFF/api/VPos/Cancel",
  refundVPos: "/BFF/api/VPos/Refund",
  capturePreAuthorization: "/BFF/api/VPos/CapturePreAuthorization",
  VposTransaction: "/BFF/api/VPos/VposTransaction",
  VposTransactionDetail: "/BFF/api/VPos/VposTransactionDetail",
  VposPayback: "/BFF/api/VPos/VposPayback",
  VposPaybackDetail: "/BFF/api/VPos/VposPaybackDetail",
  VposRefundDetail: "/BFF/api/VPos/VposRefundDetail",
  VposCancelDetail: "/BFF/api/VPos/VposCancelDetail",
  VposPayProvisionDetail: "/BFF/api/VPos/VposPayProvisionDetail",
};
