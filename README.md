# enrichip

A TypeScript/JavaScript library to query IP addresses using the [ipquery.io](https://ipquery.io) API. This package provides detailed information about IP addresses, including ISP details, geolocation, and risk assessment.

## Features

- Query information for a specific IP address.
- Fetch your own public IP address.
- Perform bulk queries for multiple IP addresses.
- Compatible with both TypeScript and JavaScript.
- Uses `axios` for HTTP requests.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
  - [Query a Specific IP Address](#query-a-specific-ip-address)
  - [Fetch Your Own Public IP Address](#fetch-your-own-public-ip-address)
  - [Bulk Query Multiple IP Addresses](#bulk-query-multiple-ip-addresses)
- [API Reference](#api-reference)
- [Types](#types)
- [Running Tests](#running-tests)
- [Contributing](#contributing)
- [License](#license)

---

## Installation

Install the package using npm:

```bash
npm install enrichip
```

Or using yarn:

```bash
yarn add enrichip
```

## Usage

### Importing the Package

You can import the package using ES Modules:

```typescript
import { queryIP, queryOwnIP, queryBulk } from 'enrichip';
```

Or using CommonJS:

```javascript
const { queryIP, queryOwnIP, queryBulk } = require('enrichip');
```

### Query a Specific IP Address

Retrieve detailed information about a specific IP address:

```typescript
import { queryIP } from 'enrichip';

async function getIPInfo() {
  try {
    const ipInfo = await queryIP('8.8.8.8');
    console.log(ipInfo);
  } catch (error) {
    console.error('Error fetching IP info:', error);
  }
}

getIPInfo();
```

#### Example Output:
```json
{
  "ip": "8.8.8.8",
  "isp": {
    "asn": "AS15169",
    "org": "Google LLC",
    "isp": "Google LLC"
  },
  "location": {
    "country": "United States",
    "country_code": "US",
    "city": "Mountain View",
    "state": "California",
    "zipcode": "94035",
    "latitude": 37.386,
    "longitude": -122.0838,
    "timezone": "America/Los_Angeles",
    "localtime": "2024-11-09T12:45:32"
  },
  "risk": {
    "is_mobile": false,
    "is_vpn": false,
    "is_tor": false,
    "is_proxy": false,
    "is_datacenter": true,
    "risk_score": 0
  }
}
```

### Fetch Your Own Public IP Address

Retrieve the public IP address of the machine running your code:

```typescript
import { queryOwnIP } from 'enrichip';

async function getOwnIP() {
  try {
    const ip = await queryOwnIP();
    console.log('Your IP:', ip);
  } catch (error) {
    console.error('Error fetching own IP:', error);
  }
}

getOwnIP();
```

#### Example Output:
```
Your IP: 203.0.113.45
```

### Bulk Query Multiple IP Addresses

Fetch details for multiple IP addresses in one go:

```typescript
import { queryBulk } from 'enrichip';

async function getBulkIPInfo() {
  try {
    const ips = ['8.8.8.8', '1.1.1.1'];
    const results = await queryBulk(ips);
    console.log(results);
  } catch (error) {
    console.error('Error fetching bulk IP info:', error);
  }
}

getBulkIPInfo();
```

#### Example Output:
```json
[
  {
    "ip": "8.8.8.8",
    "isp": { "asn": "AS15169", "org": "Google LLC", "isp": "Google LLC" },
    "location": { "country": "United States", "city": "Mountain View" }
  },
  {
    "ip": "1.1.1.1",
    "isp": { "asn": "AS13335", "org": "Cloudflare, Inc.", "isp": "Cloudflare" },
    "location": { "country": "Australia", "city": "Sydney" }
  }
]
```

## API Reference

### `queryIP(ip: string): Promise<IPInfo>`
Fetches detailed information about a specific IP address.

- **Parameters**:
  - `ip`: The IP address to query.
- **Returns**: A promise that resolves to an `IPInfo` object.

### `queryOwnIP(): Promise<string>`
Fetches the public IP address of the current machine.

- **Returns**: A promise that resolves to the IP address as a string.

### `queryBulk(ips: string[]): Promise<IPInfo[]>`
Fetches information for multiple IP addresses.

- **Parameters**:
  - `ips`: An array of IP addresses to query.
- **Returns**: A promise that resolves to an array of `IPInfo` objects.

## Types

### `IPInfo`
```typescript
interface ISPInfo {
  asn?: string;
  org?: string;
  isp?: string;
}

interface LocationInfo {
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

interface RiskInfo {
  is_mobile?: boolean;
  is_vpn?: boolean;
  is_tor?: boolean;
  is_proxy?: boolean;
  is_datacenter?: boolean;
  risk_score?: number;
}

interface IPInfo {
  ip: string;
  isp?: ISPInfo;
  location?: LocationInfo;
  risk?: RiskInfo;
}
```

## Running Tests

To run the tests, use:

```bash
npm test
```

Ensure that `ts-node` and `jest` are properly configured before running the tests.


## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Links

- [GitHub Repository](https://github.com/ipqwery/ipapi-ts)
- [npm Package](https://www.npmjs.com/package/enrichip)
- [ipquery.io API Documentation](https://ipquery.io/docs)
