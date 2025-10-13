class apiUtils {


    constructor(apiContext, loginPayload, createOrderPayload) {

        this.apiContext = apiContext;
        this.loginPayload = loginPayload;
        this.createOrderPayload = createOrderPayload;

    }




    async getToken() {

        const loginResponse = await this.apiContext.post('https://rahulshettyacademy.com/api/ecom/auth/login',
            { data: this.loginPayload });

        const loginResponseJson = await loginResponse.json();

        console.log(loginResponse.status());


        const token = loginResponseJson.token;

        return token;


    };


    async createOrder() {

        const headerInput = { 'Authorization': await this.getToken(), "Content-Type": 'application/json' };

        const createOrderResponse = await this.apiContext.post('https://rahulshettyacademy.com/api/ecom/order/create-order',
            {
                data: this.createOrderPayload,
                headers: headerInput,
            },

        );

        const createOrderResponseJson = await createOrderResponse.json();

        const orderId = createOrderResponseJson.orders[0];

        console.log("orderId: ", orderId);

        return orderId;


    };



}

module.exports = { apiUtils };