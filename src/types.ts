export interface ISPInfo {
    asn?: string;
    org?: string;
    isp?: string;
  }
  
  export interface LocationInfo {
    country?: string;
    country_code?: string;
    city?: string;
    state?: string;
    zipcode?: string;
    latitude?: number;
    longitude?: number;
    timezone?: string;
    localtime?: string;
  }
  
  export interface RiskInfo {
    is_mobile?: boolean;
    is_vpn?: boolean;
    is_tor?: boolean;
    is_proxy?: boolean;
    is_datacenter?: boolean;
    risk_score?: number;
  }
  
  export interface IPInfo {
    ip: string;
    isp?: ISPInfo;
    location?: LocationInfo;
    risk?: RiskInfo;
  }
  