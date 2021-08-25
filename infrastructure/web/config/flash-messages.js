const EMAIL_EXISTS = 'المعذرة، البريد الإلكتروني الذي استعملته مسجل مسبقا'
const WRONG_CREDENTIALS = 'معلومات الدخول التي أرسلتها خاطئة'

const SIGNUP_SUCCESSFUL_SEEKER =
  'مرحبا بك، عملية التسجيل تمت بنجاح، أنشئ أول وقف لك بملء النموذج أسفله'

const SIGNUP_SUCCESSFUL_GIVER =
  'مرحبا بك، عملية التسجيل تمت بنجاح، أنشئ أول طلب لك بملء النموذج أسفله'

const INPUTS_NOT_VALID =
  'بعض المعلومات التي أدخلتها غير صالحة، الرجاء مراجعتها وإعادة الإرسال'

const NEW_PRODUCT_SUCCESS = 'إنشاء الوقف تم بنجاح'
const NEW_PRODUCT_FAILURE = 'حدث خطأ أثناء إنشاء الوقف الجديد'

const PRODUCT_UPDATE_SUCCESS = 'تعديل الوقف تم بنجاح'
const PRODUCT_UPDATE_FAILURE = 'حدث خطأ أثناء محاولة تعديل هذا الوقف'

const NEW_ORDER_SUCCESS = 'تم إنشاء الطلب بنجاح'
const NEW_ORDER_FAILURE =
  'حدث خطأ أثناء إنشاء الطلب، الرجاء التحقق من المعلومات التي أدخلتها وإعادة المحاولة'

const ORDER_UPDATE_SUCCESS = 'تعديل الطلب تم بنجاح'
const ORDER_UPDATE_FAILURE = 'حدث خطأ أثناء محاولة تعديل هذا الطلب'

const ORDER_ACCEPT_SUCCESS = 'قبول هذا الطلب تم بنجاح'
const ORDER_ACCEPT_FAILURE =
  'هذا الطلب قد تم قبوله من طرف جمعية أخرى، يمكنك قبول طلبات أخرى'

const PROFILE_UPDATE_SUCCESS = 'تعديل الحساب تم بنجاح'
const PROFILE_UPDATE_FAILURE = 'حدث خطأ أثناء محاولة تعديل الحساب'

const NOT_VERIFIED_USER_SIGNIN =
  'مرحبابك، لقد سجلت بنجاح في المنصة، نرجوا منك الإنتظار قليلا ريثما يتم تفعيل حسابك أو يمكنك التواصل مع المشرفين على المنصة'

module.exports = {
  EMAIL_EXISTS,
  WRONG_CREDENTIALS,
  SIGNUP_SUCCESSFUL_GIVER,
  SIGNUP_SUCCESSFUL_SEEKER,
  INPUTS_NOT_VALID,
  NEW_PRODUCT_SUCCESS,
  NEW_PRODUCT_FAILURE,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_UPDATE_FAILURE,
  NEW_ORDER_SUCCESS,
  NEW_ORDER_FAILURE,
  ORDER_UPDATE_SUCCESS,
  ORDER_UPDATE_FAILURE,
  ORDER_ACCEPT_SUCCESS,
  ORDER_ACCEPT_FAILURE,
  PROFILE_UPDATE_SUCCESS,
  PROFILE_UPDATE_FAILURE,
  NOT_VERIFIED_USER_SIGNIN,
}
