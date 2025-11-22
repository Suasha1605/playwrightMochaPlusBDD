
import {test,expect} from '@playwright/test'

test('api test',async({request})=>{

 const response =  await request.get('url')


 const responseBody = response.json()

 expect(responseBody.id).toBe('1234')
 expect(responseBody.username).toBe('sunil')



})








