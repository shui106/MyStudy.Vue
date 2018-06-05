/* eslint-disable */
import axios from 'axios'
import qs from 'qs'
let domain = ''
export const getDomain = () => {
  return domain
}
export const setDomain = ($domain) => {
  domain = $domain
}
export const request = (method, url, body, queryParameters, form, config) => {
  method = method.toLowerCase()
  let keys = Object.keys(queryParameters)
  let queryUrl = url
  if (keys.length > 0) {
    queryUrl = url + '?' + qs.stringify(queryParameters)
  }
  // let queryUrl = url+(keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
  if (body) {
    return axios[method](queryUrl, body, config)
  } else if (method === 'get') {
    return axios[method](queryUrl, {
      params: form
    }, config)
  } else {
    return axios[method](queryUrl, qs.stringify(form), config)
  }
}
/*==========================================================
 *                    
 ==========================================================*/
/**
 * 
 * request: ApiServicesAppAccountIsTenantAvailablePost
 * url: ApiServicesAppAccountIsTenantAvailablePostURL
 * method: ApiServicesAppAccountIsTenantAvailablePost_TYPE
 * raw_url: ApiServicesAppAccountIsTenantAvailablePost_RAW_URL
 * @param input - 
 */
export const ApiServicesAppAccountIsTenantAvailablePost = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/services/app/Account/IsTenantAvailable'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['input'] !== undefined) {
    body = parameters['input']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const ApiServicesAppAccountIsTenantAvailablePost_RAW_URL = function() {
  return '/api/services/app/Account/IsTenantAvailable'
}
export const ApiServicesAppAccountIsTenantAvailablePost_TYPE = function() {
  return 'post'
}
export const ApiServicesAppAccountIsTenantAvailablePostURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/services/app/Account/IsTenantAvailable'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 
 * request: ApiServicesAppAccountRegisterPost
 * url: ApiServicesAppAccountRegisterPostURL
 * method: ApiServicesAppAccountRegisterPost_TYPE
 * raw_url: ApiServicesAppAccountRegisterPost_RAW_URL
 * @param input - 
 */
export const ApiServicesAppAccountRegisterPost = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/services/app/Account/Register'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['input'] !== undefined) {
    body = parameters['input']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const ApiServicesAppAccountRegisterPost_RAW_URL = function() {
  return '/api/services/app/Account/Register'
}
export const ApiServicesAppAccountRegisterPost_TYPE = function() {
  return 'post'
}
export const ApiServicesAppAccountRegisterPostURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/services/app/Account/Register'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 
 * request: ApiServicesAppConfigurationChangeUiThemePost
 * url: ApiServicesAppConfigurationChangeUiThemePostURL
 * method: ApiServicesAppConfigurationChangeUiThemePost_TYPE
 * raw_url: ApiServicesAppConfigurationChangeUiThemePost_RAW_URL
 * @param input - 
 */
export const ApiServicesAppConfigurationChangeUiThemePost = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/services/app/Configuration/ChangeUiTheme'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['input'] !== undefined) {
    body = parameters['input']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const ApiServicesAppConfigurationChangeUiThemePost_RAW_URL = function() {
  return '/api/services/app/Configuration/ChangeUiTheme'
}
export const ApiServicesAppConfigurationChangeUiThemePost_TYPE = function() {
  return 'post'
}
export const ApiServicesAppConfigurationChangeUiThemePostURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/services/app/Configuration/ChangeUiTheme'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 
 * request: ApiServicesAppInstallSetupPost
 * url: ApiServicesAppInstallSetupPostURL
 * method: ApiServicesAppInstallSetupPost_TYPE
 * raw_url: ApiServicesAppInstallSetupPost_RAW_URL
 * @param input - 
 */
export const ApiServicesAppInstallSetupPost = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/services/app/Install/Setup'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['input'] !== undefined) {
    body = parameters['input']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const ApiServicesAppInstallSetupPost_RAW_URL = function() {
  return '/api/services/app/Install/Setup'
}
export const ApiServicesAppInstallSetupPost_TYPE = function() {
  return 'post'
}
export const ApiServicesAppInstallSetupPostURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/services/app/Install/Setup'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 
 * request: ApiServicesAppInstallGetAppSettingsJsonGet
 * url: ApiServicesAppInstallGetAppSettingsJsonGetURL
 * method: ApiServicesAppInstallGetAppSettingsJsonGet_TYPE
 * raw_url: ApiServicesAppInstallGetAppSettingsJsonGet_RAW_URL
 */
export const ApiServicesAppInstallGetAppSettingsJsonGet = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/services/app/Install/GetAppSettingsJson'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const ApiServicesAppInstallGetAppSettingsJsonGet_RAW_URL = function() {
  return '/api/services/app/Install/GetAppSettingsJson'
}
export const ApiServicesAppInstallGetAppSettingsJsonGet_TYPE = function() {
  return 'get'
}
export const ApiServicesAppInstallGetAppSettingsJsonGetURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/services/app/Install/GetAppSettingsJson'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 
 * request: ApiServicesAppInstallCheckDatabasePost
 * url: ApiServicesAppInstallCheckDatabasePostURL
 * method: ApiServicesAppInstallCheckDatabasePost_TYPE
 * raw_url: ApiServicesAppInstallCheckDatabasePost_RAW_URL
 */
export const ApiServicesAppInstallCheckDatabasePost = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/services/app/Install/CheckDatabase'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const ApiServicesAppInstallCheckDatabasePost_RAW_URL = function() {
  return '/api/services/app/Install/CheckDatabase'
}
export const ApiServicesAppInstallCheckDatabasePost_TYPE = function() {
  return 'post'
}
export const ApiServicesAppInstallCheckDatabasePostURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/services/app/Install/CheckDatabase'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 
 * request: ApiServicesAppRoleCreatePost
 * url: ApiServicesAppRoleCreatePostURL
 * method: ApiServicesAppRoleCreatePost_TYPE
 * raw_url: ApiServicesAppRoleCreatePost_RAW_URL
 * @param input - 
 */
export const ApiServicesAppRoleCreatePost = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/services/app/Role/Create'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['input'] !== undefined) {
    body = parameters['input']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const ApiServicesAppRoleCreatePost_RAW_URL = function() {
  return '/api/services/app/Role/Create'
}
export const ApiServicesAppRoleCreatePost_TYPE = function() {
  return 'post'
}
export const ApiServicesAppRoleCreatePostURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/services/app/Role/Create'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 
 * request: ApiServicesAppRoleUpdatePut
 * url: ApiServicesAppRoleUpdatePutURL
 * method: ApiServicesAppRoleUpdatePut_TYPE
 * raw_url: ApiServicesAppRoleUpdatePut_RAW_URL
 * @param input - 
 */
export const ApiServicesAppRoleUpdatePut = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/services/app/Role/Update'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['input'] !== undefined) {
    body = parameters['input']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const ApiServicesAppRoleUpdatePut_RAW_URL = function() {
  return '/api/services/app/Role/Update'
}
export const ApiServicesAppRoleUpdatePut_TYPE = function() {
  return 'put'
}
export const ApiServicesAppRoleUpdatePutURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/services/app/Role/Update'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 
 * request: ApiServicesAppRoleDeleteDelete
 * url: ApiServicesAppRoleDeleteDeleteURL
 * method: ApiServicesAppRoleDeleteDelete_TYPE
 * raw_url: ApiServicesAppRoleDeleteDelete_RAW_URL
 * @param id - 
 */
export const ApiServicesAppRoleDeleteDelete = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/services/app/Role/Delete'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['id'] !== undefined) {
    queryParameters['Id'] = parameters['id']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const ApiServicesAppRoleDeleteDelete_RAW_URL = function() {
  return '/api/services/app/Role/Delete'
}
export const ApiServicesAppRoleDeleteDelete_TYPE = function() {
  return 'delete'
}
export const ApiServicesAppRoleDeleteDeleteURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/services/app/Role/Delete'
  if (parameters['id'] !== undefined) {
    queryParameters['Id'] = parameters['id']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 
 * request: ApiServicesAppRoleGetAllPermissionsGet
 * url: ApiServicesAppRoleGetAllPermissionsGetURL
 * method: ApiServicesAppRoleGetAllPermissionsGet_TYPE
 * raw_url: ApiServicesAppRoleGetAllPermissionsGet_RAW_URL
 */
export const ApiServicesAppRoleGetAllPermissionsGet = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/services/app/Role/GetAllPermissions'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const ApiServicesAppRoleGetAllPermissionsGet_RAW_URL = function() {
  return '/api/services/app/Role/GetAllPermissions'
}
export const ApiServicesAppRoleGetAllPermissionsGet_TYPE = function() {
  return 'get'
}
export const ApiServicesAppRoleGetAllPermissionsGetURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/services/app/Role/GetAllPermissions'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 
 * request: ApiServicesAppRoleGetGet
 * url: ApiServicesAppRoleGetGetURL
 * method: ApiServicesAppRoleGetGet_TYPE
 * raw_url: ApiServicesAppRoleGetGet_RAW_URL
 * @param id - 
 */
export const ApiServicesAppRoleGetGet = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/services/app/Role/Get'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['id'] !== undefined) {
    queryParameters['Id'] = parameters['id']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const ApiServicesAppRoleGetGet_RAW_URL = function() {
  return '/api/services/app/Role/Get'
}
export const ApiServicesAppRoleGetGet_TYPE = function() {
  return 'get'
}
export const ApiServicesAppRoleGetGetURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/services/app/Role/Get'
  if (parameters['id'] !== undefined) {
    queryParameters['Id'] = parameters['id']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 
 * request: ApiServicesAppRoleGetAllGet
 * url: ApiServicesAppRoleGetAllGetURL
 * method: ApiServicesAppRoleGetAllGet_TYPE
 * raw_url: ApiServicesAppRoleGetAllGet_RAW_URL
 * @param skipCount - 
 * @param maxResultCount - 
 */
export const ApiServicesAppRoleGetAllGet = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/services/app/Role/GetAll'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['skipCount'] !== undefined) {
    queryParameters['SkipCount'] = parameters['skipCount']
  }
  if (parameters['maxResultCount'] !== undefined) {
    queryParameters['MaxResultCount'] = parameters['maxResultCount']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const ApiServicesAppRoleGetAllGet_RAW_URL = function() {
  return '/api/services/app/Role/GetAll'
}
export const ApiServicesAppRoleGetAllGet_TYPE = function() {
  return 'get'
}
export const ApiServicesAppRoleGetAllGetURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/services/app/Role/GetAll'
  if (parameters['skipCount'] !== undefined) {
    queryParameters['SkipCount'] = parameters['skipCount']
  }
  if (parameters['maxResultCount'] !== undefined) {
    queryParameters['MaxResultCount'] = parameters['maxResultCount']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 
 * request: ApiServicesAppSessionGetCurrentLoginInformationsGet
 * url: ApiServicesAppSessionGetCurrentLoginInformationsGetURL
 * method: ApiServicesAppSessionGetCurrentLoginInformationsGet_TYPE
 * raw_url: ApiServicesAppSessionGetCurrentLoginInformationsGet_RAW_URL
 */
export const ApiServicesAppSessionGetCurrentLoginInformationsGet = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/services/app/Session/GetCurrentLoginInformations'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const ApiServicesAppSessionGetCurrentLoginInformationsGet_RAW_URL = function() {
  return '/api/services/app/Session/GetCurrentLoginInformations'
}
export const ApiServicesAppSessionGetCurrentLoginInformationsGet_TYPE = function() {
  return 'get'
}
export const ApiServicesAppSessionGetCurrentLoginInformationsGetURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/services/app/Session/GetCurrentLoginInformations'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 
 * request: ApiServicesAppTenantCreatePost
 * url: ApiServicesAppTenantCreatePostURL
 * method: ApiServicesAppTenantCreatePost_TYPE
 * raw_url: ApiServicesAppTenantCreatePost_RAW_URL
 * @param input - 
 */
export const ApiServicesAppTenantCreatePost = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/services/app/Tenant/Create'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['input'] !== undefined) {
    body = parameters['input']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const ApiServicesAppTenantCreatePost_RAW_URL = function() {
  return '/api/services/app/Tenant/Create'
}
export const ApiServicesAppTenantCreatePost_TYPE = function() {
  return 'post'
}
export const ApiServicesAppTenantCreatePostURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/services/app/Tenant/Create'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 
 * request: ApiServicesAppTenantDeleteDelete
 * url: ApiServicesAppTenantDeleteDeleteURL
 * method: ApiServicesAppTenantDeleteDelete_TYPE
 * raw_url: ApiServicesAppTenantDeleteDelete_RAW_URL
 * @param id - 
 */
export const ApiServicesAppTenantDeleteDelete = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/services/app/Tenant/Delete'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['id'] !== undefined) {
    queryParameters['Id'] = parameters['id']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const ApiServicesAppTenantDeleteDelete_RAW_URL = function() {
  return '/api/services/app/Tenant/Delete'
}
export const ApiServicesAppTenantDeleteDelete_TYPE = function() {
  return 'delete'
}
export const ApiServicesAppTenantDeleteDeleteURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/services/app/Tenant/Delete'
  if (parameters['id'] !== undefined) {
    queryParameters['Id'] = parameters['id']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 
 * request: ApiServicesAppTenantGetGet
 * url: ApiServicesAppTenantGetGetURL
 * method: ApiServicesAppTenantGetGet_TYPE
 * raw_url: ApiServicesAppTenantGetGet_RAW_URL
 * @param id - 
 */
export const ApiServicesAppTenantGetGet = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/services/app/Tenant/Get'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['id'] !== undefined) {
    queryParameters['Id'] = parameters['id']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const ApiServicesAppTenantGetGet_RAW_URL = function() {
  return '/api/services/app/Tenant/Get'
}
export const ApiServicesAppTenantGetGet_TYPE = function() {
  return 'get'
}
export const ApiServicesAppTenantGetGetURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/services/app/Tenant/Get'
  if (parameters['id'] !== undefined) {
    queryParameters['Id'] = parameters['id']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 
 * request: ApiServicesAppTenantGetAllGet
 * url: ApiServicesAppTenantGetAllGetURL
 * method: ApiServicesAppTenantGetAllGet_TYPE
 * raw_url: ApiServicesAppTenantGetAllGet_RAW_URL
 * @param skipCount - 
 * @param maxResultCount - 
 */
export const ApiServicesAppTenantGetAllGet = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/services/app/Tenant/GetAll'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['skipCount'] !== undefined) {
    queryParameters['SkipCount'] = parameters['skipCount']
  }
  if (parameters['maxResultCount'] !== undefined) {
    queryParameters['MaxResultCount'] = parameters['maxResultCount']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const ApiServicesAppTenantGetAllGet_RAW_URL = function() {
  return '/api/services/app/Tenant/GetAll'
}
export const ApiServicesAppTenantGetAllGet_TYPE = function() {
  return 'get'
}
export const ApiServicesAppTenantGetAllGetURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/services/app/Tenant/GetAll'
  if (parameters['skipCount'] !== undefined) {
    queryParameters['SkipCount'] = parameters['skipCount']
  }
  if (parameters['maxResultCount'] !== undefined) {
    queryParameters['MaxResultCount'] = parameters['maxResultCount']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 
 * request: ApiServicesAppTenantUpdatePut
 * url: ApiServicesAppTenantUpdatePutURL
 * method: ApiServicesAppTenantUpdatePut_TYPE
 * raw_url: ApiServicesAppTenantUpdatePut_RAW_URL
 * @param input - 
 */
export const ApiServicesAppTenantUpdatePut = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/services/app/Tenant/Update'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['input'] !== undefined) {
    body = parameters['input']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const ApiServicesAppTenantUpdatePut_RAW_URL = function() {
  return '/api/services/app/Tenant/Update'
}
export const ApiServicesAppTenantUpdatePut_TYPE = function() {
  return 'put'
}
export const ApiServicesAppTenantUpdatePutURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/services/app/Tenant/Update'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 
 * request: ApiTokenAuthAuthenticatePost
 * url: ApiTokenAuthAuthenticatePostURL
 * method: ApiTokenAuthAuthenticatePost_TYPE
 * raw_url: ApiTokenAuthAuthenticatePost_RAW_URL
 * @param model - 
 */
export const ApiTokenAuthAuthenticatePost = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/TokenAuth/Authenticate'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['model'] !== undefined) {
    body = parameters['model']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const ApiTokenAuthAuthenticatePost_RAW_URL = function() {
  return '/api/TokenAuth/Authenticate'
}
export const ApiTokenAuthAuthenticatePost_TYPE = function() {
  return 'post'
}
export const ApiTokenAuthAuthenticatePostURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/TokenAuth/Authenticate'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 
 * request: ApiTokenAuthGetExternalAuthenticationProvidersGet
 * url: ApiTokenAuthGetExternalAuthenticationProvidersGetURL
 * method: ApiTokenAuthGetExternalAuthenticationProvidersGet_TYPE
 * raw_url: ApiTokenAuthGetExternalAuthenticationProvidersGet_RAW_URL
 */
export const ApiTokenAuthGetExternalAuthenticationProvidersGet = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/TokenAuth/GetExternalAuthenticationProviders'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const ApiTokenAuthGetExternalAuthenticationProvidersGet_RAW_URL = function() {
  return '/api/TokenAuth/GetExternalAuthenticationProviders'
}
export const ApiTokenAuthGetExternalAuthenticationProvidersGet_TYPE = function() {
  return 'get'
}
export const ApiTokenAuthGetExternalAuthenticationProvidersGetURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/TokenAuth/GetExternalAuthenticationProviders'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 
 * request: ApiTokenAuthExternalAuthenticatePost
 * url: ApiTokenAuthExternalAuthenticatePostURL
 * method: ApiTokenAuthExternalAuthenticatePost_TYPE
 * raw_url: ApiTokenAuthExternalAuthenticatePost_RAW_URL
 * @param model - 
 */
export const ApiTokenAuthExternalAuthenticatePost = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/TokenAuth/ExternalAuthenticate'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['model'] !== undefined) {
    body = parameters['model']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const ApiTokenAuthExternalAuthenticatePost_RAW_URL = function() {
  return '/api/TokenAuth/ExternalAuthenticate'
}
export const ApiTokenAuthExternalAuthenticatePost_TYPE = function() {
  return 'post'
}
export const ApiTokenAuthExternalAuthenticatePostURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/TokenAuth/ExternalAuthenticate'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 
 * request: ApiServicesAppUserCreatePost
 * url: ApiServicesAppUserCreatePostURL
 * method: ApiServicesAppUserCreatePost_TYPE
 * raw_url: ApiServicesAppUserCreatePost_RAW_URL
 * @param input - 
 */
export const ApiServicesAppUserCreatePost = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/services/app/User/Create'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['input'] !== undefined) {
    body = parameters['input']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const ApiServicesAppUserCreatePost_RAW_URL = function() {
  return '/api/services/app/User/Create'
}
export const ApiServicesAppUserCreatePost_TYPE = function() {
  return 'post'
}
export const ApiServicesAppUserCreatePostURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/services/app/User/Create'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 
 * request: ApiServicesAppUserUpdatePut
 * url: ApiServicesAppUserUpdatePutURL
 * method: ApiServicesAppUserUpdatePut_TYPE
 * raw_url: ApiServicesAppUserUpdatePut_RAW_URL
 * @param input - 
 */
export const ApiServicesAppUserUpdatePut = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/services/app/User/Update'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['input'] !== undefined) {
    body = parameters['input']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const ApiServicesAppUserUpdatePut_RAW_URL = function() {
  return '/api/services/app/User/Update'
}
export const ApiServicesAppUserUpdatePut_TYPE = function() {
  return 'put'
}
export const ApiServicesAppUserUpdatePutURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/services/app/User/Update'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 
 * request: ApiServicesAppUserDeleteDelete
 * url: ApiServicesAppUserDeleteDeleteURL
 * method: ApiServicesAppUserDeleteDelete_TYPE
 * raw_url: ApiServicesAppUserDeleteDelete_RAW_URL
 * @param id - 
 */
export const ApiServicesAppUserDeleteDelete = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/services/app/User/Delete'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['id'] !== undefined) {
    queryParameters['Id'] = parameters['id']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const ApiServicesAppUserDeleteDelete_RAW_URL = function() {
  return '/api/services/app/User/Delete'
}
export const ApiServicesAppUserDeleteDelete_TYPE = function() {
  return 'delete'
}
export const ApiServicesAppUserDeleteDeleteURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/services/app/User/Delete'
  if (parameters['id'] !== undefined) {
    queryParameters['Id'] = parameters['id']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 
 * request: ApiServicesAppUserGetRolesGet
 * url: ApiServicesAppUserGetRolesGetURL
 * method: ApiServicesAppUserGetRolesGet_TYPE
 * raw_url: ApiServicesAppUserGetRolesGet_RAW_URL
 */
export const ApiServicesAppUserGetRolesGet = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/services/app/User/GetRoles'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const ApiServicesAppUserGetRolesGet_RAW_URL = function() {
  return '/api/services/app/User/GetRoles'
}
export const ApiServicesAppUserGetRolesGet_TYPE = function() {
  return 'get'
}
export const ApiServicesAppUserGetRolesGetURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/services/app/User/GetRoles'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 
 * request: ApiServicesAppUserChangeLanguagePost
 * url: ApiServicesAppUserChangeLanguagePostURL
 * method: ApiServicesAppUserChangeLanguagePost_TYPE
 * raw_url: ApiServicesAppUserChangeLanguagePost_RAW_URL
 * @param input - 
 */
export const ApiServicesAppUserChangeLanguagePost = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/services/app/User/ChangeLanguage'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['input'] !== undefined) {
    body = parameters['input']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const ApiServicesAppUserChangeLanguagePost_RAW_URL = function() {
  return '/api/services/app/User/ChangeLanguage'
}
export const ApiServicesAppUserChangeLanguagePost_TYPE = function() {
  return 'post'
}
export const ApiServicesAppUserChangeLanguagePostURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/services/app/User/ChangeLanguage'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 
 * request: ApiServicesAppUserGetGet
 * url: ApiServicesAppUserGetGetURL
 * method: ApiServicesAppUserGetGet_TYPE
 * raw_url: ApiServicesAppUserGetGet_RAW_URL
 * @param id - 
 */
export const ApiServicesAppUserGetGet = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/services/app/User/Get'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['id'] !== undefined) {
    queryParameters['Id'] = parameters['id']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const ApiServicesAppUserGetGet_RAW_URL = function() {
  return '/api/services/app/User/Get'
}
export const ApiServicesAppUserGetGet_TYPE = function() {
  return 'get'
}
export const ApiServicesAppUserGetGetURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/services/app/User/Get'
  if (parameters['id'] !== undefined) {
    queryParameters['Id'] = parameters['id']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 
 * request: ApiServicesAppUserGetAllGet
 * url: ApiServicesAppUserGetAllGetURL
 * method: ApiServicesAppUserGetAllGet_TYPE
 * raw_url: ApiServicesAppUserGetAllGet_RAW_URL
 * @param where - 
 * @param skipCount - 
 * @param maxResultCount - 
 */
export const ApiServicesAppUserGetAllGet = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/api/services/app/User/GetAll'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['where'] !== undefined) {
    queryParameters['where'] = parameters['where']
  }
  if (parameters['skipCount'] !== undefined) {
    queryParameters['SkipCount'] = parameters['skipCount']
  }
  if (parameters['maxResultCount'] !== undefined) {
    queryParameters['MaxResultCount'] = parameters['maxResultCount']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const ApiServicesAppUserGetAllGet_RAW_URL = function() {
  return '/api/services/app/User/GetAll'
}
export const ApiServicesAppUserGetAllGet_TYPE = function() {
  return 'get'
}
export const ApiServicesAppUserGetAllGetURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/api/services/app/User/GetAll'
  if (parameters['where'] !== undefined) {
    queryParameters['where'] = parameters['where']
  }
  if (parameters['skipCount'] !== undefined) {
    queryParameters['SkipCount'] = parameters['skipCount']
  }
  if (parameters['maxResultCount'] !== undefined) {
    queryParameters['MaxResultCount'] = parameters['maxResultCount']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}