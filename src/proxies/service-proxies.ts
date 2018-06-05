import axios, { AxiosPromise, AxiosRequestConfig } from 'axios';
export interface IRequestOptions {
  headers?: any;
}

export class AccountService {
  /**
   *
   */
  static isTenantAvailable(
    params: IIsTenantAvailableParams,
    options: IRequestOptions = {}
  ): Promise<IsTenantAvailableOutput> {
    params = params || <IIsTenantAvailableParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Account/IsTenantAvailable';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static register(params: IRegisterParams, options: IRequestOptions = {}): Promise<RegisterOutput> {
    params = params || <IRegisterParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Account/Register';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
export class ConfigurationService {
  /**
   *
   */
  static changeUiTheme(params: IChangeUiThemeParams, options: IRequestOptions = {}): Promise<any> {
    params = params || <IChangeUiThemeParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Configuration/ChangeUiTheme';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
export class InstallService {
  /**
   *
   */
  static setup(params: ISetupParams, options: IRequestOptions = {}): Promise<any> {
    params = params || <ISetupParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Install/Setup';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getAppSettingsJson(options: IRequestOptions = {}): Promise<AppSettingsJsonDto> {
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Install/GetAppSettingsJson';

    configs.url = url;

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static checkDatabase(options: IRequestOptions = {}): Promise<CheckDatabaseOutput> {
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Install/CheckDatabase';

    configs.url = url;

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
export class RoleService {
  /**
   *
   */
  static create(params: ICreateParams, options: IRequestOptions = {}): Promise<RoleDto> {
    params = params || <ICreateParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Role/Create';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static update(params: IUpdateParams, options: IRequestOptions = {}): Promise<RoleDto> {
    params = params || <IUpdateParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'put' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Role/Update';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static delete(params: IDeleteParams, options: IRequestOptions = {}): Promise<any> {
    params = params || <IDeleteParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'delete' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Role/Delete';

    configs.url = url;

    configs.params = { id: params['id'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getAllPermissions(options: IRequestOptions = {}): Promise<ListResultDtoPermissionDto> {
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Role/GetAllPermissions';

    configs.url = url;

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static get(params: IGetParams, options: IRequestOptions = {}): Promise<RoleDto> {
    params = params || <IGetParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Role/Get';

    configs.url = url;

    configs.params = { id: params['id'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getAll(params: IGetAllParams, options: IRequestOptions = {}): Promise<PagedResultDtoRoleDto> {
    params = params || <IGetAllParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Role/GetAll';

    configs.url = url;

    configs.params = { skipCount: params['skipCount'], maxResultCount: params['maxResultCount'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
export class SessionService {
  /**
   *
   */
  static getCurrentLoginInformations(options: IRequestOptions = {}): Promise<GetCurrentLoginInformationsOutput> {
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Session/GetCurrentLoginInformations';

    configs.url = url;

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
export class TenantService {
  /**
   *
   */
  static create(params: ICreateParams1, options: IRequestOptions = {}): Promise<TenantDto> {
    params = params || <ICreateParams1>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Tenant/Create';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static delete(params: IDeleteParams1, options: IRequestOptions = {}): Promise<any> {
    params = params || <IDeleteParams1>{};
    const configs: AxiosRequestConfig = { ...options, method: 'delete' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Tenant/Delete';

    configs.url = url;

    configs.params = { id: params['id'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static get(params: IGetParams1, options: IRequestOptions = {}): Promise<TenantDto> {
    params = params || <IGetParams1>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Tenant/Get';

    configs.url = url;

    configs.params = { id: params['id'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getAll(params: IGetAllParams1, options: IRequestOptions = {}): Promise<PagedResultDtoTenantDto> {
    params = params || <IGetAllParams1>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Tenant/GetAll';

    configs.url = url;

    configs.params = { skipCount: params['skipCount'], maxResultCount: params['maxResultCount'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static update(params: IUpdateParams1, options: IRequestOptions = {}): Promise<TenantDto> {
    params = params || <IUpdateParams1>{};
    const configs: AxiosRequestConfig = { ...options, method: 'put' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/Tenant/Update';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
export class TokenAuthService {
  /**
   *
   */
  static authenticate(params: IAuthenticateParams, options: IRequestOptions = {}): Promise<AuthenticateResultModel> {
    params = params || <IAuthenticateParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/TokenAuth/Authenticate';

    configs.url = url;

    let data = null;
    data = { ...params['model'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getExternalAuthenticationProviders(options: IRequestOptions = {}): Promise<any> {
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/TokenAuth/GetExternalAuthenticationProviders';

    configs.url = url;

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static externalAuthenticate(
    params: IExternalAuthenticateParams,
    options: IRequestOptions = {}
  ): Promise<ExternalAuthenticateResultModel> {
    params = params || <IExternalAuthenticateParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/TokenAuth/ExternalAuthenticate';

    configs.url = url;

    let data = null;
    data = { ...params['model'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
export class UserService {
  /**
   *
   */
  static create(params: ICreateParams2, options: IRequestOptions = {}): Promise<UserDto> {
    params = params || <ICreateParams2>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/User/Create';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static update(params: IUpdateParams2, options: IRequestOptions = {}): Promise<UserDto> {
    params = params || <IUpdateParams2>{};
    const configs: AxiosRequestConfig = { ...options, method: 'put' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/User/Update';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static delete(params: IDeleteParams2, options: IRequestOptions = {}): Promise<any> {
    params = params || <IDeleteParams2>{};
    const configs: AxiosRequestConfig = { ...options, method: 'delete' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/User/Delete';

    configs.url = url;

    configs.params = { id: params['id'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getRoles(options: IRequestOptions = {}): Promise<ListResultDtoRoleDto> {
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/User/GetRoles';

    configs.url = url;

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static changeLanguage(params: IChangeLanguageParams, options: IRequestOptions = {}): Promise<any> {
    params = params || <IChangeLanguageParams>{};
    const configs: AxiosRequestConfig = { ...options, method: 'post' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/User/ChangeLanguage';

    configs.url = url;

    let data = null;
    data = { ...params['input'] };

    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static get(params: IGetParams2, options: IRequestOptions = {}): Promise<UserDto> {
    params = params || <IGetParams2>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/User/Get';

    configs.url = url;

    configs.params = { id: params['id'] };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   *
   */
  static getAll(params: IGetAllParams2, options: IRequestOptions = {}): Promise<PagedResultDtoUserDto> {
    params = params || <IGetAllParams2>{};
    const configs: AxiosRequestConfig = { ...options, method: 'get' };
    configs.headers = {
      ...options.headers,
      'Content-Type': 'application/json'
    };

    let url = '/api/services/app/User/GetAll';

    configs.url = url;

    configs.params = {
      where: params['where'],
      skipCount: params['skipCount'],
      maxResultCount: params['maxResultCount']
    };

    let data = null;
    configs.data = data;

    return new Promise((resolve, reject) => {
      axios(configs)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
export interface IIsTenantAvailableParams {
  /**  */
  input?: IsTenantAvailableInput;
}
export interface IRegisterParams {
  /**  */
  input?: RegisterInput;
}
export interface IChangeUiThemeParams {
  /**  */
  input?: ChangeUiThemeInput;
}
export interface ISetupParams {
  /**  */
  input?: InstallDto;
}
export interface ICreateParams {
  /**  */
  input?: CreateRoleDto;
}
export interface ICreateParams1 {
  /**  */
  input?: CreateTenantDto;
}
export interface ICreateParams2 {
  /**  */
  input?: CreateUserDto;
}
export interface IUpdateParams {
  /**  */
  input?: RoleDto;
}
export interface IUpdateParams1 {
  /**  */
  input?: TenantDto;
}
export interface IUpdateParams2 {
  /**  */
  input?: UserDto;
}
export interface IDeleteParams {
  /**  */
  id?: number;
}
export interface IDeleteParams1 {
  /**  */
  id?: number;
}
export interface IDeleteParams2 {
  /**  */
  id?: number;
}
export interface IGetParams {
  /**  */
  id?: number;
}
export interface IGetParams1 {
  /**  */
  id?: number;
}
export interface IGetParams2 {
  /**  */
  id?: number;
}
export interface IGetAllParams {
  /**  */
  skipCount?: number;

  /**  */
  maxResultCount?: number;
}
export interface IGetAllParams1 {
  /**  */
  skipCount?: number;

  /**  */
  maxResultCount?: number;
}
export interface IGetAllParams2 {
  /**  */
  where?: string;

  /**  */
  skipCount?: number;

  /**  */
  maxResultCount?: number;
}
export interface IAuthenticateParams {
  /**  */
  model?: AuthenticateModel;
}
export interface IExternalAuthenticateParams {
  /**  */
  model?: ExternalAuthenticateModel;
}
export interface IChangeLanguageParams {
  /**  */
  input?: ChangeUserLanguageDto;
}
export class IsTenantAvailableInput {
  /**  */
  tenancyName: string;

  constructor(data?: any) {
    if (data) {
      this.tenancyName = data['tenancyName'];
    }
  }
}

export class IsTenantAvailableOutput {
  /**  */
  state: 1 | 2 | 3;

  /**  */
  tenantId: number;

  constructor(data?: any) {
    if (data) {
      this.state = data['state'];
      this.tenantId = data['tenantId'];
    }
  }
}

export class RegisterInput {
  /**  */
  name: string;

  /**  */
  surname: string;

  /**  */
  userName: string;

  /**  */
  emailAddress: string;

  /**  */
  password: string;

  /**  */
  captchaResponse: string;

  constructor(data?: any) {
    if (data) {
      this.name = data['name'];
      this.surname = data['surname'];
      this.userName = data['userName'];
      this.emailAddress = data['emailAddress'];
      this.password = data['password'];
      this.captchaResponse = data['captchaResponse'];
    }
  }
}

export class RegisterOutput {
  /**  */
  canLogin: boolean;

  constructor(data?: any) {
    if (data) {
      this.canLogin = data['canLogin'];
    }
  }
}

export class ChangeUiThemeInput {
  /**  */
  theme: string;

  constructor(data?: any) {
    if (data) {
      this.theme = data['theme'];
    }
  }
}

export class InstallDto {
  /**  */
  connectionString: string;

  /**  */
  adminPassword: string;

  /**  */
  webSiteUrl: string;

  /**  */
  serverUrl: string;

  /**  */
  defaultLanguage: string;

  constructor(data?: any) {
    if (data) {
      this.connectionString = data['connectionString'];
      this.adminPassword = data['adminPassword'];
      this.webSiteUrl = data['webSiteUrl'];
      this.serverUrl = data['serverUrl'];
      this.defaultLanguage = data['defaultLanguage'];
    }
  }
}

export class AppSettingsJsonDto {
  /**  */
  connectionString: string;

  /**  */
  webSiteUrl: string;

  /**  */
  serverSiteUrl: string;

  /**  */
  languages: NameValue[];

  constructor(data?: any) {
    if (data) {
      this.connectionString = data['connectionString'];
      this.webSiteUrl = data['webSiteUrl'];
      this.serverSiteUrl = data['serverSiteUrl'];
      this.languages = data['languages'];
    }
  }
}

export class NameValue {
  /**  */
  name: string;

  /**  */
  value: string;

  constructor(data?: any) {
    if (data) {
      this.name = data['name'];
      this.value = data['value'];
    }
  }
}

export class CheckDatabaseOutput {
  /**  */
  isDatabaseExist: boolean;

  constructor(data?: any) {
    if (data) {
      this.isDatabaseExist = data['isDatabaseExist'];
    }
  }
}

export class CreateRoleDto {
  /**  */
  name: string;

  /**  */
  displayName: string;

  /**  */
  normalizedName: string;

  /**  */
  description: string;

  /**  */
  isStatic: boolean;

  /**  */
  permissions: string[];

  constructor(data?: any) {
    if (data) {
      this.name = data['name'];
      this.displayName = data['displayName'];
      this.normalizedName = data['normalizedName'];
      this.description = data['description'];
      this.isStatic = data['isStatic'];
      this.permissions = data['permissions'];
    }
  }
}

export class RoleDto {
  /**  */
  name: string;

  /**  */
  displayName: string;

  /**  */
  normalizedName: string;

  /**  */
  description: string;

  /**  */
  isStatic: boolean;

  /**  */
  permissions: string[];

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this.name = data['name'];
      this.displayName = data['displayName'];
      this.normalizedName = data['normalizedName'];
      this.description = data['description'];
      this.isStatic = data['isStatic'];
      this.permissions = data['permissions'];
      this.id = data['id'];
    }
  }
}

export class ListResultDtoPermissionDto {
  /**  */
  items: PermissionDto[];

  constructor(data?: any) {
    if (data) {
      this.items = data['items'];
    }
  }
}

export class PermissionDto {
  /**  */
  name: string;

  /**  */
  displayName: string;

  /**  */
  description: string;

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this.name = data['name'];
      this.displayName = data['displayName'];
      this.description = data['description'];
      this.id = data['id'];
    }
  }
}

export class PagedResultDtoRoleDto {
  /**  */
  totalCount: number;

  /**  */
  items: RoleDto[];

  constructor(data?: any) {
    if (data) {
      this.totalCount = data['totalCount'];
      this.items = data['items'];
    }
  }
}

export class GetCurrentLoginInformationsOutput {
  /**  */
  application: ApplicationInfoDto;

  /**  */
  user: UserLoginInfoDto;

  /**  */
  tenant: TenantLoginInfoDto;

  constructor(data?: any) {
    if (data) {
      this.application = data['application'];
      this.user = data['user'];
      this.tenant = data['tenant'];
    }
  }
}

export class ApplicationInfoDto {
  /**  */
  version: string;

  /**  */
  releaseDate: string;

  /**  */
  features: object;

  constructor(data?: any) {
    if (data) {
      this.version = data['version'];
      this.releaseDate = data['releaseDate'];
      this.features = data['features'];
    }
  }
}

export class UserLoginInfoDto {
  /**  */
  name: string;

  /**  */
  surname: string;

  /**  */
  userName: string;

  /**  */
  emailAddress: string;

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this.name = data['name'];
      this.surname = data['surname'];
      this.userName = data['userName'];
      this.emailAddress = data['emailAddress'];
      this.id = data['id'];
    }
  }
}

export class TenantLoginInfoDto {
  /**  */
  tenancyName: string;

  /**  */
  name: string;

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this.tenancyName = data['tenancyName'];
      this.name = data['name'];
      this.id = data['id'];
    }
  }
}

export class CreateTenantDto {
  /**  */
  tenancyName: string;

  /**  */
  name: string;

  /**  */
  adminEmailAddress: string;

  /**  */
  connectionString: string;

  /**  */
  isActive: boolean;

  constructor(data?: any) {
    if (data) {
      this.tenancyName = data['tenancyName'];
      this.name = data['name'];
      this.adminEmailAddress = data['adminEmailAddress'];
      this.connectionString = data['connectionString'];
      this.isActive = data['isActive'];
    }
  }
}

export class TenantDto {
  /**  */
  tenancyName: string;

  /**  */
  name: string;

  /**  */
  isActive: boolean;

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this.tenancyName = data['tenancyName'];
      this.name = data['name'];
      this.isActive = data['isActive'];
      this.id = data['id'];
    }
  }
}

export class PagedResultDtoTenantDto {
  /**  */
  totalCount: number;

  /**  */
  items: TenantDto[];

  constructor(data?: any) {
    if (data) {
      this.totalCount = data['totalCount'];
      this.items = data['items'];
    }
  }
}

export class AuthenticateModel {
  /**  */
  userNameOrEmailAddress: string;

  /**  */
  password: string;

  /**  */
  rememberClient: boolean;

  constructor(data?: any) {
    if (data) {
      this.userNameOrEmailAddress = data['userNameOrEmailAddress'];
      this.password = data['password'];
      this.rememberClient = data['rememberClient'];
    }
  }
}

export class AuthenticateResultModel {
  /**  */
  accessToken: string;

  /**  */
  encryptedAccessToken: string;

  /**  */
  expireInSeconds: number;

  /**  */
  userId: number;

  constructor(data?: any) {
    if (data) {
      this.accessToken = data['accessToken'];
      this.encryptedAccessToken = data['encryptedAccessToken'];
      this.expireInSeconds = data['expireInSeconds'];
      this.userId = data['userId'];
    }
  }
}

export class ExternalLoginProviderInfoModel {
  /**  */
  name: string;

  /**  */
  clientId: string;

  constructor(data?: any) {
    if (data) {
      this.name = data['name'];
      this.clientId = data['clientId'];
    }
  }
}

export class ExternalAuthenticateModel {
  /**  */
  authProvider: string;

  /**  */
  providerKey: string;

  /**  */
  providerAccessCode: string;

  constructor(data?: any) {
    if (data) {
      this.authProvider = data['authProvider'];
      this.providerKey = data['providerKey'];
      this.providerAccessCode = data['providerAccessCode'];
    }
  }
}

export class ExternalAuthenticateResultModel {
  /**  */
  accessToken: string;

  /**  */
  encryptedAccessToken: string;

  /**  */
  expireInSeconds: number;

  /**  */
  waitingForActivation: boolean;

  constructor(data?: any) {
    if (data) {
      this.accessToken = data['accessToken'];
      this.encryptedAccessToken = data['encryptedAccessToken'];
      this.expireInSeconds = data['expireInSeconds'];
      this.waitingForActivation = data['waitingForActivation'];
    }
  }
}

export class CreateUserDto {
  /**  */
  userName: string;

  /**  */
  name: string;

  /**  */
  surname: string;

  /**  */
  emailAddress: string;

  /**  */
  isActive: boolean;

  /**  */
  roleNames: string[];

  /**  */
  password: string;

  constructor(data?: any) {
    if (data) {
      this.userName = data['userName'];
      this.name = data['name'];
      this.surname = data['surname'];
      this.emailAddress = data['emailAddress'];
      this.isActive = data['isActive'];
      this.roleNames = data['roleNames'];
      this.password = data['password'];
    }
  }
}

export class UserDto {
  /**  */
  userName: string;

  /**  */
  name: string;

  /**  */
  surname: string;

  /**  */
  emailAddress: string;

  /**  */
  isActive: boolean;

  /**  */
  fullName: string;

  /**  */
  lastLoginTime: string;

  /**  */
  creationTime: string;

  /**  */
  roleNames: string[];

  /**  */
  id: number;

  constructor(data?: any) {
    if (data) {
      this.userName = data['userName'];
      this.name = data['name'];
      this.surname = data['surname'];
      this.emailAddress = data['emailAddress'];
      this.isActive = data['isActive'];
      this.fullName = data['fullName'];
      this.lastLoginTime = data['lastLoginTime'];
      this.creationTime = data['creationTime'];
      this.roleNames = data['roleNames'];
      this.id = data['id'];
    }
  }
}

export class ListResultDtoRoleDto {
  /**  */
  items: RoleDto[];

  constructor(data?: any) {
    if (data) {
      this.items = data['items'];
    }
  }
}

export class ChangeUserLanguageDto {
  /**  */
  languageName: string;

  constructor(data?: any) {
    if (data) {
      this.languageName = data['languageName'];
    }
  }
}

export class PagedResultDtoUserDto {
  /**  */
  totalCount: number;

  /**  */
  items: UserDto[];

  constructor(data?: any) {
    if (data) {
      this.totalCount = data['totalCount'];
      this.items = data['items'];
    }
  }
}
