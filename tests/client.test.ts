import { queryIP, queryOwnIP, queryBulk } from '../src/client';

describe('enrichip', () => {
  it('should fetch IP information', async () => {
    const ipInfo = await queryIP('8.8.8.8');
    expect(ipInfo.ip).toBe('8.8.8.8');
  });

  it('should fetch own IP address', async () => {
    const ip = await queryOwnIP();
    expect(typeof ip).toBe('string');
  });

  it('should fetch bulk IP information', async () => {
    const results = await queryBulk(['8.8.8.8', '1.1.1.1']);
    expect(results.length).toBe(2);
  });
});
