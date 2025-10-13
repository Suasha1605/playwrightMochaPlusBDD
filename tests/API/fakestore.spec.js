const { test, expect } = require('@playwright/test');
const Ajv = require('ajv');

const productSchema = {
    type: 'object',
    required: ['id', 'title', 'price', 'category', 'description'],
    properties: {
        id: { type: 'number' },
        title: { type: 'string' },
        price: { type: 'number' },
        category: { type: 'string' },
        description: { type: 'string' },
        image: { type: 'string' }
    }
};

test.describe('FakeStore API Tests', () => {
    const baseUrl = 'https://fakestoreapi.com';
    let ajv;

    test.beforeAll(() => {
        ajv = new Ajv();
    });

    test('should get product details and validate response', async ({ request }) => {
        // Send GET request
        const response = await request.get(`${baseUrl}/products/1`);

        // Verify status code is 200
        expect(response.status()).toBe(200);

        // Parse response body
        const product = await response.json();

        // Validate required fields exist
        expect(product).toHaveProperty('id');
        expect(product).toHaveProperty('title');
        expect(product).toHaveProperty('price');
        expect(product).toHaveProperty('category');
        expect(product).toHaveProperty('description');

        // Validate JSON Schema
        const validate = ajv.compile(productSchema);
        const isValid = validate(product);
        expect(isValid).toBeTruthy();
        if (!isValid) {
            console.error('Schema validation errors:', validate.errors);
        }

        // Log product details
        console.log(`Product Title: ${product.title}`);
        console.log(`Product Price: $${product.price}`);
    });
});