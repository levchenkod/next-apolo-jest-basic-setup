import { GET } from '../route';

test('/api/faqs', () => {
  it('gets list of faq-s', async () => {
    const response = await (await GET()).json();

    expect(response?.data).toBeDefined();
  })
})
